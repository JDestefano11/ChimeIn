import "./ChatBox.css";
import React, { useContext, useEffect, useRef, useState } from "react";
import assets from "../../../public/assets/assets";
import { FiSend } from "react-icons/fi";
import { AppContext } from "../../context/AppContext";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { toast } from "react-toastify";
import { updateDoc, arrayUnion, getDoc } from "firebase/firestore";

const ChatBox = () => {
  const { userData, messagesId, chatUser, messages, setMessages } =
    useContext(AppContext);
  const [input, setInput] = useState("");
  const messageEndRef = useRef(null);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const sendMessage = async () => {
    try {
      if (input && messagesId) {
        await updateDoc(doc(db, "messages", messagesId), {
          messages: arrayUnion({
            sId: userData.id,
            text: input,
            createdAt: new Date(),
          }),
        });

        const userIDs = [chatUser.rId, userData.id];

        for (const id of userIDs) {
          const userChatsRef = doc(db, "chats", id);
          const userChatsSnapshot = await getDoc(userChatsRef);

          if (userChatsSnapshot.exists()) {
            const userChatData = userChatsSnapshot.data();
            const chatIndex = userChatData.chatsData.findIndex(
              (c) => c.messageId === messagesId
            );

            if (chatIndex !== -1) {
              userChatData.chatsData[chatIndex].lastMessage = input.slice(
                0,
                30
              );
              userChatData.chatsData[chatIndex].updatedAt = Date.now();

              if (userChatData.chatsData[chatIndex].rId === userData.id) {
                userChatData.chatsData[chatIndex].messageSeen = false;
              }

              await updateDoc(userChatsRef, {
                chatsData: userChatData.chatsData,
              });
            }
          }
        }

        setInput("");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (messagesId) {
      const unSub = onSnapshot(doc(db, "messages", messagesId), (res) => {
        setMessages(res.data().messages.reverse());
        console.log(res.data().messages.reverse());
      });

      return () => {
        unSub();
      };
    }
  }, [messagesId]);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    // Implement send message functionality here
  };

  const handleImageUpload = (event) => {
    // Implement image upload functionality here
  };

  return chatUser ? (
    <div className="chat-box">
      <div className="chat-user">
        <img
          src={chatUser.userData?.avatar || assets.profile_img}
          alt="Profile"
        />
        <div>
          <p>
            {chatUser.userData?.name}{" "}
            <img src={assets.green_dot} alt="Online" className="dot" />
          </p>
        </div>
        <img src={assets.help_icon} alt="Help" className="help" />
      </div>

      <div className="chat-message">
        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.senderId === userData.id ? "s-message" : "r-message"
            }
          >
            {message.image && (
              <img
                className="msg-img"
                src={message.image}
                alt=""
                onClick={() => setEnlargedImage(message.image)}
              />
            )}
            <p className="message">{message.text}</p>
            <div className="message-info">
              <img
                src={chatUser.userData?.avatar || assets.profile_img}
                alt="Profile"
              />
              <p>{message.timestamp}</p>
            </div>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>

      <div className="chat-input">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Send a message"
          value={input}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />

        <input
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          hidden
          onChange={handleImageUpload}
        />
        <label htmlFor="image">
          <img
            src={assets.gallery_icon}
            alt="Gallery"
            style={{
              filter: "invert(1)",
              height: "24px",
              cursor: "pointer",
              opacity: 0.8,
              transition: "opacity 0.3s ease, transform 0.3s ease",
              boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "0.8";
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        </label>
        <FiSend
          onClick={sendMessage}
          style={{
            color: "#4c4c9d",
            fontSize: "24px",
            cursor: "pointer",
            opacity: 0.8,
            transition: "opacity 0.3s ease, transform 0.3s ease",
            boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "0.8";
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      </div>

      {enlargedImage && (
        <div className="enlarged-image-overlay">
          <div className="enlarged-image-container">
            <img
              src={enlargedImage}
              alt="Enlarged Image"
              className="enlarged-image"
            />
            <button onClick={() => setEnlargedImage(null)}>X</button>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className="chat-welcome">
      <img src={assets.logo} alt="Welcome" />
      <p>Chat Anytime, Anywhere</p>
    </div>
  );
};

export default ChatBox;
