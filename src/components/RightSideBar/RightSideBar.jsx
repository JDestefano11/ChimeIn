import React, { useState } from "react";
import "./RightSideBar.css";
import assets from "../../../public/assets/assets";
import { logout } from "../../config/firebase";

const RightSideBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div className="rs">
      <div className="rs-profile">
        <div className="rs-profile-header">
          <div className="profile-image-container">
            <img src={assets.profile_img} alt="Profile" />
          </div>
          <div className="profile-info">
            <h3>
              John Doe{" "}
              <span className="online-status">
                <img src={assets.green_dot} alt="Online Status" />
              </span>
            </h3>
          </div>
        </div>
        <p>Hey, I am John Doe using Chat App</p>
      </div>
      <hr />
      <div className="rs-media">
        <h4>Media</h4>
        <div className="rs-media-gallery">
          <img
            src={assets.pic1}
            alt="Media"
            onClick={() => handleImageClick(assets.pic1)}
          />
          <img
            src={assets.pic2}
            alt="Media"
            onClick={() => handleImageClick(assets.pic2)}
          />
          <img
            src={assets.pic3}
            alt="Media"
            onClick={() => handleImageClick(assets.pic3)}
          />
          <img
            src={assets.pic4}
            alt="Media"
            onClick={() => handleImageClick(assets.pic4)}
          />
        </div>
      </div>
      <button onClick={() => logout()} className="rs-logout">
        Logout
      </button>

      {/* Modal for displaying larger image */}
      <div
        className={`rs-media-modal ${showModal ? "show" : ""}`}
        onClick={handleModalClose}
      >
        <div className="modal-image-container">
          <img src={selectedImage} alt="Enlarged Media" />
          <span className="close-btn" onClick={handleModalClose}>
            &times;
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
