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
import {
  faPaperPlane,
  faSmile,
  faReply,
} from "@fortawesome/free-solid-svg-icons";

const ChatBox = () => {
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
  const [input, setInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null);
  const scrollEnd = useRef();

  const emojis = ["😀", "😂", "😍", "🥳", "😎", "🤔", "👍", "❤️"];

  const sendMessage = async () => {
    try {
      if (input && messagesId) {
        const newMessage = {
          sId: userData.id,
          text: input,
          createdAt: new Date(),
          reactions: {},
        };
        if (replyingTo) {
          newMessage.replyTo = replyingTo;
        }
        await updateDoc(doc(db, "messages", messagesId), {
          messages: arrayUnion(newMessage),
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

        setInput("");
        setReplyingTo(null);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addReaction = async (messageIndex, emoji) => {
    try {
      const updatedMessages = [...messages];
      if (!updatedMessages[messageIndex].reactions) {
        updatedMessages[messageIndex].reactions = {};
      }
      if (updatedMessages[messageIndex].reactions[emoji]) {
        delete updatedMessages[messageIndex].reactions[emoji];
      } else {
        updatedMessages[messageIndex].reactions[emoji] = userData.id;
      }

      await updateDoc(doc(db, "messages", messagesId), {
        messages: updatedMessages,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleReply = (message) => {
    setReplyingTo(message);
  };

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

  const sendImage = async (e) => {
    const fileUrl = await upload(e.target.files[0]);

    if (fileUrl && messagesId) {
      await updateDoc(doc(db, "messages", messagesId), {
        messages: arrayUnion({
          sId: userData.id,
          image: fileUrl,
          createdAt: new Date(),
          reactions: {},
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

  useEffect(() => {
    scrollEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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

  useEffect(() => {
    if (chatUser) {
      const interval = setInterval(() => {
        updateActiveUsers(chatUser.userData.id, Date.now());
      }, 60000);
      return () => clearInterval(interval);
    }
  }, [chatUser]);

  const isUserActive = (userId) => {
    return Date.now() - activeUsers[userId] <= 70000;
  };

  const formatLastSeen = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return "Just now";
    if (diff < 3600000) return `${Math.floor(diff / 60000)} minutes ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)} hours ago`;
    return `${Math.floor(diff / 86400000)} days ago`;
  };

  const handleEmojiClick = (emoji) => {
    setInput(input + emoji);
    setShowEmojiPicker(false);
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
              {msg.replyTo && (
                <div className="reply-to">
                  <p>{msg.replyTo.text}</p>
                </div>
              )}
              {msg["image"] ? (
                <img className="msg-img" src={msg["image"]} alt="" />
              ) : (
                <p className="msg">
                  {msg["text"]}
                  <div className="msg-actions">
                    <FontAwesomeIcon
                      icon={faSmile}
                      onClick={() => setShowEmojiPicker(index)}
                      className="reaction-button"
                    />
                    <FontAwesomeIcon
                      icon={faReply}
                      onClick={() => handleReply(msg)}
                      className="reply-button"
                    />
                  </div>
                  {showEmojiPicker === index && (
                    <div className="emoji-reaction-picker">
                      {emojis.map((emoji, emojiIndex) => (
                        <span
                          key={emojiIndex}
                          onClick={() => addReaction(index, emoji)}
                        >
                          {emoji}
                        </span>
                      ))}
                    </div>
                  )}
                  {msg.reactions && Object.keys(msg.reactions).length > 0 && (
                    <div className="reactions">
                      {Object.keys(msg.reactions).map((emoji) => (
                        <span key={emoji}>{emoji}</span>
                      ))}
                    </div>
                  )}
                </p>
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
      {replyingTo && (
        <div className="replying-to">
          <p>Replying to: {replyingTo.text}</p>
          <button onClick={() => setReplyingTo(null)}>Cancel</button>
        </div>
      )}
      <div className="chat-input">
        <input
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
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className="emoji-button"
        />
        <FontAwesomeIcon
          icon={faPaperPlane}
          onClick={sendMessage}
          className="send-button"
        />
      </div>
      {showEmojiPicker && (
        <div className="emoji-picker">
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
