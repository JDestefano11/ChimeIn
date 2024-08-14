import { doc, getDoc, onSnapshot, updateDoc, setDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db, auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);
  const [chatData, setChatData] = useState(null);
  const [chatUser, setChatUser] = useState(null);
  const [messagesId, setMessagesId] = useState(null);
  const [chatVisible, setChatVisible] = useState(false);

  // Function to load user data from Firestore
  const loadUserData = async (uid) => {
    try {
      // Get a reference to the user document in Firestore
      const userRef = doc(db, "users", uid);

      // Fetch the user document data
      const userSnap = await getDoc(userRef);
      const userData = userSnap.data();

      // Update the userData state with the fetched data
      setUserData(userData);

      // Redirect to the appropriate route based on user data
      if (userData && userData.avatar && userData.name) {
        // If the user has an avatar and name, navigate to the /chat route
        navigate("/chat");
      } else {
        // If the user doesn't have an avatar or name, navigate to the /profile route
        navigate("/profile");
      }

      // Update the user's lastSeen field in Firestore
      await updateDoc(userRef, {
        lastSeen: Date.now(),
      });

      // Set an interval to update the user's lastSeen field every 60 seconds
      const interval = setInterval(async () => {
        if (auth.currentUser) {
          await updateDoc(userRef, {
            lastSeen: Date.now(),
          });
        }
      }, 60000);
    } catch (error) {
      // Log any errors that occur while loading user data
      console.error("Error loading user data:", error);
    }
  };

  useEffect(() => {
    console.log("Chat loading process initiated for user:", userData?.uid);

    if (userData?.uid) {
      const chatRef = doc(db, "chats", userData.uid);
      console.log("Chat reference created:", chatRef.path);

      const unSub = onSnapshot(chatRef, async (docSnapshot) => {
        console.log(
          "Chat snapshot received. Document exists:",
          docSnapshot.exists()
        );

        if (docSnapshot.exists()) {
          const chatItems = docSnapshot.data().chatsData || [];
          console.log("Number of chat items retrieved:", chatItems.length);

          const tempData = await Promise.all(
            chatItems.map(async (item) => {
              console.log("Fetching user data for chat item:", item.rID);
              const userRef = doc(db, "users", item.rID);
              const userSnap = await getDoc(userRef);
              const userData = userSnap.data();
              return { ...item, userData };
            })
          );

          console.log("Processed chat data:", tempData);
          setChatData(tempData.sort((a, b) => b.updatedAt - a.updatedAt));
          console.log("Chat data sorted and set in state");
        } else {
          console.log("No existing chat document. Creating empty chat data.");
          await setDoc(chatRef, { chatData: [] });
          setChatData([]);
          console.log("Empty chat data set in state");
        }
      });

      return () => {
        console.log("Cleaning up chat listener for user:", userData.uid);
        unSub();
      };
    }
  }, [userData]);

  // Value object to be passed down to the context consumers
  const value = {
    userData,
    setUserData,
    chatData,
    setChatData,
    chatUser,
    setChatUser,
    messagesId,
    setMessagesId,
    chatVisible,
    setChatVisible,
    loadUserData,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
