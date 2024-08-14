import "./ChatBox.css";
import React, { useEffect, useRef, useState } from "react";
import assets from "../../../public/assets/assets";
import { FiSend } from "react-icons/fi";

const ChatBox = () => {
  // Create a mutable reference using the useRef hook
  // This reference will be used to store a reference to a DOM element
  // within the chat message container
  const messageEndRef = useRef(null);

  // State variable to keep track of the clicked image and its enlarged state
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Function to scroll to the bottom of the chat message container
  const scrollToBottom = () => {
    // Check if the messageEndRef.current exists (to avoid errors)
    // If it exists, call the scrollIntoView method with the smooth behavior option
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // useEffect hook to call the scrollToBottom function when the component mounts
  useEffect(() => {
    scrollToBottom();
    // The empty array [] as the second argument ensures that the effect is only run once,
    // during the initial render of the component
  }, []);

  return (
    <div className="chat-box">
      <div className="chat-user">
        <img src={assets.profile_img} alt="Profile" />
        <div>
          <p>
            John Doe <img src={assets.green_dot} alt="Online" className="dot" />
          </p>
        </div>
        <img src={assets.help_icon} alt="Help" className="help" />
      </div>

      <div className="chat-message">
        <div className="s-message">
          {/* Message image with onClick event to update the enlargedImage state */}
          <img
            className="msg-img"
            src={assets.pic1}
            alt=""
            onClick={() => setEnlargedImage(assets.pic1)}
          />
          <p className="message">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
            accusamus dolor eveniet similique commodi possimus quod modi
            quibusdam sed cum natus consequuntur, ad quasi necessitatibus optio
            autem, amet voluptates provident.
          </p>
          <div className="message-info">
            <img src={assets.profile_img} alt="Profile" />
            <p>2:30 PM</p>
          </div>
        </div>
        <div className="r-message">
          <p className="message">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
            accusamus dolor eveniet similique commodi possimus quod modi
            quibusdam sed cum natus consequuntur, ad quasi necessitatibus optio
            autem, amet voluptates provident.
          </p>
          <div className="message-info">
            <img src={assets.profile_img} alt="Profile" />
            <p>2:30 PM</p>
          </div>
        </div>
        {/* Attach the messageEndRef to a div element */}
        <div ref={messageEndRef} />
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Send a message" />
        <input type="file" id="image" accept="image/png, image/jpeg" hidden />
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

      {/* Render the enlarged image overlay and container if enlargedImage is not null */}
      {enlargedImage && (
        // If enlargedImage is not null, render the enlarged image overlay
        <div className="enlarged-image-overlay">
          <div className="enlarged-image-container">
            {/* Display the enlarged image */}
            <img
              src={enlargedImage} // Use the image source from the enlargedImage state
              alt="Enlarged Image"
              className="enlarged-image"
            />

            {/* Button to close the enlarged image overlay */}
            <button onClick={() => setEnlargedImage(null)}>
              {/* When clicked, set the enlargedImage state to null */}X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
