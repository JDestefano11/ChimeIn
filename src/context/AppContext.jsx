import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Create a context for global state management
export const AppContext = createContext();

const AppContextProvider = (props) => {
  // State variables for user data, chat data, messages, and UI control
  const [userData, setUserData] = useState(null);
  const [chatData, setChatData] = useState(null);
  const [messagesId, setMessagesId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [chatUser, setChatUser] = useState(null);
  const [chatVisible, setChatVisible] = useState(false);
  const [activeUsers, setActiveUsers] = useState({});
  const navigate = useNavigate();

  // Function to load user data from Firestore
  const loadUserData = async (uid) => {
    try {
      const userRef = doc(db, "users", uid);
      const userSnap = await getDoc(userRef);
      const userData = userSnap.data();
      setUserData(userData);

      // Navigate based on user profile completeness
      if (userData.avatar && userData.name) {
        navigate("/chat");
      } else {
        navigate("/profile");
      }

      // Update user's last seen timestamp
      await updateDoc(userRef, {
        lastSeen: Date.now(),
      });

      // Set interval to update last seen every minute
      setInterval(async () => {
        if (auth.currentUser) {
          await updateDoc(userRef, {
            lastSeen: Date.now(),
          });
        }
      }, 60000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Effect to listen for changes in chat data
  useEffect(() => {
    if (userData) {
      const chatRef = doc(db, "chats", userData.id);
      const unSub = onSnapshot(chatRef, async (res) => {
        const chatItems = res.data().chatsData;
        const tempData = [];
        for (const item of chatItems) {
          // Fetch user data for each chat
          const userRef = doc(db, "users", item.rId);
          const userSnap = await getDoc(userRef);
          const userData = userSnap.data();
          tempData.push({ ...item, userData });
          // Update active users
          setActiveUsers((prev) => ({
            ...prev,
            [item.rId]: userData.lastSeen,
          }));
        }
        // Sort chat data by last update time
        setChatData(tempData.sort((a, b) => b.updatedAt - a.updatedAt));
      });

      return () => {
        unSub();
      };
    }
  }, [userData]);

  // Function to update active users
  const updateActiveUsers = (userId, lastSeen) => {
    setActiveUsers((prev) => ({ ...prev, [userId]: lastSeen }));
  };

  // Context value object
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
    activeUsers,
    updateActiveUsers,
  };

  // Provide the context value to child components
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
