import React from "react";
import { MdAccountCircle } from "react-icons/md";
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
            <div className="login-icon">
            <MdAccountCircle />
            </div>
        </div>
    );
};

export default Header;
