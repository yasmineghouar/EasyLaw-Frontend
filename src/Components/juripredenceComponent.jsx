import React from 'react';
import { BiDetail } from "react-icons/bi";

export default function JuripredenceComponent({ qrar, index }) {
    const backgroundColor = index % 2 === 0 ? 'bg-my_yellow' : 'bg-light_Blue';

    // Formater la date au format jour/mois/année
    const formattedDate = new Date(qrar.dataQarar).toLocaleDateString('fr-EG', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });

    const handleDetailClick = () => {
      if (qrar.commission === "المحكمة العليا") {
        window.location.href = `/detailsMahkama/${qrar.raqmQarar}`;
      } else if (qrar.commission === "مجلس الدولة") {
        window.location.href = `/detailsMajliss/${qrar.raqmQarar}`;
      }
    };

    return (
        <div className={`grid grid-cols-7 p-3 ${backgroundColor} bg-opacity-15 shadow-sm`}>
            <div className="flex justify-around" onClick={handleDetailClick}>
                <BiDetail className='text-Deep_Blue' size={30} />
            </div>
            <h1 className='text-Deep_Blue font-cairo'>{qrar.commission}</h1>
            <h1 className='col-span-2 text-Dark_Blue font-cairo'>{qrar.principe}</h1>
            <h1 className='text-Deep_Blue font-cairo'>{qrar.sujetQarar}</h1>
            <h1 className='text-Deep_Blue font-cairo'>{formattedDate}</h1>
            <h1 className='text-Deep_Blue font-cairo'>{qrar.raqmQarar}</h1>
        </div>
    );
}

