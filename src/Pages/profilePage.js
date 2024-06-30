import React, { useEffect, useState } from 'react';
import Header2 from '../Components/headerRegister'
import UserInfo from '../Components/UserInfo';
import Footer from '../Components/footer';
import defaultAvatar from '../Images/avatar2.jpg';
import UserPaie from '../Components/UserPaie';
import NotifInfo from '../Components/NotifInfo';

export default function ProfilePage() {
  const isSignedUp = localStorage.getItem('signup') === 'true';
  const [currentComponent, setCurrentComponent] = useState('UserInfo');
  const [userInfo, setUserInfo] = useState(null);
  const [userData, setUserData] = useState({
    username: userInfo ? userInfo.username : '',
    photoUrl: defaultAvatar,
    email: userInfo ? userInfo.email : '',
    password: "",
    confirmPassword: "",
    phone: userInfo ? userInfo.phoneNumber : '',
  });
  
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
                    window.location.href = '/login' ;
                    console.error('Failed to fetch user info:', data.message);

                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        }
    };

    fetchUserInfo();
}, []);

  // Fonctions pour basculer entre les composants
  const toggleToUserPaie = () => setCurrentComponent('UserPaie');
  const toggleToNotifInfo = () => setCurrentComponent('NotifInfo');
  const backToUserInfo = () => setCurrentComponent('UserInfo');
  const backToUserPaie = () => setCurrentComponent('UserPaie');

  // Fonction pour mettre à jour les informations utilisateur
  const handleInputChange = (name, value) => {
    setUserData(prevData => ({ ...prevData, [name]: value }));
  };

  // Rendu conditionnel en fonction du composant actuellement sélectionné
  const renderComponent = () => {
    switch (currentComponent) {
      case 'UserPaie':
        return (
          <div>
          <UserPaie userData={userInfo} onChange={handleInputChange} />
          <div className="flex justify-center mt-10 mb-20">
            <a href="#" className="text-Deep_Blue hover:underline mr-4" onClick={toggleToNotifInfo}>المزيد</a>
            <a href="#" className="text-Deep_Blue hover:underline ml-4" onClick={backToUserInfo}>رجوع</a>
          </div>
        </div>
        );
      case 'NotifInfo':
        return (
          <div>
            <NotifInfo />
            <a href="#" className="mt-10 mb-20 text-Deep_Blue hover:underline flex justify-center" onClick={backToUserPaie}>رجوع</a>
          </div>
        );
      case 'UserInfo':
      default:
        return (
          <div>
            <UserInfo userData={userInfo} onChange={handleInputChange} />
            <a href="#" className="mt-10 mb-20 text-Deep_Blue hover:underline flex justify-center" onClick={toggleToUserPaie}>المزيد</a>
          </div>
        );
    }
  };
 
  return (
    <div>
      
      <div>
      {isSignedUp ?  
      <div>
      <Header2 />
      {renderComponent()}
      <Footer /> 
      </div>
       : window.location.href = '/login' }
      
    </div>


    </div>
  );
}