import React, { useState, useEffect, useRef, useContext } from "react";
import "./LeftSideBar.css";
import assets from "../../../public/assets/assets";
import { useNavigate } from "react-router";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
  arrayUnion,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { AppContext } from "../../context/AppContext"; // Import AppContext to access global state

const LeftSideBar = () => {
  // Hooks
  const navigate = useNavigate(); // Hook for navigation
  const { chatData, userData, setChatUser, setMessagesId, setChatVisible } =
    useContext(AppContext); // Accessing context values

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); // State for submenu visibility
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [searchResults, setSearchResults] = useState([]); // State for search results
  const [selectedUser, setSelectedUser] = useState(null); // State for selected user
  const menuRef = useRef(null); // Ref for menu DOM element
  const db = getFirestore(); // Firestore instance

  // Toggle submenu visibility
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  // Close submenu when clicking outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsSubMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Search users in Firestore
  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      setSearchResults([]); // Clear results if search term is empty
      return;
    }

    const usersRef = collection(db, "users");

    try {
      const querySnapshot = await getDocs(usersRef); // Fetch all users
      const allUsers = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const filteredResults = allUsers.filter(
        (user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filter users based on search term
      );

      setSearchResults(filteredResults);
    } catch (error) {
      console.error("Error searching for users:", error);
    }
  };

  useEffect(() => {
    handleSearch(); // Perform search when search term changes
  }, [searchTerm]);

  // Handle user selection and initiate chat
  const handleUserClick = async (user) => {
    setSelectedUser(user); // Set the selected user

    try {
      if (!user) {
        throw new Error("No user selected");
      }
      await addChat(user); // Add chat functionality
      console.log("Success: Chat with user initiated");
    } catch (error) {
      console.error("Error adding chat:", error);
    }
  };

  // Add chat between users in Firestore
  const addChat = async (user) => {
    const messagesRef = collection(db, "messages");
    const chatsRef = collection(db, "chats");

    try {
      const newMessageRef = doc(messagesRef); // Create a new message document
      await setDoc(newMessageRef, {
        createdAt: serverTimestamp(),
        messages: [], // Initialize with empty messages array
      });

      // Update chat references for both users
      await updateDoc(doc(chatsRef, user.id), {
        chatsData: arrayUnion({
          messageId: newMessageRef.id,
          lastMessage: "",
          rId: userData.id,
          updatedAt: Date.now(),
          messageSeen: true,
        }),
      });

      await updateDoc(doc(chatsRef, userData.id), {
        chatsData: arrayUnion({
          messageId: newMessageRef.id,
          lastMessage: "",
          rId: user.id,
          updatedAt: Date.now(),
          messageSeen: true,
        }),
      });

      // Fetch user data and update context
      const uSnap = await getDoc(doc(db, "users", user.id));
      const uData = uSnap.data();

      setChatUser({
        messageId: newMessageRef.id,
        lastMessage: "",
        rId: user.id,
        updatedAt: Date.now(),
        messageSeen: true,
        userData: uData,
      });
      setMessagesId(newMessageRef.id);
      setChatVisible(true); // Show chat
    } catch (error) {
      console.error("Error adding chat:", error);
    }
  };

  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} className="logo" alt="Logo" />
          <div className="menu" ref={menuRef}>
            <img
              src={assets.menu_icon}
              alt="Menu"
              onClick={toggleSubMenu}
              className="menu-icon"
            />
            {isSubMenuOpen && (
              <div className="sub-menu">
                <p onClick={() => navigate("/profile")}>Edit Profile</p>
                <hr />
                <p>Logout</p>
              </div>
            )}
          </div>
        </div>
        <div className="ls-search">
          <img src={assets.search_icon} alt="Search" />
          <input
            type="text"
            placeholder="Search users.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          />
        </div>
      </div>
      <div className="ls-list">
        {searchResults.length > 0
          ? searchResults.map((user) => (
              <div
                className="friends"
                key={user.id}
                onClick={() => handleUserClick(user)}
              >
                <img
                  src={user.avatar || assets.profile_img}
                  alt={`${user.name}'s profile`}
                />
                <div>
                  <p>{user.name}</p>
                  <span>{user.email || "No email provided"}</span>
                </div>
              </div>
            ))
          : Array(12)
              .fill("")
              .map((_, index) => (
                <div className="friends" key={index}>
                  <img src={assets.profile_img} alt="Default profile" />
                  <div>
                    <p>John Doe</p>
                    <span>Hello, how are you?</span>
                  </div>
                </div>
              ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
