import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [userData, setUserData] = useState(null);
  const [chatData, setChatData] = useState(null);
  const [messagesId, setMessagesId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [chatUser, setChatUser] = useState(null);
  const [chatVisible, setChatVisible] = useState(false);
  const navigate = useNavigate();

  // Function to load user data based on user ID
  const loadUserData = async (uid) => {
    try {
      const userRef = doc(db, "users", uid);
      const userSnap = await getDoc(userRef);
      const userData = userSnap.data();
      setUserData(userData);

      // Navigate to different pages based on user data availability
      if (userData.avatar && userData.name) {
        navigate("/chat");
      } else {
        navigate("/profile");
      }

      // Update user's last seen time
      await updateDoc(userRef, {
        lastSeen: Date.now(),
      });

      // Clear existing interval if any
      if (window.chatUpdateInterval) {
        clearInterval(window.chatUpdateInterval);
      }

      // Set up an interval to update user's last seen time every minute
      window.chatUpdateInterval = setInterval(async () => {
        if (auth.currentUser) {
          await updateDoc(userRef, {
            lastSeen: Date.now(),
          });
        }
      }, 60000);
    } catch (error) {
      toast.error(error.message); // Show error message using toast
    }
  };

  // Effect to handle real-time updates to chat data
  useEffect(() => {
    if (userData) {
      const chatRef = doc(db, "chats", userData.id);
      const unSub = onSnapshot(chatRef, async (res) => {
        const chatItems = res.data().chatsData;
        const tempData = [];
        for (const item of chatItems) {
          const userRef = doc(db, "users", item.rId);
          const userSnap = await getDoc(userRef);
          const userData = userSnap.data();
          tempData.push({ ...item, userData });
        }
        setChatData(tempData.sort((a, b) => b.updatedAt - a.updatedAt)); // Sort chat data by latest update
      });

      // Cleanup on unmount: unsubscribe from chat updates and clear interval
      return () => {
        unSub();
        if (window.chatUpdateInterval) {
          clearInterval(window.chatUpdateInterval);
        }
      };
    }
  }, [userData]);

  // Effect to periodically fetch and update chat data
  useEffect(() => {
    if (userData) {
      const fetchChatData = async () => {
        const chatRef = doc(db, "chats", userData.id);
        const data = await getDoc(chatRef);
        const chatItems = data.data().chatsData;
        const tempData = [];
        for (const item of chatItems) {
          const userRef = doc(db, "users", item.rId);
          const userSnap = await getDoc(userRef);
          const userData = userSnap.data();
          tempData.push({ ...item, userData });
        }
        setChatData(tempData.sort((a, b) => b.updatedAt - a.updatedAt)); // Sort chat data by latest update
      };

      const intervalId = setInterval(fetchChatData, 10000); // Fetch chat data every 10 seconds

      // Cleanup on unmount: clear interval
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [userData]);

  // Provide context values to child components
  const value = {
    userData,
    setUserData,
    loadUserData,
    chatData,
    messagesId,
    setMessagesId,
    chatUser,
    setChatUser,
    chatVisible,
    setChatVisible,
    messages,
    setMessages,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
