import React, { useState, useEffect, useRef } from "react";
import "./LeftSideBar.css";
import assets from "../../../public/assets/assets";

const LeftSideBar = () => {
  // Step 1: Use the useState hook to manage the state of the sub-menu
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  // Step 2: Use the useRef hook to create a reference to the menu element
  const menuRef = useRef(null);

  // Step 3: Define a function to toggle the sub-menu state
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  // Step 4: Define a function to handle clicks outside the menu area
  const handleClickOutside = (event) => {
    // Check if the clicked target is outside the menu area
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      // If it is, close the sub-menu by setting isSubMenuOpen to false
      setIsSubMenuOpen(false);
    }
  };

  // Step 5: Use the useEffect hook to add and remove an event listener
  useEffect(() => {
    // Add an event listener for the "mousedown" event on the document
    document.addEventListener("mousedown", handleClickOutside);

    // Return a cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} className="logo" alt="" />
          {/* Step 6: Associate the menu element with the reference */}
          <div className="menu" ref={menuRef}>
            <img
              src={assets.menu_icon}
              alt=""
              onClick={toggleSubMenu}
              className="menu-icon"
            />
            {isSubMenuOpen && (
              <div className="sub-menu">
                <p>Edit Profile</p>
                <hr />
                <p>Logout</p>
              </div>
            )}
          </div>
        </div>
        <div className="ls-search">
          <img src={assets.search_icon} alt="" />
          <input type="text" placeholder="Search here.." />
        </div>
      </div>
      <div className="ls-list">
        {Array(12)
          .fill("")
          .map((item, index) => (
            <div className="friends" key={index}>
              <img src={assets.profile_img} alt="" />
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
