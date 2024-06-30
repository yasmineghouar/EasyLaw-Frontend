import React, { useState } from 'react';
import MenuPrincipal2 from '../Components/menuPrincipale2';
import Header2 from '../Components/headerRegister'
import Footer from '../Components/footer';
import LawList from '../Components/lawList';
import FilterLaw from '../Components/filterLaw';

export default function LawPage() {
  const isSignedUp = localStorage.getItem('signup') === 'true';
  return ( 
    <div>
      {isSignedUp ?  
      <div>
      <Header2 />
      <MenuPrincipal2 /> 
      <FilterLaw  />
      <Footer /> 
      </div>
       : window.location.href = '/login' }
      
    </div>
  );
}
