import React, { useEffect, useState } from 'react';
import avatar from '../Images/avatar2.jpg';

export default function UserInfo({ userData, onChange }) {
  const [userInfo, setUserInfo] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const updateUser = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token && userInfo) {
        const response = await fetch(`http://localhost:8000/update-user/${userInfo.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          },
          body: JSON.stringify(userInfo),
        });
        const data = await response.json();
        if (response.ok) {
          console.log(data.message);
          // Mettre à jour les données utilisateur si nécessaire
        } else {
          console.error('Failed to update user:', data.message);
        }
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

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
            },
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

  return (
    <div>
      {userInfo && (
        <div className="user-info p-4  w-full">
          <h1 className="text-3xl font-bold mb-2 text-right text-Deep_Blue">إدارة الملف الشخصي</h1>
          <h2 className="text-2xl font-semibold text-right text-light_Blue mb-4 mr-4">   : معلومات شخصية  </h2>
          <div className="flex justify-center items-center mb-4">
            <div className="flex flex-col items-start mr-4">
              <div className="font-semibold text-lg"> المستخدم</div>
              <div className="font-bold text-lg"> {userInfo.username}</div>
            </div>
            <img src={avatar} alt="User Avatar" className="rounded-full w-24 h-24" />
          </div>
          <div className="flex justify-center items-center mb-4 w-full">
            <div className="user-info p-4 border rounded-md shadow-md grid grid-cols-2 gap-8 w-full">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">: اسم المستخدم</label>
                <input type="text" id="username" name="username" value={userInfo.username} onChange={handleInputChange} className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-light_Blue text-my_whitee" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">:  البريد الإلكتروني</label>
                <input type="email" id="email" name="email" value={userInfo.email} onChange={handleInputChange} className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-light_Blue text-my_whitee" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">: كلمة السر </label>
                <input type="password" id="password" name="password" value={userInfo.password} onChange={handleInputChange} className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-light_Blue text-my_whitee" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">:  رقم الهاتف </label>
                <input type="text" id="phone" name="phone" value={userInfo.phoneNumber} onChange={handleInputChange} className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-light_Blue text-my_whitee" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center px-4 mb-4 flex-wrap">
            <input type="submit" value="حفظ التغييرات" onClick={updateUser} className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
focus:border-transparent bg-Deep_Blue text-my_whitee hover:cursor-pointer hover:bg-my_yellow hover:text-Deep_Blue transition duration-300 ease-in-out hover:shadow-md"/>
</div>



    </div>
      )}
    </div>
    
  );
}
