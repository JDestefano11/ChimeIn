import React, { useContext, useEffect, useState } from "react";
import "./RightSideBar.css";
import assets from "../../../public/assets/assets";
import { logout } from "../../config/firebase";
import { AppContext } from "../../context/AppContext";

const RightSidebar = () => {
  // Access chatUser and messages from the global context
  const { chatUser, messages } = useContext(AppContext);
  // State to store image URLs from messages
  const [msgImages, setMsgImages] = useState([]);

  // Effect to extract image URLs from messages
  useEffect(() => {
    let tempVar = [];
    messages.map((msg) => {
      if (msg.image) {
        tempVar.push(msg.image);
      }
    });
    setMsgImages(tempVar);
  }, [messages]);

  return chatUser ? (
    <div className="rs">
      {/* Display chat user's profile information */}
      <div className="rs-profile">
        <img src={chatUser.userData.avatar} alt="" />
        <h3>
          {/* Show green dot if user was active in the last 70 seconds */}
          {Date.now() - chatUser.userData.lastSeen <= 70000 ? (
            <img className="dot" src={assets.green_dot} alt="" />
          ) : null}
          {chatUser.userData.name}
        </h3>
        <p>{chatUser.userData.bio}</p>
      </div>
      <hr />
      {/* Display shared media */}
      <div className="rs-media">
        <p>Media</p>
        <div>
          {msgImages.map((url, index) => (
            <img
              onClick={() => window.open(url)}
              key={index}
              src={url}
              alt=""
            />
          ))}
        </div>
      </div>
      <button onClick={() => logout()}>Logout</button>
    </div>
  ) : (
    // If no chat user is selected, only show logout button
    <div className="rs">
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default RightSidebar;
