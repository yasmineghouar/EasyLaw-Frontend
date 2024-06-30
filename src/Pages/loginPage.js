import React from 'react'
import HeaderLogin from '../Components/headerlogin'
import Menu from '../Components/menuPrncipale'
import Footer from '../Components/footer'
import LoginForm from '../Components/loginForm'


export default function LoginPage() {
  return (
   <div>
   <HeaderLogin/> 
   <Menu/>
   <LoginForm/> 
   <Footer/>
   </div>
   
  )
}
