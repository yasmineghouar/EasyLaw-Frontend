import React, { useEffect, useState } from 'react';
import MenuPrincipal from '../Components/menuPrincipal3';
import Header2 from '../Components/header2';
import AddOffer from '../Components/AddOffer';
import IntrestedDoamin from '../Components/intrestedDoamin';
import HistoryIntrestedDomain from '../Components/historyIntrestedDomain';  // Assurez-vous que ce composant est correctement importé

export default function GestionIntrestedDomain() {
    const [tarifications, setTarifications] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTarification, setSelectedTarification] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [activeComponent, setActiveComponent] = useState('intrestedDomain'); // Nouvel état pour suivre le composant actif


  return (
    <div>
      <div className={`flex flex-row bg-my_whitee h-screen bg-opacity-10 ${showPopup ? '=[-[[====[===' : ''}`}>
        <MenuPrincipal/>
        <div className='flex flex-col w-3/4 '>
          <Header2 title="ادارة مجالات لاهتمام "/> 
          <nav className="bg-Dark_Blue p-2 ">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-around">
                <div className='hover:bg-Deep_Blue'>
                  <button onClick={() => setActiveComponent('history')} className="text-white  px-3 py-2 rounded-md text-sm font-medium">تاريخ الاعمال</button>
                </div>
                <div className='hover:bg-Deep_Blue'>
                  <button onClick={() => setActiveComponent('intrestedDomain')} className="text-white  px-3 py-2 rounded-md text-sm font-medium">ادارة </button>
                </div>
              </div>
            </div>
          </nav>
          <div className='h-screen'>
            {successMessage && <div className="text-green-500 mt-5">{successMessage}</div>}
            <div>
              {activeComponent === 'intrestedDomain' && <IntrestedDoamin />}
              {activeComponent === 'history' && <HistoryIntrestedDomain />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
