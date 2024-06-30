import React from 'react';
import law1 from '../Images/law_Icon.png';
import law2 from '../Images/law2_icon.png';
import chatbot from '../Images/chatbot_icon.png';
import mobile_icon from '../Images/mobile_icon.png';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="mt-10">
      <h2 className="text-Deep_Blue font-bold font-cairo text-2xl text-center py-2">خدمات الموقع</h2>
      <div className="flex flex-wrap justify-between">
        <Link to="/Law" className="w-full md:w-1/2 lg:w-1/4 px-4 py-5"><ServiceBox image={law1} title="قوانين الجريدة الرسمية" /></Link>
        <Link to="/Jurisprudence" className="w-full md:w-1/2 lg:w-1/4 px-4 py-5"><ServiceBox image={law2} title="الاجتهادات القضائية" /></Link>
        <Link to="/ChatBot" className="w-full md:w-1/2 lg:w-1/4 px-4 py-5"><ServiceBox image={chatbot} title="روبوت المحادثة" /></Link>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 py-5"><ServiceBox image={mobile_icon} title="اشعارات الهاتف" /></div>
      </div>
    </div>
  );
}

function ServiceBox({ image, title }) {
  return (
    <div className="flex flex-col justify-between bg-white border-2 border-Deep_Blue rounded-md shadow-md p-4">
      <img src={image} alt={title} className="mx-auto"/>
      <p className="text-Dark_Blue font-cairo text-xl text-center mt-4">{title}</p>
    </div>
  );
}
