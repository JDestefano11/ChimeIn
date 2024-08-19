import React, { useContext, useEffect, useState } from "react";
import "./LeftSidebar.css";
import assets from "../../../public/assets/assets";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import { db, logout } from "../../config/firebase";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const LeftSidebar = () => {
  const {
    chatData,
    userData,
    chatUser,
    setChatUser,
    setMessagesId,
    messagesId,
    chatVisible,
    setChatVisible,
  } = useContext(AppContext);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const inputHandler = async (e) => {
    try {
      const input = e.target.value.toLowerCase();

      if (input) {
        setShowSearch(true);
        const userRef = collection(db, "users");
        const q = query(
          userRef,
          where("name", ">=", input),
          where("name", "<=", input + "\uf8ff")
        );
        const querySnap = await getDocs(q);
        const results = querySnap.docs
          .map((doc) => doc.data())
          .filter(
            (user) =>
              user.id !== userData.id &&
              !chatData.some((chat) => chat.rId === user.id)
          );

        setSearchResults(results);
      } else {
        setShowSearch(false);
        setSearchResults([]);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addChat = async (user) => {
    const messagesRef = collection(db, "messages");
    const chatsRef = collection(db, "chats");
    try {
      if (user.id === userData.id) {
        return 0;
      }
      const newMessageRef = doc(messagesRef);

      await setDoc(newMessageRef, {
        createAt: serverTimestamp(),
        messages: [],
      });

      await updateDoc(doc(chatsRef, user.id), {
        chatsData: arrayUnion({
          messageId: newMessageRef.id,
          lastMessage: "",
          rId: userData.id,
          updatedAt: Date.now(),
          messageSeen: true,
          initiatedByCurrentUser: false,
        }),
      });

      await updateDoc(doc(chatsRef, userData.id), {
        chatsData: arrayUnion({
          messageId: newMessageRef.id,
          lastMessage: "",
          rId: user.id,
          updatedAt: Date.now(),
          messageSeen: true,
          initiatedByCurrentUser: true,
        }),
      });

      setChat({
        messageId: newMessageRef.id,
        lastMessage: "",
        rId: user.id,
        updatedAt: Date.now(),
        messageSeen: true,
        userData: user,
        initiatedByCurrentUser: true,
      });
      setShowSearch(false);
      setChatVisible(true);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const setChat = async (item) => {
    setMessagesId(item.messageId);
    setChatUser(item);
    const userChatsRef = doc(db, "chats", userData.id);
    const userChatsSnapshot = await getDoc(userChatsRef);
    const userChatsData = userChatsSnapshot.data();
    const chatIndex = userChatsData.chatsData.findIndex(
      (c) => c.messageId === item.messageId
    );
    userChatsData.chatsData[chatIndex].messageSeen = true;
    await updateDoc(userChatsRef, {
      chatsData: userChatsData.chatsData,
    });
    setChatVisible(true);
  };

  useEffect(() => {
    const updateChatUserData = async () => {
      if (chatUser) {
        const userRef = doc(db, "users", chatUser.userData.id);
        const userSnap = await getDoc(userRef);
        const userData = userSnap.data();
        setChatUser((prev) => ({ ...prev, userData: userData }));
      }
    };
    updateChatUserData();
  }, [chatData]);

  const formatTime = (timestamp) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes} ${ampm}`;
  };
  return (
    <div className={`ls ${chatVisible ? "hidden" : ""}`}>
      <div className="ls-top">
        <div className="ls-nav">
          <img className="logo" src={assets.logo} alt="" />
          <div className="menu">
            <img src={assets.menu_icon} alt="" />
            <div className="sub-menu">
              <p onClick={() => navigate("/profile")}>Edit Profile</p>
              <hr />
              <p onClick={() => logout()}>Logout</p>
            </div>
          </div>
        </div>
        <div className="ls-search">
          <img src={assets.search_icon} alt="" />
          <input
            onChange={inputHandler}
            type="text"
            placeholder="Search here.."
          />
        </div>
      </div>
      <div className="ls-list">
        {showSearch ? (
          searchResults.length > 0 ? (
            searchResults.map((user, index) => (
              <div
                onClick={() => addChat(user)}
                key={index}
                className="friends add-user"
              >
                <img src={user.avatar} alt="" />
                <p>{user.name}</p>
              </div>
            ))
          ) : (
            <div className="no-results">No users found</div>
          )
        ) : (
          chatData.map((item, index) => (
            <div
              onClick={() => setChat(item)}
              key={index}
              className={`friends ${
                item.messageSeen || item.messageId === messagesId
                  ? ""
                  : "border"
              }`}
            >
              <img src={item.userData.avatar} alt="" />
              {Date.now() - item.userData.lastSeen <= 70000 &&
                item.initiatedByCurrentUser && (
                  <div className="active-dot"></div>
                )}
              <div>
                <p>{item.userData.name}</p>
                <span>{item.lastMessage.slice(0, 30)}</span>
                <small>{formatTime(item.updatedAt)}</small>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LeftSidebar;
