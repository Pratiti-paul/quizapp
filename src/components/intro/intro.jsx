import React from 'react'
import "./intro.css"

function Intro({ user }) {
  return (
    <div className="intro">
      <h1 className="intro-title">Hello {user ? user.name : 'User'}!</h1>
    </div>
  );
}

export default Intro;

