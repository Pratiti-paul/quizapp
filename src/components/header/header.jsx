import React from "react";
import "./header.css"; 

const Header = ({ user, onLoginClick }) => {
    const getInitial = () => {
        if (!user) return "L";
        return user.name.charAt(0).toUpperCase();
    };

    return (
        <div className="header">
            <div className="header-logo">
                <span>QuizCraft</span>
            </div>
            {/* <div className="header-greeting">
                Hello{user ? `, ${user.name}` : ""}
            </div> */}
            <button className="header-login-button" onClick={onLoginClick}>
                {getInitial()}
            </button>
        </div>
    );
};

export default Header;
