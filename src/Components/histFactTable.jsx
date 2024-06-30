import React, { useState, useEffect } from 'react';
import eyeIcon from '../Images/eyeIcon.png'; 
import downloadIcon from '../Images/downloadIcon.png'; 
import { Link } from 'react-router-dom';

export default function HistFactTable() {
  const [userInfo, setUserInfo] = useState(null);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les informations de l'utilisateur depuis le serveur
    const fetchUserInfo = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const response = await fetch('http://127.0.0.1:8000/user-info', {
                    method: 'GET',
                    headers: {
                        'Authorization': token,
                    } 
                });
                const data = await response.json();
                if (response.ok) {
                    setUserInfo(data);
                } else {
                    window.location.href = '/login';
                    console.error('Failed to fetch user info:', data.message);
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    if (userInfo) {
      // Fonction pour récupérer les factures de l'utilisateur
      const fetchInvoices = async () => {
          try {
              const response = await fetch(`http://127.0.0.1:8000/invoices/${userInfo.id}`);
              const data = await response.json();
              if (response.ok) {
                  setInvoices(data.invoices);
              } else {
                  console.error('Failed to fetch invoices:', data.message);
              }
          } catch (error) {
              console.error('Error fetching invoices:', error);
          }
      };

      fetchInvoices();
    }
  }, [userInfo]);

  return (
    <div className="mt-10 flex justify-center">
      <table className="w-full max-w-4xl">
        <thead>
          <tr className="bg-transparent border-2 border-light_Blue rounded-t-lg text-Deep_Blue font-bold">
            <th className="py-2 px-4"></th>
            <th className="py-2 px-4">مبلغ الفاتورة </th>
            <th className="py-2 px-4">تاريخ الفاتورة</th>
            <th className="py-2 px-4">رقم الفاتورة</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr key={index} className='border-2 border-light_Blue p-4 '>
              <td className='py-2' style={{ display: 'flex', alignItems: 'center' }}>
                <img src={downloadIcon} alt="Télécharger" style={{ width: '30px', height: '35px', marginLeft: '30%' }} />
                <Link to={`/DetailFacture/${invoice.id}`}>
                  <img src={eyeIcon} alt="voir Détails" style={{ width: '40px', height: '25px', marginLeft: '20%' }} />
                </Link>
              </td>
              <td className='py-2'>{invoice.prixFacture} دج</td>
              <td className='py-2'>{new Date(invoice.dateFacture).toLocaleDateString()}</td>
              <td className='py-2'>{invoice.numFacture}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
