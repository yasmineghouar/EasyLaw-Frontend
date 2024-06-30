import React from 'react'
import MenuPrincipal2 from '../Components/menuPrincipale2'
import Header2 from '../Components/headerRegister'
import EspaceChat from '../Components/espaceChat';
import ChatHistory from '../Components/chatHistory';

export default function ChatBot() {
  const isSignedUp = localStorage.getItem('signup') === 'true';

  return (
<div>
      {isSignedUp ? 
    <div className='flex flex-col'>
    <Header2/> 
    <MenuPrincipal2/>
    <div className='flex flex-row mb-5'>
    {/* espace chatBot */}
    <EspaceChat/>
    
    {/* espace historique des chat  */}
    
    {/* <ChatHistory/>   */}
    </div>
    </div>
       : window.location.href = '/login' }
      
    </div>

    )
}
