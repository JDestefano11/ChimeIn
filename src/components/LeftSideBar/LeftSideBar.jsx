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
  // Context values for managing chat state
  const {
    chatData,
    userData,
    setChatUser,
    setMessagesId,
    setChatVisible,
    setChatData,
  } = useContext(AppContext);

  // Local state management
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [excludedUsers, setExcludedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const menuRef = useRef(null);
  const db = getFirestore();

  useEffect(() => {
    const fetchChatData = async () => {
      if (userData && (!chatData || chatData.length === 0)) {
        setIsLoading(true); // Set loading state to true while fetching data
        const chatsRef = collection(db, "chats");
        const userChatsDoc = await getDoc(doc(chatsRef, userData.id));
        if (userChatsDoc.exists()) {
          const fetchedChatData = userChatsDoc.data().chatsData || [];

          // Fetch user data for each chat
          const updatedChatData = await Promise.all(
            fetchedChatData.map(async (chat) => {
              const userSnap = await getDoc(doc(db, "users", chat.rId));
              const user = userSnap.exists() ? userSnap.data() : {};
              return {
                ...chat,
                userData: {
                  name: user.name,
                  avatar: user.avatar, // Assuming 'avatar' is the field name in Firestore
                },
              };
            })
          );

          setChatData(updatedChatData);
        }
        setIsLoading(false); // Set loading state to false after data is fetched
      } else {
        setIsLoading(false); // Set loading state to false if data is already available
      }
    };

    fetchChatData();
  }, [userData, chatData, setChatData, db]);
  // Load excluded users from local storage
  useEffect(() => {
    const storedExcludedUsers =
      JSON.parse(localStorage.getItem("excludedUsers")) || [];
    setExcludedUsers(storedExcludedUsers);
  }, []);

  // Save excluded users to local storage when it changes
  useEffect(() => {
    localStorage.setItem("excludedUsers", JSON.stringify(excludedUsers));
  }, [excludedUsers]);

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

      // Filter users based on search term and excluded users
      const filteredResults = allUsers
        .filter((user) => !excludedUsers.includes(user.id))
        .filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

      setSearchResults(filteredResults);
    } catch (error) {
      console.error("Error searching for users:", error);
    }
  };

  // Debounce search function to improve performance
  const debouncedHandleSearch = useCallback(debounce(handleSearch, 300), [
    searchTerm,
    excludedUsers,
  ]);

  // Trigger search when search term or excluded users change
  useEffect(() => {
    debouncedHandleSearch();
  }, [searchTerm, excludedUsers, debouncedHandleSearch]);

  // Handle user selection from search results
  const handleUserClick = async (user) => {
    setSelectedUser(user);

    try {
      if (!user) {
        throw new Error("No user selected");
      }
      await addChat(user);
      console.log("Success: Chat with user initiated");
    } catch (error) {
      console.error("Error adding chat:", error);
    }
  };

  // Add new chat to Firestore
  const addChat = async (user) => {
    if (!userData) return;
    const messagesRef = collection(db, "messages");
    const chatsRef = collection(db, "chats");

    try {
      // Create new message document
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

      // Fetch user data and update chat state
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
      setChatVisible(true);

      // Add user to excluded users to prevent duplicate chats
      setExcludedUsers((prevExcludedUsers) => [...prevExcludedUsers, user.id]);
    } catch (error) {
      console.error("Error adding chat:", error);
    }
  };

  // Handle existing chat selection
  const handleChatClick = async (item) => {
    try {
      setChatUser(item); // Set the currently selected chat user
      setMessagesId(item.messageId); // Set the ID for the chat messages
      setChatVisible(true); // Make the chat window visible

      // Fetch chat messages from Firestore
      const messagesRef = doc(db, "messages", item.messageId);
      const messagesSnap = await getDoc(messagesRef);

      if (messagesSnap.exists()) {
        const fetchedMessages = messagesSnap.data().messages || [];

        // Update the chat data with the fetched messages
        setChatData((prevChatData) =>
          prevChatData.map((chat) =>
            chat.messageId === item.messageId
              ? { ...chat, messages: fetchedMessages }
              : chat
          )
        );
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error loading chat:", error);
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
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ls-list">
        {isLoading ? ( // Show loading state until chats are fetched
          <p>Loading chats...</p>
        ) : chatData && chatData.length > 0 ? (
          // Display chat items after loading
          [...new Map(chatData.map((item) => [item.rId, item])).values()].map(
            (item, index) => (
              <div
                className="friends"
                key={index}
                onClick={() => handleChatClick(item)}
              >
                <img
                  src={item.userData?.avatar || assets.profile_img}
                  alt={`${item.userData?.name}'s avatar`}
                />
                <div>
                  <p>{item.userData?.name}</p>
                  <span>{item.lastMessage || "No messages yet"}</span>
                </div>
              </div>
            )
          )
        ) : (
          <p>No messages available</p> // Show this if there are no chats available
        )}
      </div>
    </div>
  );
};

export default LeftSideBar;
