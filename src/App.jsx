import React from 'react'
import Header from './components/header/header'
import Intro from './components/intro/intro'
import AnimatedText from './components/animation/animation' 
import SubjectCards from './components/subjectcards/subjectcards'
import './App.css'

function App() {


  return (
     <div>
      <Header />
      <Intro />
      <AnimatedText text="What do you want to improve today?" />
     <div className="section-divider">
      <h2 >Choose a Subject</h2>
      <div className="line"></div>
      <SubjectCards /> 
    </div>
    </div>

  )
}

export default App
