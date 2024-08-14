import "./ProfileUpdate.css";
import { useState, useEffect, useRef, useContext } from "react";
import { auth, db } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import upload from "../../lib/upload";
import assets from "../../../public/assets/assets";
import { AppContext } from "../../context/AppContext";

const ProfileUpdate = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  // Access user data from global context
  const { userData, setUserData } = useContext(AppContext);

  // Local state for form inputs
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uid, setUid] = useState("");

  useEffect(() => {
    // Set up listener for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUid(user.uid);
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          // Update global context and local state with user data
          setUserData(data);
          setName(data.name || "");
          setBio(data.bio || "");
          setImageUrl(data.avatar || "");
        } else {
          navigate("/");
        }
      }
    });

    // Clean up listener on component unmount
    return () => unsubscribe();
  }, [navigate, setUserData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userRef = doc(db, "users", uid);
      const updatedData = {
        name: name,
        bio: bio,
        avatar: imageUrl,
      };

      // Update Firestore document
      await updateDoc(userRef, updatedData);
      // Update global context
      setUserData((prevData) => ({ ...prevData, ...updatedData }));
      console.log("Profile updated successfully!");
      // Navigate to chat page after successful update
      navigate("/chat");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Set local URL for immediate preview
      setImageUrl(URL.createObjectURL(file));
      try {
        // Upload image and get remote URL
        const url = await upload(file);
        setImageUrl(url);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  // Trigger file input click when profile image is clicked
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
