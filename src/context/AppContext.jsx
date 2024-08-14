import { doc, getDoc, updateDoc } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../config/firebase";
import { useNavigate } from "react-router";

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
        navigate("/profile");
      } else {
        // If the user doesn't have an avatar or name, navigate to the /profile route
        navigate("/chat");
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
