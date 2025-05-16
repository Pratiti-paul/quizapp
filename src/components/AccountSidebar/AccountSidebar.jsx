import React from "react";
import "./AccountSidebar.css";

const AccountSidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && <div className="overlay" onClick={onClose}></div>}

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <h2>Account Menu</h2>
          <ul>
            <li><button onClick={() => alert("Profile")}>Profile</button></li>
            <li><button onClick={() => alert("Login/Signup")}>Login/Signup</button></li>
            <li><button onClick={() => alert("Subject")}>Subject</button></li>
            <li><button onClick={() => alert("Leaderboard")}>Leaderboard</button></li>
            <li><button onClick={() => alert("Settings")}>Settings</button></li>
          </ul>
        </div>

        <div className="sidebar-logout">
          <button onClick={() => alert("Logout")}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default AccountSidebar;
