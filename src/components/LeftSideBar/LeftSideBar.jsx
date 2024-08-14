import React, { useState, useEffect, useRef } from "react";
import "./LeftSideBar.css";
import assets from "../../../public/assets/assets";
import { useNavigate } from "react-router";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const LeftSideBar = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const menuRef = useRef(null); // Reference to the menu element for detecting clicks outside

  // Function to toggle the submenu visibility
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  // Function to close the submenu when clicking outside of it
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsSubMenuOpen(false); // Close submenu if click is outside the menu element
    }
  };

  // Effect to add and remove event listener for clicks outside the submenu
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to handle search logic, triggered when searchTerm changes
  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      setSearchResults([]); // Clear results if the search term is empty
      return;
    }

    const db = getFirestore(); // Initialize Firestore
    const usersRef = collection(db, "users"); // Reference to the users collection

    try {
      // Fetch all users
      const querySnapshot = await getDocs(usersRef);
      const allUsers = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Filter users by name containing the search term (case-insensitive)
      const filteredResults = allUsers.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      console.log("Search results:", filteredResults); // Debugging line to check search results
      setSearchResults(filteredResults); // Update search results state
    } catch (error) {
      console.error("Error searching for users:", error); // Handle errors in the search process
    }
  };

  // Effect to perform the search whenever the searchTerm changes
  useEffect(() => {
    if (searchTerm) {
      handleSearch({ preventDefault: () => {} }); // Call handleSearch function
    }
  }, [searchTerm]);

  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} className="logo" alt="" />
          <div className="menu" ref={menuRef}>
            <img
              src={assets.menu_icon}
              alt=""
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
          <img src={assets.search_icon} alt="" />
          <input
            type="text"
            placeholder="Search users.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state as user types
          />
        </div>
      </div>
      <div className="ls-list">
        {searchResults.length > 0
          ? searchResults.map((user) => (
              <div className="friends" key={user.id}>
                <img
                  src={user.avatar || assets.profile_img}
                  alt={`${user.name}'s profile`}
                />
                {/* Display user's profile picture or a default image */}
                <div>
                  <p>{user.name}</p> {/* Display user's name */}
                  <span>{user.email || "No email provided"}</span>{" "}
                  {/* Display user's email or a placeholder */}
                </div>
              </div>
            ))
          : Array(12)
              .fill("")
              .map((_, index) => (
                <div className="friends" key={index}>
                  <img src={assets.profile_img} alt="Default profile" />
                  <div>
                    <p>John Doe</p>
                    <span>Hello, how are you?</span>
                  </div>
                </div>
              ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
