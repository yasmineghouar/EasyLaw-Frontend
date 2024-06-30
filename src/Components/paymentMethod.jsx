import React, { useState } from 'react';
import dahabia from '../Images/payment_Img/dahabia.png';
import BridiMob from '../Images/payment_Img/BridiMob.png';
import CIB from '../Images/payment_Img/CIB.png';
import { MdCancelPresentation } from "react-icons/md";
import DahabiaPayment from "./dahabiaPayment"
import BridiMobPayment from "./baridiMopPayment"
import CibPayment from "./cibPayement"


export default function PaymentMethod({ onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupComponent, setPopupComponent] = useState(null);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  
  const handleContinue = () => {
    if (selectedImage) {
      setShowPopup(true);
      if (selectedImage === 'dahabia') {
        setPopupComponent(<DahabiaPayment onClose={handleClosePopup} />);
      } else if (selectedImage === 'bridiMob') {
        setPopupComponent(<BridiMobPayment onClose={handleClosePopup} />);
      } else if (selectedImage === 'cib') {
        setPopupComponent(<CibPayment onClose={handleClosePopup} />);
      }
    } else {
      alert("يرجى اختيار طريقة الدفع");
    }
  };
  
  return (
    <div className='flex flex-col items-center w-auto md:w-1/3 px-5 py-5 bg-my_whitee rounded-md shadow-md border-2 border-Deep_Blue'>
        <MdCancelPresentation className='text-Deep_Blue self-end' onClick={onClose}/>
      <h1 className='text-2xl  font-cairo font-bold text-Deep_Blue mb-5'>يرجى اختيار نوع الدفع</h1>
      <div className='flex flex-row gap-5'>
        <img src={dahabia} alt="Dahabia" className={`w-28 hover:shadow-sm hover:shadow-my_yellow ${selectedImage === 'dahabia' ? 'border border-Deep_Blue' : ''}`} onClick={() => handleImageClick('dahabia')} />
        <img src={BridiMob} alt="BridiMob" className={`w-28 hover:shadow-sm hover:shadow-my_yellow ${selectedImage === 'bridiMob' ? 'border border-Deep_Blue' : ''}`} onClick={() => handleImageClick('bridiMob')} />
        <img src={CIB} alt="CIB" className={`w-28 hover:shadow-sm hover:shadow-my_yellow ${selectedImage === 'cib' ? 'border border-Deep_Blue' : ''}`} onClick={() => handleImageClick('cib')} />
      </div>
      <button className='btn_Bleu w-full mt-5 mb-2' onClick={handleContinue}>واصل</button>
      
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          {popupComponent}
        </div>
      )}
    
    </div>
  ); 
}
