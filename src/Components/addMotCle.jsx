import React, { useState, useEffect } from 'react';
import { MdCancelPresentation } from "react-icons/md";

export default function AddMotCle({ onClose }) {
  const [domains, setDomains] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState('');
  const [motCle, setMotCle] = useState('');

  useEffect(() => {
    // Fetch domains from the API
    fetch('http://127.0.0.1:8000/interested-domains')
      .then(response => response.json())
      .then(data => {
        setDomains(data);
      })
      .catch(error => {
        console.error('Error fetching domains:', error);
      });
  }, []);

  const handleAddMotCle = () => {
    if (selectedDomain && motCle) {

        const token = localStorage.getItem('token');

        if (!token) {
            console.error('Token is missing');
            window.location.href = '/login';
            return;
        }  
      fetch(`http://127.0.0.1:8000/interested-domain/${selectedDomain}/mot-cle`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' ,
          'Authorization': token
        },
        body: JSON.stringify({ nom: motCle })
      })
      .then(response => response.json())
      .then(data => {
        // alert(data.message);
        onClose();
      })
      .catch(error => {
        console.error('Error adding mot cle:', error);
      });
    } else {
      alert('Please select a domain and enter a mot cle.');
    }
  };

  return (
    <div className='flex flex-col items-center w-auto md:w-1/3 px-5 py-5 bg-my_whitee rounded-md shadow-md border-2 border-Deep_Blue'>
      <MdCancelPresentation className='text-Deep_Blue self-end cursor-pointer' onClick={onClose} />
      <h1 className='text-2xl font-cairo font-bold text-Deep_Blue mb-5'>:اضافة كلمة مفتاحية</h1>
      <div className='flex flex-col'>
        
        <div className='flex flex-col mb-3'>
          <label className='text-right text-Deep_Blue font-cairo'>:اسم المجال</label>
          <select 
            className='inputStyle w-full px-5 py-2' 
            value={selectedDomain} 
            onChange={e => setSelectedDomain(e.target.value)}
          >
            <option value=''>اختر مجالاً</option>
            {domains.map(domain => (
              <option key={domain.id} value={domain.id}>{domain.nom}</option>
            ))}
          </select>
        </div>
        
        <div className='flex flex-col mb-3'>
          <label className='text-right text-Deep_Blue font-cairo'>:الكلمة المفتاحية</label>
          <input 
            className='inputStyle w-full px-5 py-2' 
            value={motCle} 
            onChange={e => setMotCle(e.target.value)} 
          />
        </div>
      </div>

      <button className='btn_Bleu w-full mt-5 mb-2' onClick={handleAddMotCle}>اضافة</button>
    </div>
  );
}
