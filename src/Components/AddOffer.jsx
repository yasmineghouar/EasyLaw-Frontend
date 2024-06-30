import React, { useState } from 'react';
import { MdCancelPresentation } from "react-icons/md";

export default function AddOffer({ onClose, tarification, updateTarification, setSuccessMessage }) {
  const [updatedTarif, setUpdatedTarif] = useState(tarification.tarif);
  const [updatedDescription, setUpdatedDescription] = useState(tarification.description);
  const [updatedDuree, setUpdatedDuree] = useState(tarification.duree);
  const [updatedService, setUpdatedService] = useState(tarification.serviceId); 

  const handleUpdate = () => {
    // Récupérer le token du local storage
    const token = localStorage.getItem('token');

    // Vérifier si le token existe
    if (!token) {
        console.error('Token is missing');
        // Rediriger vers la page de connexion si le token est manquant
        window.location.href = '/login';
        return;
    }

    fetch(`http://localhost:8000/tarification/${tarification.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        },
        body: JSON.stringify({
            tarif: updatedTarif,
            description: updatedDescription,
            // duree: updatedDuree,
        }),
    })
        .then(response => {
            if (!response.ok) {
                // Si la réponse du serveur n'est pas ok, vérifier le statut de la réponse
                if (response.status === 401) {
                    // Si le statut est 401 (Unauthorized), rediriger vers la page de connexion avec un message d'erreur approprié en arabe
                    console.error('نهاية صلاحية جلسة العمل');
                    window.location.href = '/login';
                }
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // Mettre à jour la tarification dans le state local
            updateTarification({ ...tarification, tarif: updatedTarif, description: updatedDescription });
            onClose(); // Fermer le popup après la mise à jour
            setSuccessMessage('تم تحديث العرض بنجاح');
        })
        .catch(error => {
            console.error('Error updating tarification:', error);
        });
};

  return (
    <div className='flex flex-col items-center w-auto md:w-1/3 px-5 py-5 bg-my_whitee rounded-md shadow-md border-2 border-Deep_Blue'>
      <MdCancelPresentation className='text-Deep_Blue self-end cursor-pointer' onClick={onClose} />
      <h1 className='text-2xl font-cairo font-bold text-Deep_Blue mb-5'>تعديل عرض </h1>
      <div className='flex flex-col'>
        <div className='flex flex-row mb-3'>
          <div className='flex flex-col mr-4 w-full'>
            <label className='text-right text-Deep_Blue font-cairo'>:السعر</label>
            <input className='inputStyle w-full px-5 py-1' value={updatedTarif} onChange={e => setUpdatedTarif(e.target.value)} />
          </div>
          <div className='flex flex-col w-full'>
            <label className='text-right text-Deep_Blue font-cairo'>:مدة الصلاحية</label>
            
            <input className='inputStyle w-full px-5 py-1' value={updatedDuree}  />
            {/* <select className='inputStyle w-full px-5 py-1'>
              <option value=''>سنوي</option>
              <option value=''>شهري</option>
            </select> */}
          </div>
        </div>
        <div className='flex flex-col mb-3'>
          <label className='text-right text-Deep_Blue font-cairo'>:الخدمة</label>
          <div className='flex flex-row w-full justify-end self-end'>
            <label className='text-right text-Deep_Blue font-cairo'>
              {updatedService === 1 && "قوانين اساسية"}
              {updatedService === 2 && "الاجتهادات القضائية"}
              {updatedService === 3 && "روبوت المحادثة"}
              {updatedService === 4 && "الاشعارات"}
            </label>
            <input type="checkbox" className="ml-2" disabled checked />
          </div>
        </div>
        <div className='flex flex-col mb-3'>
          <label className='text-right text-Deep_Blue font-cairo'>:نص توضيحي</label>
          <input className='inputStyle w-full px-5 py-2' value={updatedDescription} onChange={e => setUpdatedDescription(e.target.value)} />
        </div>
      </div>
      <button className='btn_Bleu w-full mt-5 mb-2' onClick={handleUpdate}>واصل</button>
    </div>
  );
}
