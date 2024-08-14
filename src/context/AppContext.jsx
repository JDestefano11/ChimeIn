import { doc, getDoc, onSnapshot, updateDoc, setDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db, auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);
  const [chatData, setChatData] = useState(null);

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
    // Only run this effect if userData and its uid property exist
    if (userData?.uid) {
      // Create a reference to the user's chat document in Firestore
      const chatRef = doc(db, "chats", userData.uid);

      // Set up a real-time listener for changes to the chat document
      const unSub = onSnapshot(chatRef, async (docSnapshot) => {
        if (docSnapshot.exists()) {
          // If the chat document exists, retrieve the chat data
          const chatItems = docSnapshot.data().chatData || [];

          // Map over each chat item and fetch the corresponding user data
          const tempData = await Promise.all(
            chatItems.map(async (item) => {
              const userRef = doc(db, "users", item.rID);
              const userSnap = await getDoc(userRef);
              const userData = userSnap.data();
              // Combine chat item data with user data
              return { ...item, userData };
            })
          );

          // Sort the chat data by updatedAt timestamp in descending order
          setChatData(tempData.sort((a, b) => b.updatedAt - a.updatedAt));
        } else {
          // If the chat document doesn't exist, create an empty one
          await setDoc(chatRef, { chatData: [] });
          setChatData([]);
        }
      });

      // Clean up the listener when the component unmounts or userData changes
      return () => unSub();
    }
  }, [userData]); // Re-run this effect when userData changes

  // Value object to be passed down to the context consumers
  const value = {
    userData,
    setUserData,
    chatData,
    setChatData,
    loadUserData,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
