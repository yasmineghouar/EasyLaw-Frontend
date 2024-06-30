import React, { useState } from 'react';
import { MdCancelPresentation } from "react-icons/md";

export default function AddDomain({ onClose }) {
  const [domainName, setDomainName] = useState('');

  const handleInputChange = (e) => {
    setDomainName(e.target.value);
  };

  const handleSubmit = () => {
    const token = localStorage.getItem('token');

    // Vérifier si le token existe
    if (!token) {
        console.error('Token is missing');
        // Rediriger vers la page de connexion si le token est manquant
        window.location.href = '/login';
        return;
    }
    fetch('http://127.0.0.1:8000/interested-domain', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({ nom: domainName })
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === "Interested domain name added successfully") {
        // Fermer le popup et éventuellement mettre à jour la liste des domaines
        onClose();
      } else {
        console.error('Failed to add domain:', data.message);
      }
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='flex flex-col items-center w-auto md:w-1/3 px-5 py-5 bg-my_whitee rounded-md shadow-md border-2 border-Deep_Blue'>
        <MdCancelPresentation className='text-Deep_Blue self-end cursor-pointer' onClick={onClose} />
        <h1 className='text-2xl font-cairo font-bold text-Deep_Blue mb-5'>:اضافة مجال</h1>
        <div className='flex flex-col'>
          <div className='flex flex-col mb-3'>
            <label className='text-right text-Deep_Blue font-cairo'>:اسم المجال</label>
            <input 
              className='inputStyle w-full px-5 py-2' 
              value={domainName} 
              onChange={handleInputChange} 
            />
          </div>
        </div>
        <button className='btn_Bleu w-full mt-5 mb-2' onClick={handleSubmit}>اضافة</button>
      </div>
    </div>
  );
}
