import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from "react";
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
import { AppContext } from "../../context/AppContext";
import debounce from "lodash.debounce";

const LeftSideBar = () => {
  const navigate = useNavigate();

  // Destructure needed state and functions from the AppContext
  const {
    chatData,
    userData,
    setChatUser,
    setMessagesId,
    setChatVisible,
    setChatData,
  } = useContext(AppContext);

  // Component state management
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); // Tracks the state of the submenu
  const [searchTerm, setSearchTerm] = useState(""); // Manages the search term input
  const [searchResults, setSearchResults] = useState([]); // Stores the search results
  const [selectedUser, setSelectedUser] = useState(null); // Tracks the currently selected user
  const [excludedUsers, setExcludedUsers] = useState([]); // Stores the list of excluded users
  const [isLoading, setIsLoading] = useState(true); // Tracks the loading state for chat data
  const menuRef = useRef(null); // Reference for the submenu
  const db = getFirestore(); // Firebase Firestore instance

  // Fetch chat data if it's not already loaded
  useEffect(() => {
    const fetchChatData = async () => {
      if (userData && (!chatData || chatData.length === 0)) {
        setIsLoading(true);
        const chatsRef = collection(db, "chats");
        const userChatsDoc = await getDoc(doc(chatsRef, userData.id));
        if (userChatsDoc.exists()) {
          const fetchedChatData = userChatsDoc.data().chatsData || [];
          setChatData(fetchedChatData); // Update the chat data state
        }
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };

    fetchChatData();
  }, [userData, chatData, setChatData, db]);

  // Load excluded users from localStorage on component mount
  useEffect(() => {
    const storedExcludedUsers =
      JSON.parse(localStorage.getItem("excludedUsers")) || [];
    setExcludedUsers(storedExcludedUsers);
  }, []);

  // Save excluded users to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("excludedUsers", JSON.stringify(excludedUsers));
  }, [excludedUsers]);

  // Toggle the submenu open/closed
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  // Close the submenu if a click occurs outside of it
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsSubMenuOpen(false);
    }
  };

  // Attach event listener for clicks outside the submenu
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle search functionality
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

      // Filter users based on search term and exclusion list
      const filteredResults = allUsers
        .filter((user) => !excludedUsers.includes(user.id))
        .filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

      setSearchResults(filteredResults); // Update the search results state
    } catch (error) {
      console.error("Error searching for users:", error);
    }
  };

  // Debounce the search input to reduce the number of search calls
  const debouncedHandleSearch = useCallback(debounce(handleSearch, 300), [
    searchTerm,
    excludedUsers,
  ]);

  // Trigger the search function whenever the search term or excluded users change
  useEffect(() => {
    debouncedHandleSearch();
  }, [searchTerm, excludedUsers, debouncedHandleSearch]);

  // Handle user click event to initiate a chat
  const handleUserClick = async (user) => {
    setSelectedUser(user);

    try {
      if (!user) {
        throw new Error("No user selected");
      }
      await addChat(user); // Add the chat with the selected user
      console.log("Success: Chat with user initiated");
    } catch (error) {
      console.error("Error adding chat:", error);
    }
  };

  // Add a new chat with the selected user
  const addChat = async (user) => {
    if (!userData) return;
    const messagesRef = collection(db, "messages");
    const chatsRef = collection(db, "chats");

    try {
      const newMessageRef = doc(messagesRef);
      await setDoc(newMessageRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      // Update chat data for both users
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

      // Get user data for the selected user
      const uSnap = await getDoc(doc(db, "users", user.id));
      const uData = uSnap.data();

      // Set the chat user and update relevant states
      setChatUser({
        messageId: newMessageRef.id,
        lastMessage: "",
        rId: user.id,
        updatedAt: Date.now(),
        messageSeen: true,
        userData: uData,
      });
      setMessagesId(newMessageRef.id);
      setChatVisible(true);

      // Exclude the user from future search results
      setExcludedUsers((prevExcludedUsers) => [...prevExcludedUsers, user.id]);
    } catch (error) {
      console.error("Error adding chat:", error);
    }
  };

  // Handle chat click event to open an existing chat
  const handleChatClick = (item) => {
    setChatUser(item);
    setMessagesId(item.messageId);
    setChatVisible(true);
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
        {isLoading ? (
          <p>Loading chats...</p>
        ) : searchResults.length > 0 ? (
          searchResults.map((user) => (
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
        ) : chatData && chatData.length > 0 ? (
          [...new Map(chatData.map((item) => [item.rId, item])).values()].map(
            (item, index) => (
              <div
                className="friends"
                key={index}
                onClick={() => handleChatClick(item)}
              >
                <img
                  src={item.userData.avatar || assets.profile_img}
                  alt={`${item.userData.name}'s avatar`}
                />
                <div>
                  <p>{item.userData.name}</p>
                  <span>{item.lastMessage || "No messages yet"}</span>
                </div>
              </div>
            )
          )
        ) : chatData.length === 0 ? (
          <p>No chats available.</p>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default LeftSideBar;
