import React, { useState, useEffect, useRef, useContext } from "react";
import "./LeftSideBar.css";
import assets from "../../../public/assets/assets";
import { useNavigate } from "react-router";
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  onSnapshot,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

const LeftSideBar = () => {
  const navigate = useNavigate();
  const { userData, setChatUser, setMessagesId, setChatVisible, setChatData } =
    useContext(AppContext);

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredChats, setFilteredChats] = useState([]);
  const [chatItems, setChatItems] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
        } else {
          setDoc(chatsRef, { chatsData: [] });
        }
        setIsLoading(false);
      });

      return () => unsubscribe();
    }
  }, [userData, db, setChatData]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("id", "!=", userData?.id));
      const querySnapshot = await getDocs(q);

      const users = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllUsers(users);
    };

    fetchAllUsers();
  }, [db, userData?.id]);

  useEffect(() => {
    if (searchInput.trim() === "") {
      setFilteredChats(chatItems);
    } else {
      const filtered = allUsers.filter(
        (user) =>
          user.name?.toLowerCase().includes(searchInput.toLowerCase()) ||
          chatItems.some(
            (chat) =>
              chat.userData?.id === user.id &&
              chat.lastMessage
                ?.toLowerCase()
                .includes(searchInput.toLowerCase())
          )
      );
      setFilteredChats(filtered);
    }
  }, [searchInput, chatItems, allUsers]);

  const handleChatClick = (chat) => {
    const selectedUser = allUsers.find(
      (user) => user.id === chat.id || user.id === chat.rId
    );
    if (selectedUser) {
      const chatUserData = {
        id: selectedUser.id,
        name: selectedUser.name,
        messageId: chat.messageId || `${userData.id}_${selectedUser.id}`,
      };
      setChatUser(chatUserData);
      setMessagesId(chatUserData.messageId);
      setChatVisible(true);

      // Update chat status if necessary
      const chatIndex = chatItems.findIndex((c) => c.rId === selectedUser.id);
      if (chatIndex !== -1 && !chatItems[chatIndex].messageSeen) {
        chatItems[chatIndex].messageSeen = true;
        const userChatsRef = doc(db, "chats", userData.id);

        updateDoc(userChatsRef, {
          chatsData: chatItems,
        }).catch((error) => toast.error("Failed to update chat status."));
      }
    }
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

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

  return (
    <div className="left-sidebar">
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
            placeholder="Search Chats"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </div>
      <div className="ls-list">
        {isLoading ? (
          <p>Loading chats...</p>
        ) : filteredChats.length > 0 ? (
          filteredChats.map((item, index) => (
            <div
              className={`friends ${!item.messageSeen ? "unread" : ""}`}
              key={index}
              onClick={() => handleChatClick(item)}
            >
              <img
                src={item.avatar || item.userData?.avatar || assets.profile_img}
                alt={`${item.name || item.userData?.name}'s avatar`}
              />
              <div>
                <p>{item.name || item.userData?.name}</p>
                {item.lastMessage && (
                  <>
                    <span>{item.lastMessage}</span>
                    <small>
                      {new Date(item.updatedAt).toLocaleTimeString()}
                    </small>
                  </>
                )}
              </div>
              {!item.messageSeen && (
                <div className="unread-indicator">
                  <span>New</span>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No messages available</p>
        )}
      </div>
    </div>
  );
};

export default LeftSideBar;
