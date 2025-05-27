import React from 'react'
// import Nav from './Nav'
import Navbar from './Navbar'
import Hero from './Hero'
import Amazing from './Amazing'
import Work from './Work'
import Team from './Team'
import Services from './Services'
import News from './News'
import Price from './Price'
import Touch from './Touch'
import Register from './Register'
// import Extra from './Extra'

const Home = () => {
  return (
    <div>
      {/* <Nav/> */}
      <Navbar />
      <Hero />
      <Amazing />
      <Work />
      <Register />
      <Team />
      <Services />
      <News />
      <Price />
      <Touch />
      {/* <Extra/> */}
    </div>
  )
}

export default Home