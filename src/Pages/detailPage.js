import React from 'react'
import Header from '../Components/header'
import MenuPrincipal from '../Components/menuPrncipale'
import DetailNews from '../Components/detailNews'
import Footer from '../Components/footer'

export default function detailPage() {
    return (
        <div className='bg-my_whitee h-screen bg-opacity-10'>
        <Header/>
        <MenuPrincipal/>
        <DetailNews/>
        <Footer/>
        </div>
       
      )
}
