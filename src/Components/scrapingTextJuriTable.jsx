import React, { useEffect, useState } from 'react'
import { RiDeleteBin4Line } from "react-icons/ri";
import { MdAppRegistration } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import SmallMenu from './smallMenu' ;
import LancementScraping from './lancementScraping' ;
import HistoriqueScraping from './historiqueScraping' ;

export default function ScrapingTextJuriTable({}) {
    const [showScraping, setShowScraping] = useState(true);
    const [showScrapingHistorique, setShowScrapingHistorique] = useState(false);
   
    const toggleScrapingPopup = () => {
        setShowScraping(true);
        setShowScrapingHistorique(false); 
    };
      
    const toggleMnuPopup = () => {
        setShowScrapingHistorique(true);
        setShowScraping(false);
    };
     
    
    
  return (
    <div className='flex flex-col mt-5'>
        <SmallMenu onclick1={toggleScrapingPopup} onclick2={toggleMnuPopup}  />
        {
    showScraping ? (
           <LancementScraping />
    ) : (  null)
}
{showScrapingHistorique ? (
              <HistoriqueScraping/>
            ) : null}
    </div>
  )
}
