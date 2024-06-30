import React, { useState } from 'react';
import baridi_mob from '../Images/baridi_mob.png';
import cib from '../Images/cib.png';
import dahabiya from '../Images/dahabiya.jpg';

export default function UserPaie({ userData, onChange }) {
  
 
  
  
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const [selectedImage, setSelectedImage] = useState('image1');
  const handleImageChange = (e) => {
    setSelectedImage(e.target.value);
  };

  return (
    <div className="user-info p-4  rounded-md  w-full">
      <h1 className="text-3xl font-bold mb-2 text-right text-Deep_Blue">إدارة الملف الشخصي</h1>
      <h2 className="text-2xl font-semibold text-right text-light_Blue mb-4 mr-4">: معلومات عن الدفع</h2>

      <div className="flex justify-end items-center mb-4">
        <div className="flex justify-end items-center mb-4 w-full">
          <div className="user-info p-4 border rounded-md shadow-md grid grid-cols-1 gap-8 w-full md:grid-cols-2 md:gap-8"> {/* cadre des infos */}
            <div className="flex flex-col justify-end items-end mr-40"> {/* Colonne de droite */}
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">: رقم البطاقة</label>
              <input type="number" id="username" name="username" value={userData.phone} onChange={handleInputChange} className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-light_Blue text-my_whitee" />

              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-4">: تاريخ انتهاء الصلاحية</label>
              <input type="date" id="email" name="email" value={userData.email} onChange={handleInputChange} className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-light_Blue text-my_whitee" />

              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mt-4">: رمز الامان</label>
              <input type="password" id="password" name="password" value={userData.password} onChange={handleInputChange} className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-light_Blue text-my_whitee" />
            </div>

            <div className="flex flex-col justify-end items-end mr-40"> {/* Colonne de gauche */}
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">: اختر وسيلة الدفع</label>
            <select
              id="image"
              name="image"
              onChange={handleImageChange}
              value={selectedImage} // Set the value to state variable
              className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-light_Blue text-my_whitee"
            >
              <option value="image1">Dahabiya</option>
              <option value="image2">CIB</option>
              <option value="image3">Baridi Mob</option>
            </select>
              {/* Ajoutez ici votre balise d'image qui change en fonction de la sélection */}
              {selectedImage === "image1" && (
                <img src={dahabiya} alt="dahabiya 1" className="mt-4" />
              )}
              {selectedImage === "image2" && (
                <img src={cib} alt="cib" className="mt-4" />
              )}
              {selectedImage === "image3" && (
                <img src={baridi_mob} alt="baridi_mob" className="mt-4 h-64 w-64" />
              )}
            </div>
          </div>
        </div>
       
      </div>
      <div className="flex justify-center items-center px-4 mb-4 flex-wrap">
        
        <input type="submit" id="secondaryPhone" name="secondaryPhone" value="حفظ التغييرات"
               className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-Deep_Blue text-my_whitee hover:cursor-pointer hover:bg-my_yellow hover:text-Deep_Blue transition duration-300 ease-in-out hover:shadow-md"/>
     
     <input type="submit" id="historique" name="secondaryPhone" value=" تتبع الفواتير"
               className="mt-1 ml-3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-Deep_Blue text-my_whitee hover:cursor-pointer hover:bg-my_yellow hover:text-Deep_Blue transition duration-300 ease-in-out hover:shadow-md"/>
      </div>
    </div>
  );
}