import React, { useState } from 'react'
import MenuPrincipal from '../Components/menuPrincipal3'
import Header2 from '../Components/header2'
import ScrapingTextJuriTable from '../Components/scrapingTextJuriTable'


export default function ScrapingTextJuridique() {
 
  return (
    <div className='flex flex-row bg-my_whitee h-screen bg-opacity-10'>
    <MenuPrincipal/>
    <div className='flex flex-col w-3/4'>
     <Header2 title="تجريف النصوص القانونية "/> 
     <div className=' h-screen'>
     <ScrapingTextJuriTable />
    
     </div>
    </div>
    </div>
  )
}
