import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderAfterLogin from '../Components/headerAfterLogin'
import MenuAfterLogin from '../Components/menuAfterLogin';
import Footer from '../Components/footer';
import MajlissDetails from '../Components/majlissDetails';

export default function DetailsMajlissPage() { 
  const { id } = useParams(); // Récupérer l'ID de l'URL

  return (
    <div>
      <HeaderAfterLogin/> 
      <MenuAfterLogin/>
      <MajlissDetails id={id} /> {/* Passer l'ID en tant que prop à MajlissDetails */}
      <Footer/>
    </div>
  );
}