import React from 'react'
import Header1 from '../Components/header'
import Header2 from '../Components/headerRegister'
import Services from '../Components/services'
import Menu from '../Components/menuPrncipale'
import About from '../Components/about'
import OurTeam from '../Components/ourTeam'
import ContacterNous from '../Components/ContacterNous'
import Footer from '../Components/footer'

export default function homePage() {
  const isSignedUp = localStorage.getItem('signup') === 'true';

  return (
   <div className='bg-my_whitee h-screen bg-opacity-5'>
     {isSignedUp ? <Header2 /> : <Header1 />}   <Menu/> 
   <Services/>
   <About/>
   <OurTeam/>
   <ContacterNous/>
   <Footer/>
   </div>
   
  )
}
