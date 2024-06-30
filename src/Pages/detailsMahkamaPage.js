import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderAfterLogin from '../Components/headerAfterLogin'
import MenuAfterLogin from '../Components/menuAfterLogin';
import Footer from '../Components/footer';
import MahkamaDetails from '../Components/mahkamaDetails';

export default function DetailsMahkamaPage() { 
  const { id } = useParams(); // Récupérer l'ID de l'URL

  return (
    <div>
      <HeaderAfterLogin/> 
      <MenuAfterLogin/>
      <MahkamaDetails id={id} /> {/* Passer l'ID en tant que prop à MahkamaDetails */}
      <Footer/>
    </div>
  );
}