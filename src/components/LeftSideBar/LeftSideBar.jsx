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
  onSnapshot,
} from "firebase/firestore";
import { AppContext } from "../../context/AppContext";

const LeftSideBar = () => {
  const navigate = useNavigate();
  // Context values for managing chat state
  const { userData, setChatUser, setMessagesId, setChatVisible, setChatData } =
    useContext(AppContext);

  // Local state management
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [chatItems, setChatItems] = useState([]);
  const menuRef = useRef(null);
  const db = getFirestore();

  useEffect(() => {
    if (userData) {
      const chatsRef = doc(db, "chats", userData.id);
      const unsubscribe = onSnapshot(chatsRef, async (snapshot) => {
        if (snapshot.exists()) {
          const fetchedChatData = snapshot.data().chatsData || [];
          const chatMap = new Map();

          for (const chat of fetchedChatData) {
            if (
              !chatMap.has(chat.rId) ||
              chat.updatedAt > chatMap.get(chat.rId).updatedAt
            ) {
              const userSnap = await getDoc(doc(db, "users", chat.rId));
              const userData = userSnap.exists() ? userSnap.data() : {};
              chatMap.set(chat.rId, { ...chat, userData });
            }
          }

          const uniqueChatItems = Array.from(chatMap.values()).sort(
            (a, b) => b.updatedAt - a.updatedAt
          );
          setChatItems(uniqueChatItems);
          setChatData(uniqueChatItems);
        }
        setIsLoading(false);
      });

      return () => unsubscribe();
    }
  }, [userData, db, setChatData]);

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

  // Add and remove click outside listener
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Search users function
  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    const usersRef = collection(db, "users");

    try {
      const querySnapshot = await getDocs(usersRef);
      const allUsers = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const filteredResults = allUsers
        .filter((user) => user.id !== userData.id)
        .filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

      setSearchResults(filteredResults);
    } catch (error) {
      console.error("Error searching for users:", error);
    }
  };

  // Trigger search when search term changes
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  // Handle existing chat selection
  const handleChatClick = (item) => {
    setChatUser(item);
    setMessagesId(item.messageId);
    setChatVisible(true);
  };

  // Format timestamp to display time in HH:MM format
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
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
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ls-list">
        {isLoading ? ( // Show loading state until chats are fetched
          <p>Loading chats...</p>
        ) : chatItems.length > 0 ? (
          // Display chat items after loading
          chatItems.map((item, index) => (
            <div
              className="friends"
              key={index}
              onClick={() => handleChatClick(item)}
            >
              <img
                src={item.userData?.avatar || assets.profile_img}
                alt={`${item.userData?.name}'s avatar`}
              />
              <div className="friend-info">
                <div className="friend-name-time">
                  <p>{item.userData?.name}</p>
                  <span className="message-time">
                    {formatTimestamp(item.updatedAt)}
                  </span>
                </div>
                <span className="last-message">
                  {item.lastMessage || "No messages yet"}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p>No messages available</p> // Show this if there are no chats available
        )}
      </div>
    </div>
  );
};

export default LeftSideBar;
