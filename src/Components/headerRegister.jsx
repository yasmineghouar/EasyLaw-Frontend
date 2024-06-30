import React, { useState, useEffect } from 'react';
import Profil from '../Images/Profil.png';
import Logo from '../Images/logo.png';
import { FaUser, FaFileInvoice, FaCog } from 'react-icons/fa';
import { LuLogOut } from "react-icons/lu";

import { Link } from 'react-router-dom';

export default function HeaderRegister() {
    const [userInfo, setUserInfo] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    
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

    const handleLogout = () => {
        localStorage.clear(); // Vide le local storage
    };
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div className='bg-Dark_Blue w-full flex flex-col md:flex-row justify-between items-center py-4 px-8'>
            {/* Partie gauche du header */}
            <div className='flex flex-col md:flex-row items-center md:items-start mt-4'>
                {userInfo && (
                    <>
                        <div className='flex flex-col'>
                            <p className='text-my_yellow font-bold font-cairo'>{userInfo.role}</p>
                            <p className='text-Deep_Blue font-cairo'>{userInfo.username}</p>
                        </div>
                        



                        
                        <div className="relative">
                    <img src={Profil} alt="Profil" className='w-12 h-auto rounded-full border-2 border-Deep_Blue' onClick={toggleMenu}/>
                    {showMenu && (
                        <div className="absolute right-0 top-12 bg-my_whitee border border-light_Blue rounded shadow-md mt-2">
                            <ul>
                                <Link to ="/ProfilePage"><li className="py-2 px-4 flex items-center cursor-pointer hover:bg-Deep_Blue">
                                    <FaUser className=" font-cairo " />
                                    ملف شخصي
                                </li></Link>
                                <Link to ="/historiquesFact"><li className="py-2 px-4 flex items-center cursor-pointer hover:bg-Deep_Blue">
                                    <FaFileInvoice className=" font-cairo " />
                                    فواتير
                                </li></Link>
                                {(userInfo.role === 'admin' || userInfo.role === 'moderateur' ) && (
                                <Link to = "/ScrapingTextJuridique"><li className="py-2 px-4 flex items-center cursor-pointer hover:bg-Deep_Blue">
                                    <FaCog className=" font-cairo " />
                                    الادارة
                                </li></Link>)}
                                
                                
                                
                                <Link to="/home" onClick={handleLogout}>
            <li className="py-2 px-4 flex items-center cursor-pointer hover:bg-Deep_Blue">
                <LuLogOut className="font-cairo" />

                خروج
            </li>
        </Link>
                            </ul>
                        </div>
                    )}
                </div>
                    </>
                )}
            </div>
            {/* Partie centrale du header */}
            <div className='text-center md:text-right mb-4 md:mb-0'>
                <p className='text-my_yellow font-cairo text-base md:text-3xl'>
                    مرحبًا بك في نظامنا الذكي للبحث ومراقبة القوانين!
                </p>
            </div>
            {/* Partie droite du header */}
            <div className='flex justify-center md:justify-end'>
                <img src={Logo} alt='Logo' className='w-12 h-auto md:w-20' />
            </div>
        </div>
    );
}
