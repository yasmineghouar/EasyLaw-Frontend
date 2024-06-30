import React, { useEffect, useState } from 'react';
import MenuPrincipal from '../Components/menuPrincipal3';
import Header2 from '../Components/header2';
import AddOffer from '../Components/AddOffer';
import OffersList from '../Components/offersList';
import HistoryTarification from '../Components/historyTarification';  // Assurez-vous que ce composant est correctement importé

export default function GestionOffres() {
  const [tarifications, setTarifications] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTarification, setSelectedTarification] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [activeComponent, setActiveComponent] = useState('offers'); // Nouvel état pour suivre le composant actif

  useEffect(() => {
    fetch('http://127.0.0.1:8000/Alltarifications')
      .then(response => response.json())
      .then(data => setTarifications(data.tarifications))
      .catch(error => console.error('Error fetching tarifications:', error));
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleOfferClick = (tarification) => {
    setSelectedTarification(tarification);
    setShowPopup(true);
  };

  const updateTarification = (updatedTarification) => {
    const updatedTarifications = tarifications.map(tarification =>
      tarification.id === updatedTarification.id ? updatedTarification : tarification
    );
    setTarifications(updatedTarifications);
    setSuccessMessage('تم تحديث العرض بنجاح');
    setTimeout(() => {
      setSuccessMessage('');
    }, 1000);
  };

  return (
    <div>
      <div className={`flex flex-row bg-my_whitee h-screen bg-opacity-10 ${showPopup ? '=[-[[====[===' : ''}`}>
        <MenuPrincipal/>
        <div className='flex flex-col w-3/4 '>
          <Header2 title="ادارة العروض "/> 
          <nav className="bg-Dark_Blue p-2 ">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-around">
                <div className='hover:bg-Deep_Blue'>
                  <button onClick={() => setActiveComponent('history')} className="text-white  px-3 py-2 rounded-md text-sm font-medium">تاريخ الاعمال</button>
                </div>
                <div className='hover:bg-Deep_Blue'>
                  <button onClick={() => setActiveComponent('offers')} className="text-white  px-3 py-2 rounded-md text-sm font-medium">ادارة العروض</button>
                </div>
              </div>
            </div>
          </nav>
          <div className='h-screen'>
            {successMessage && <div className="text-green-500 mt-5">{successMessage}</div>}
            <div>
              {activeComponent === 'offers' && <OffersList admin={true} onOfferClick={handleOfferClick} tarifications={tarifications} />}
              {activeComponent === 'history' && <HistoryTarification />}
            </div>
          </div>
        </div>
      </div>
      {showPopup && <div className='fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-50'><AddOffer onClose={togglePopup} tarification={selectedTarification} updateTarification={updateTarification} setSuccessMessage={setSuccessMessage}/></div>}
    </div>
  );
}
