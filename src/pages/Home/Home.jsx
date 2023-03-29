import React from 'react'
import Hero from './Hero/Hero'
import Events from './Events/Events'
import Navbar from '../../layout/Navbar/Navbar'


const Home = () => {

  return (
    <>
        <Navbar show={true}/>
        <Hero/>
        <Events/>
    </>
  )
}

export default Home