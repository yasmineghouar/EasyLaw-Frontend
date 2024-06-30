import React, { useEffect, useState } from 'react';
import { IoNewspaperOutline } from "react-icons/io5";
import { BsFiletypePdf } from "react-icons/bs";

export default function LawComponent({ law, index }) {
  const backgroundColor = index % 2 === 0 ? 'bg-my_yellow' : 'bg-light_Blue';
  const [loi, setloi] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/law/${law.idLaw}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setloi(data.law);
        } else {
          console.error(data.message);
        }
      })
      .catch(error => console.error('Error fetching law:', error));
  });
  // Fonction pour ouvrir le fichier PDF dans une nouvelle fenêtre
  const openPdfFile = () => {
    const match = loi.date_jarida.match(/\d{4}/);
    const annee = match ? parseInt(match[0]) : null;
    const numJarida = law.num_jarida.toString().padStart(3, '0'); // Mettre le numéro de Jarida sur 3 chiffres (par exemple, 1 => 001)
    const pdfUrl = `http://127.0.0.1:8000/upload/A${annee}${numJarida}.pdf`; // Construire l'URL du fichier PDF
    window.open(pdfUrl, '_blank'); // Ouvrir le lien dans une nouvelle fenêtre
  };

  return (
    <div className={`flex flex-col justify-around md:flex-row rounded-md shadow-md ${backgroundColor} bg-opacity-15 py-4`}>
       {/* the first */}
       <div className='flex flex-col text-right'>
         <p className='text-Dark_Blue font-cairo'> {law.page_jarida }الجريدة الرسمية رقم {law.num_jarida} ,الصفحة </p>
         <p className='text-Dark_Blue font-cairo'>المؤرخة في {loi ? loi.date_jarida : ''}</p>
         <div className='flex flex-row gap-4 self-end' onClick={openPdfFile}>
            <p className='text-light_Blue font-cairo'>التطلع على التفاصيل</p>
            <BsFiletypePdf  size={25} className='text-my_Red'/>
         </div>
       </div>
       {/* the second */}
       <div className='flex flex-col w-1/2'>
        <div className='flex flex-row gap-4 self-end'>
        
        <h1 className='text-Deep_Blue font-cairo font-bold'>{law.type}</h1>
        <IoNewspaperOutline size={30} className='text-Deep_Blue'/>
        </div>
        <p className='text-Dark_Blue font-cairo text-right'>تابع ل{law.wizara}</p>
        <p className='text-Dark_Blue font-cairo text-right'>{law.sujet}</p>
       </div>
    </div>
  );
}
