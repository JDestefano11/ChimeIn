import React, { useContext, useEffect, useRef, useState } from "react";
import "./ChatBox.css";
import assets from "../../../public/assets/assets";
import { AppContext } from "../../context/AppContext";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { toast } from "react-toastify";
import upload from "../../lib/upload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSmile } from "@fortawesome/free-solid-svg-icons";

const ChatBox = () => {
  // Context to access global state and functions
  const {
    userData,
    messagesId,
    chatUser,
    messages,
    setMessages,
    chatVisible,
    setChatVisible,
    activeUsers,
    updateActiveUsers,
  } = useContext(AppContext);

  // Local state for input message and emoji picker visibility
  const [input, setInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  // Refs for scrolling to the end and managing emoji picker visibility
  const scrollEnd = useRef();
  const emojiPickerRef = useRef(null);
  const inputRef = useRef(null);

  // List of emojis for the emoji picker
  const emojis = [
    "😀",
    "😂",
    "😍",
    "🥳",
    "😎",
    "🤔",
    "👍",
    "❤️",
    "😊",
    "🙌",
    "🎉",
    "🔥",
    "💯",
    "🤩",
    "😇",
    "🤗",
    "🤓",
    "😜",
    "😘",
    "🤪",
  ];

  // Function to send a text message
  const sendMessage = async () => {
    try {
      // Ensure the input is not empty and messagesId exists
      if (input.trim() && messagesId) {
        // Update the messages collection in Firestore
        await updateDoc(doc(db, "messages", messagesId), {
          messages: arrayUnion({
            sId: userData.id,
            text: input,
            createdAt: new Date(),
          }),
        });

        const userIDs = [chatUser.rId, userData.id];

        // Update chat data for both users involved in the chat
        userIDs.forEach(async (id) => {
          const userChatsRef = doc(db, "chats", id);
          const userChatsSnapshot = await getDoc(userChatsRef);

          if (userChatsSnapshot.exists()) {
            const userChatsData = userChatsSnapshot.data();
            const chatIndex = userChatsData.chatsData.findIndex(
              (c) => c.messageId === messagesId
            );
            userChatsData.chatsData[chatIndex].lastMessage = input;
            userChatsData.chatsData[chatIndex].updatedAt = Date.now();
            if (userChatsData.chatsData[chatIndex].rId == userData.id) {
              userChatsData.chatsData[chatIndex].messageSeen = false;
            }
            await updateDoc(userChatsRef, {
              chatsData: userChatsData.chatsData,
            });
          }
        });
      }
    } catch (error) {
      // Display error message if something goes wrong
      toast.error(error.message);
    }

    // Clear input and hide emoji picker after sending the message
    setInput("");
    setShowEmojiPicker(false);
  };

  // Convert Firestore timestamp to a human-readable format
  const convertTimestamp = (timestamp) => {
    let date = timestamp.toDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    if (hour > 12) {
      date = hour - 12 + ":" + minute + " PM";
    } else {
      date = hour + ":" + minute + " AM";
    }
    return date;
  };

  // Function to send an image
  const sendImage = async (e) => {
    const fileUrl = await upload(e.target.files[0]);

    if (fileUrl && messagesId) {
      await updateDoc(doc(db, "messages", messagesId), {
        messages: arrayUnion({
          sId: userData.id,
          image: fileUrl,
          createdAt: new Date(),
        }),
      });

      const userIDs = [chatUser.rId, userData.id];

      userIDs.forEach(async (id) => {
        const userChatsRef = doc(db, "chats", id);
        const userChatsSnapshot = await getDoc(userChatsRef);

        if (userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();
          const chatIndex = userChatsData.chatsData.findIndex(
            (c) => c.messageId === messagesId
          );
          userChatsData.chatsData[chatIndex].lastMessage = "Image";
          userChatsData.chatsData[chatIndex].updatedAt = Date.now();
          await updateDoc(userChatsRef, {
            chatsData: userChatsData.chatsData,
          });
        }
      });
    }
  };

  // Scroll to the bottom of the chat when new messages are received
  useEffect(() => {
    scrollEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Listen for changes to messages in Firestore and update state
  useEffect(() => {
    if (messagesId) {
      const unSub = onSnapshot(doc(db, "messages", messagesId), (res) => {
        setMessages(res.data().messages.reverse());
      });
      return () => {
        unSub();
      };
    }
  }, [messagesId]);

  // Update active users' last seen status periodically
  useEffect(() => {
    if (chatUser) {
      const interval = setInterval(() => {
        updateActiveUsers(chatUser.userData.id, Date.now());
      }, 60000);
      return () => clearInterval(interval);
    }
  }, [chatUser]);

  // Close emoji picker when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target) &&
        !event.target.classList.contains("emoji-button")
      ) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Check if a user is active based on the last active timestamp
  const isUserActive = (userId) => {
    return Date.now() - activeUsers[userId] <= 70000;
  };

  // Format the time since a user was last seen
  const formatLastSeen = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return "Just now";
    if (diff < 3600000) return `${Math.floor(diff / 60000)} minutes ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)} hours ago`;
    return `${Math.floor(diff / 86400000)} days ago`;
  };

  // Handle emoji click by inserting the selected emoji into the input
  const handleEmojiClick = (emoji) => {
    const cursorPosition = inputRef.current.selectionStart;
    const textBeforeCursor = input.slice(0, cursorPosition);
    const textAfterCursor = input.slice(cursorPosition);
    setInput(textBeforeCursor + emoji + textAfterCursor);

    // Set cursor position after the inserted emoji
    setTimeout(() => {
      inputRef.current.selectionStart = cursorPosition + emoji.length;
      inputRef.current.selectionEnd = cursorPosition + emoji.length;
      inputRef.current.focus();
    }, 0);
  };

  // Toggle the visibility of the emoji picker
  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
    if (!showEmojiPicker) {
      setTimeout(() => inputRef.current.focus(), 0);
    }
  };
  return chatUser ? (
    <div className={`chat-box ${chatVisible ? "" : "hidden"}`}>
      <div className="chat-user">
        <img src={chatUser.userData.avatar} alt="" />
        <p>
          {chatUser.userData.name}{" "}
          {isUserActive(chatUser.userData.id) ? (
            <span className="active-status">Active now</span>
          ) : (
            <span className="last-seen">
              Last seen {formatLastSeen(activeUsers[chatUser.userData.id])}
            </span>
          )}
        </p>
        <img
          onClick={() => setChatVisible(false)}
          className="arrow"
          src={assets.arrow_icon}
          alt=""
        />
        <img
          className="help"
          src={assets.help_icon}
          alt=""
          style={{ filter: "brightness(0) invert(1)", cursor: "pointer" }}
        />
      </div>
      <div className="chat-msg">
        <div ref={scrollEnd}></div>
        {messages.map((msg, index) => {
          return (
            <div
              key={index}
              className={msg.sId === userData.id ? "s-msg" : "r-msg"}
            >
              {msg["image"] ? (
                <img className="msg-img" src={msg["image"]} alt="" />
              ) : (
                <p className="msg">{msg["text"]}</p>
              )}
              <div>
                <img
                  src={
                    msg.sId === userData.id
                      ? userData.avatar
                      : chatUser.userData.avatar
                  }
                  alt=""
                />
                <p>{convertTimestamp(msg.createdAt)}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="chat-input">
        <input
          ref={inputRef}
          onKeyDown={(e) => (e.key === "Enter" ? sendMessage() : null)}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Send a message"
        />
        <input
          onChange={sendImage}
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          hidden
        />
        <label htmlFor="image" className="image-upload-label">
          <img
            src={assets.gallery_icon}
            alt=""
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </label>
        <FontAwesomeIcon
          icon={faSmile}
          onClick={toggleEmojiPicker}
          className="emoji-button"
        />
        <FontAwesomeIcon
          icon={faPaperPlane}
          onClick={sendMessage}
          className="send-button"
        />
      </div>
      {showEmojiPicker && (
        <div className="emoji-picker" ref={emojiPickerRef}>
          {emojis.map((emoji, index) => (
            <span key={index} onClick={() => handleEmojiClick(emoji)}>
              {emoji}
            </span>
          ))}
        </div>
      )}
    </div>
  ) : (
    <div className={`chat-welcome ${chatVisible ? "" : "hidden"}`}>
      <img src={assets.logo_icon} alt="" />
      <p>Chat anytime, anywhere</p>
    </div>
  );
};

export default ChatBox;
