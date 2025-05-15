import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header'
import Intro from './components/intro/intro'
import AnimatedText from './components/animation/animation' 
import SubjectCards from './components/subjectcards/subjectcards'

import DSAQuiz from './components/quizpages/DSAQuiz';
import Maths1Quiz from './components/quizpages/Maths1Quiz';
import WebDevQuiz from './components/quizpages/WebDevQuiz';
import Maths2Quiz from './components/quizpages/Maths2Quiz';
import './App.css'

function App() {


  return (
    <Router>
      <Header />
      <Intro />
      <AnimatedText text="What do you want to improve today?" />
      <div className="section-divider">
        <h2>Choose a Subject</h2>
        <div className="line"></div>
        <SubjectCards />
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

  )
}

export default App
