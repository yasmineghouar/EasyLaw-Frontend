import React, { useEffect, useState } from 'react';
// import FilterOffres from '../Components/filterOffres';
import Header1 from '../Components/header'
import Header2 from '../Components/headerRegister'
import MenuPrincipal from '../Components/menuPrncipale';
import Footer from '../Components/footer';
import OffersList from '../Components/offersList';
import PaymentMethod from '../Components/paymentMethod';

export default function OffresPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [tarifications, setTarifications] = useState([]);

  useEffect(() => {
    // Effectue la requête pour récupérer les tarifications
    fetch('http://127.0.0.1:8000/tarifications')
      .then(response => response.json())
      .then(data => setTarifications(data.tarifications))
      .catch(error => console.error('Error fetching tarifications:', error));
  }, []);

  const handleOfferClick = () => {
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  
  const isSignedUp = localStorage.getItem('signup') === 'true';

  return (
    <div className="relative bg-my_whitee h-screen bg-opacity-10">
       {isSignedUp ? <Header2 /> : <Header1 />}
      <MenuPrincipal/>
      <OffersList admin={false} onOfferClick={handleOfferClick} tarifications={tarifications} />
      <Footer/>
      {showPopup &&(
        <div className="fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-50">
         {isSignedUp && (<PaymentMethod onClose={handleClosePopup}/>)}
         {!isSignedUp && (window.location.href = '/login')}
        </div>
      )}
     
    </div>
  );
}
