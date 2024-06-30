import React from 'react';
import Header from '../Components/header';
import MenuPrincipal from '../Components/menuPrncipale';
import Footer from '../Components/footer';
import Notifications from '../Components/Notifications';

const notifications = [
  { id: 1, content: "الإشعار 1: محتوى الإشعار  محتوى الإشعار  محتوى الإشعار  محتوى الإشعار  محتوى الإشعار  محتوى الإشعار  محتوى الإشعار  محتوى الإشعار  محتوى الإشعار  محتوى الإشعار  محتوى الإشعار  محتوى الإشعار 1" },
  { id: 2, content: "الإشعار 2: محتوى الإشعار 2" },
  { id: 3, content: "الإشعار 3: محتوى الإشعار 3" },
  { id: 4, content: "الإشعار 4: محتوى الإشعار 4" },
  { id: 5, content: "الإشعار 5: محتوى الإشعار 5" },
  { id: 6, content: "الإشعار 6: محتوى الإشعار 6" },
  { id: 7, content: "الإشعار 7: محتوى الإشعار 7" },
  { id: 8, content: "الإشعار 8: محتوى الإشعار 8" },
  { id: 9, content: "الإشعار 9: محتوى الإشعار 9" },
  { id: 10, content: "الإشعار 10: محتوى الإشعار 10" },


  // Ajoutez d'autres notifications au besoin
];

export default function NotifPage() {
  return (
    <div>
      <Header/> 
      <MenuPrincipal/>
   
      {/* Appel du composant Notifications avec les notifications en tant que prop */}
      <Notifications notifications={notifications} />
      <Footer/>
    </div>
  );
}
