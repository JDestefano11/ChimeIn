import "./ProfileUpdate.css";
import { useState, useEffect, useRef } from "react";
import { auth, db } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import upload from "../../lib/upload";
import assets from "../../../public/assets/assets";

const ProfileUpdate = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uid, setUid] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUid(user.uid);
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          if (userData.name) setName(userData.name);
          if (userData.bio) setBio(userData.bio);
          if (userData.avatar) setImageUrl(userData.avatar);
        } else {
          navigate("/");
        }
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userRef = doc(db, "users", uid);

      await updateDoc(userRef, {
        name: name,
        bio: bio,
        avatar: imageUrl,
      });

      console.log("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const url = await upload(file);
        setImageUrl(url);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="profile">
      <div className="profile-container">
        <form onSubmit={handleSubmit} className="profile-form">
          <h2 className="form-heading">Profile Details</h2>
          <div className="form-group">
            <img
              src={imageUrl || assets.avatar_icon}
              alt="Profile"
              className="profile-image"
              onClick={handleImageClick}
              style={{ cursor: "pointer" }}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
          </div>
          <div className="form-group">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Full Name"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={(e) => setBio(e.target.value)}
              value={bio}
              placeholder="Write your bio"
              className="form-textarea"
            ></textarea>
          </div>
          <button type="submit" className="form-button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;
