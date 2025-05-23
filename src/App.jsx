import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header'
import Intro from './components/intro/intro'
import AnimatedText from './components/animation/animation' 
import SubjectCards from './components/subjectcards/subjectcards'
import AccountSidebar from './components/AccountSidebar/AccountSidebar'
import Leaderboard from './components/Leaderboard/Leaderboard';


import DSAQuiz from './components/quizpages/DSAQuiz';
import Maths1Quiz from './components/quizpages/Maths1Quiz';
import WebDevQuiz from './components/quizpages/WebDevQuiz';
import Maths2Quiz from './components/quizpages/Maths2Quiz';
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLoginClick = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };


  return (
    <Router>
      <Header onLoginClick={handleLoginClick} />
      <AccountSidebar isOpen={sidebarOpen} onClose={handleCloseSidebar} />
      <Intro />
      <AnimatedText text="What do you want to improve today?" />

      <div className="section-divider">
        <h2>Choose a Subject</h2>
        <div className="line"></div>
        <SubjectCards />
      </div>
      <div className="section-divider2">
        <h2>Leaderboard</h2>
          <Leaderboard />
        </div>

      
      <main>
        <Routes>
          <Route path="/quiz/dsa" element={<DSAQuiz />} />
          <Route path="/quiz/maths1" element={<Maths1Quiz />} />
          <Route path="/quiz/maths2" element={<Maths2Quiz />} />
          <Route path="/quiz/webdev" element={<WebDevQuiz />} />
        </Routes>
      </main>
    </Router>
  );
}


export default App
