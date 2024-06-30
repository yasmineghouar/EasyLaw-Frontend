import React, { useEffect, useState } from 'react';
import Profil from '../Images/Profil.png';

export default function Header2({ title }) {
  const [userInfo, setUserInfo] = useState(null);
  
  useEffect(() => {
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
                      console.log("userinfo"+data)
                  } else {
                      console.error('Failed to fetch user info:', data.message);
  
                  }
              } catch (error) {
                  console.error('Error fetching user info:', error);
              }
          }
      };

      fetchUserInfo();
  }, []);

  return (
    <div className='flex flex-row justify-between px-5 py-3 shadow-md shadow-Deep_Blue'>
        <div className='flex flex-row gap-2'>
        {userInfo && (
          <div className='flex flex-col'>
          <p className='text-my_yellow font-bold font-cairo'>{userInfo.role}</p>
          <p className='text-Deep_Blue font-cairo'>{userInfo.username}</p>
          </div>
        )}
         
         <img src={Profil} alt="" className='w-12 h-auto rounded-full border-2 border-Deep_Blue'/>
        </div>
      <h1 className='text-2xl text-Dark_Blue font-cairo font-bold self-end'>{title}</h1>
    </div>
  );
}
