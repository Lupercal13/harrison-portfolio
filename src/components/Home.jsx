import React from 'react'
import Hero from './Hero'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home