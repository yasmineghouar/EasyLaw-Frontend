import React from 'react'
import Header2 from '../Components/headerRegister'
import MenuPrincipal from '../Components/menuPrncipale'
import Footer from '../Components/footer'
import NewsSection from '../Components/NewsSection'

export default function newsPage() {
  const isSignedUp = localStorage.getItem('signup') === 'true';

  return (
    <div>
    {isSignedUp ? 
    <div>
      <Header2 />
      <MenuPrincipal/>
      <NewsSection/>
      <Footer/>
 
    </div>
     : window.location.href = '/login' }
    
  </div>
  )
}
