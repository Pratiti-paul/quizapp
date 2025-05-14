import React from 'react'
import Header from './components/header/header'
import Intro from './components/intro/intro'
import AnimatedText from './components/animation/animation' 
import './App.css'

function App() {


  return (
     <div>
      <Header />
      <Intro />
      <AnimatedText text="What do you want to improve today?" />
    </div>

  )
}

export default App
