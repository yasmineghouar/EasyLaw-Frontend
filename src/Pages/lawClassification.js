import React, { useState } from 'react'
import IndexLawDetails from '../Components/indexLawDetails'
import MenuPrincipal from '../Components/menuPrincipal3'
import Header2 from '../Components/header2'
import AddFeature from '../Components/addFeature'

export default function LawClassification() {
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup); 
      };
  return (
    <div className='flex flex-row bg-my_whitee h-screen bg-opacity-10 '>
    <MenuPrincipal/>
    <div className='flex flex-col w-3/4'>
     <Header2 title="فهرسة و تصنيف القوانين الاساسية "/>
     <div className=' h-screen'>
     <IndexLawDetails onClick={togglePopup}/>
     
     </div>
    </div>
    {showPopup && <div className="fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-50">
        <AddFeature onClose={togglePopup} /> {/* Passer la fonction togglePopup comme prop onClose */}
      </div>}
    </div>
    
  )
}
