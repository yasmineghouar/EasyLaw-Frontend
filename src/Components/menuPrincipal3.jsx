import React, { useEffect, useState } from 'react'
import Logo from '../Images/logo.png';
import { LiaUsersCogSolid } from "react-icons/lia";
import { SiAwsorganizations } from "react-icons/si";
import { AiOutlineNodeIndex } from "react-icons/ai";
import { MdOutlinePriceChange } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function MenuPrincipal3() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  
  const handleColosItemClick = () => {
    setSelectedItem(null);
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



  return (
    <div className='fixed top-0 right-0 flex flex-col bg-Dark_Blue w-1/4 shadow-sm h-screen self-end'>
       <img src={Logo} alt='Logo' className='w-12 h-auto md:w-28 self-center' />
       <div className='flex flex-col mt-10'>
       
       
       
       {userInfo && userInfo.role === 'admin' && (
                                <Link to="/GestionUser">
                                <div className='flex flex-row gap-2 py-4 px-2 border-light_Blue border-t-2 justify-end'>
                                   <h1 className='text-light_Blue font-cairo text-xl ' onClick={() => handleColosItemClick()}>ادارة حساب المستخدمين</h1>
                                   <LiaUsersCogSolid className='text-light_Blue' size={30} />
                                 </div>
                                </Link>
        )}


       <Link to="/ScrapingTextJuridique">
       <div className='flex flex-row gap-2 py-4 px-2 border-light_Blue border-t-2 justify-end'>
          <h1 className='text-light_Blue font-cairo text-xl ' onClick={() => handleColosItemClick()}>تجريف النصوص القانونية   </h1>
          <AiOutlineNodeIndex className='text-light_Blue text-right' size={40}/>
        </div>
       </Link>
       
       
       <Link to="/gestionIntrestedDomain">
       <div className='flex flex-row gap-2 py-4 px-2 border-light_Blue border-t-2 justify-end'>
          <h1 className='text-light_Blue font-cairo text-xl ' onClick={() => handleColosItemClick()}> ادارة مجالات الاهتمام </h1>
          <AiOutlineNodeIndex className='text-light_Blue text-right' size={40}/>
        </div>
       </Link>


{/* 
        <div className='flex flex-row py-4 px-2 border-light_Blue border-t-2 justify-end'>
            <h1 className={`py-4 px-2 text-light_Blue border-light_Blue text-right ${selectedItem === 'فهرسة و تصنيف النصوص القانونية ' ? 'text-my_yellow font-bold' : ''}`} onClick={() => handleItemClick('فهرسة و تصنيف النصوص القانونية ')}>تجريف النصوص القانونية </h1>
            <SiAwsorganizations className='text-light_Blue text-right' size={40}/>
        </div>
        {selectedItem === 'فهرسة و تصنيف النصوص القانونية ' && (
          <div>
            <Link to='/IndexLaw'>
            <div className='py-2 px-2 bg-light_Blue border-Deep_Blue  border-t-2'>
              <h1 className='text-Deep_Blue font-cairo text-right text-xl'>القوانين الاساسية </h1>
            </div>
            </Link>
            <Link to='/IndexJurisprudence'>
            <div className='py-2 px-2 bg-light_Blue border-Deep_Blue border-t-2'>
              <h1 className='text-Deep_Blue font-cairo text-right text-xl'>الاجتهادات القضائية</h1>
            </div>
            </Link>
           
          </div>
        )} */}


        <Link to='/GestionOffres'>
         <div className='flex flex-row gap-2 py-4 px-2 border-light_Blue border-t-2 justify-end'>
            <h1 className='text-light_Blue font-cairo text-right text-xl' onClick={() => handleColosItemClick()}>ادارة العروض  </h1>
            <MdOutlinePriceChange className='text-light_Blue text-right' size={40}/>
        </div>
        </Link>
       </div>
       <Link to='/'>
       <div className='flex flex-row gap-2 py-4 px-2 border-light_Blue border-y-2 justify-end'>
            <h1 className='text-light_Blue font-cairo text-right text-xl'>الخروج</h1>
            <IoIosLogOut className='text-light_Blue text-right' size={40} />
        </div>
        </Link>
    </div>
  )
}
{/* <img src={Logo} alt='Logo' className='w-12 h-auto md:w-28 self-center' />
<div className='flex flex-col mt-10'>

<Link to="/GestionUser">
<div className='flex flex-row gap-2 py-4 px-2 border-light_Blue border-t-2 justify-end'>
   <h1 className='text-light_Blue font-cairo text-xl ' onClick={() => handleColosItemClick()}>ادارة حساب المستخدمين</h1>
   <LiaUsersCogSolid className='text-light_Blue' size={30} />
 </div>
</Link>

<Link to="/ScrapingTextJuridique">
<div className='flex flex-row gap-2 py-4 px-2 border-light_Blue border-t-2 justify-end'>
   <h1 className='text-light_Blue font-cairo text-xl ' onClick={() => handleColosItemClick()}>تجريف النصوص القانونية</h1>
   <AiOutlineNodeIndex className='text-light_Blue text-right' size={40}/>
 </div>
</Link>


 <div className='flex flex-row py-4 px-2 border-light_Blue border-t-2 justify-end'>
     <h1 className={`py-4 px-2 text-light_Blue border-light_Blue text-right ${selectedItem === 'فهرسة و تصنيف النصوص القانونية ' ? 'text-my_yellow font-bold' : ''}`} onClick={() => handleItemClick('فهرسة و تصنيف النصوص القانونية ')}>فهرسة و تصنيف النصوص القانونية </h1>
     <SiAwsorganizations className='text-light_Blue text-right' size={40}/>
 </div>
 {selectedItem === 'فهرسة و تصنيف النصوص القانونية ' && (
   <div>
     <Link to='/IndexLaw'>
     <div className='py-2 px-2 bg-light_Blue border-Deep_Blue  border-t-2'>
       <h1 className='text-Deep_Blue font-cairo text-right text-xl'>القوانين الاساسية </h1>
     </div>
     </Link>
     <Link to='/IndexJurisprudence'>
     <div className='py-2 px-2 bg-light_Blue border-Deep_Blue border-t-2'>
       <h1 className='text-Deep_Blue font-cairo text-right text-xl'>الاجتهادات القضائية</h1>
     </div>
     </Link>
     <Link to='/IndexNews'>
     <div className='py-2 px-2 bg-light_Blue border-Deep_Blue border-t-2'>
       <h1 className='text-Deep_Blue font-cairo text-right text-xl'> الاخبار</h1>
     </div>
     </Link>
   </div>
 )}
 <Link to='/GestionOffres'>
  <div className='flex flex-row gap-2 py-4 px-2 border-light_Blue border-t-2 justify-end'>
     <h1 className='text-light_Blue font-cairo text-right text-xl' onClick={() => handleColosItemClick()}>ادارة العروض  </h1>
     <MdOutlinePriceChange className='text-light_Blue text-right' size={40}/>
 </div>
 </Link>
</div>
<Link to='/'>
<div className='flex flex-row gap-2 py-4 px-2 border-light_Blue border-y-2 justify-end'>
     <h1 className='text-light_Blue font-cairo text-right text-xl'>الخروج</h1>
     <IoIosLogOut className='text-light_Blue text-right' size={40} />
 </div>
 </Link> */}