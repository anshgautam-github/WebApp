import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import NavBar from './components/NavBar'
import Feeatures from './components/Feeatures'
import FloatingImage from './components/FloatingImage'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <NavBar/>
      <Hero />
      <About/>
      <Feeatures/>
      <FloatingImage/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App