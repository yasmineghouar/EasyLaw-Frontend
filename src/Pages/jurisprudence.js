import React from 'react'
import MenuPrincipal2 from '../Components/menuPrincipale2'
import Header2 from '../Components/headerRegister'
import Footer from '../Components/footer';
import JuripredenceList from '../Components/juripredenceList';
import Filterjuripridence from '../Components/filterjuripridence';

export default function jurisprudence() {
  const isSignedUp = localStorage.getItem('signup') === 'true';
  return (

 <div className='bg-my_whitee'>

{isSignedUp ? 
  <div>
  <Header2 />
  <MenuPrincipal2/> 
  <JuripredenceList/>
  <Footer/>
  </div>
   : window.location.href = '/login' }
  </div> 






  )
}
