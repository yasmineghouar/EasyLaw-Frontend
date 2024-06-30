import React, { useEffect, useState } from 'react'
import { MdNavigateNext } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { MdCancelPresentation } from "react-icons/md";
import LawList from './lawList';

export default function FilterLaw() {
    
  const [laws, setLaws] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [wizara, setWizara] = useState(null);
  const [domain, setDomain] = useState(null);
  const [type, setType] = useState(null);
  const [num_jarida, setNum_jarida] = useState('');
  const [annee_jarida, setAnnee_jarida] = useState('');
  const [filteredLaws, setFilteredLaws] = useState([]); // État pour les résultats de recherche
  const [wizaraOptions, setWizaraOptions] = useState([]);
  const [DomainsOptions, setDomainsOptions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const lawsPerPage = 10;

  // Fonction pour récupérer les lois depuis l'API
  const fetchLaws = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/laws');
      const data = await response.json();
      setLaws(data);
    } catch (error) {
      console.error('Error fetching laws:', error);
    }
  };

  const fetchWizaraOptions = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/laws/wizara');
      const data = await response.json();
      setWizaraOptions(data);
    } catch (error) {
      console.error('Error fetching wizara options:', error);
    }
  };
  const fetchDomainOptions = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/interested-domains');
      const data = await response.json();
      setDomainsOptions(data);
    } catch (error) {
      console.error('Error fetching domains options:', error);
    }
  };

  const search = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/search?q=${searchTerm}`);
      const data = await response.json();
      console.log(data) ;
      if (Array.isArray(data)) {
        let filteredCurrentLaws = data.filter(law =>
          (wizara ? law.wizara.startsWith(wizara) : true) &&
          (domain ? law.مجال.includes(domain) : true) &&
          (type ? law.type.startsWith(type) : true) &&
          (annee_jarida ? law.date_jarida.includes(annee_jarida) : true) &&
          (num_jarida ? law.num_jarida.toString().includes(num_jarida) : true)
        );

        setFilteredLaws(filteredCurrentLaws);

      } else {
        console.error('Data returned by the API is not in the expected format:', data);
      }
    } catch (error) {
      console.error('Error fetching laws:', error);
    }
  };
  
  
  useEffect(() => {   
    fetchLaws();
    fetchWizaraOptions() ;
    fetchDomainOptions() ;
  },[]);


  const getCurrentLaws = () => {

    const currentLaws = searchTerm !== '' ? filteredLaws : laws;
    let filteredCurrentLaws = currentLaws.filter(law =>
      (wizara ? law.wizara.startsWith(wizara) : true) &&
      (domain ? law.مجال.includes(domain) : true) &&
      (type ? law.type.startsWith(type) : true) &&
      (annee_jarida ? law.date_jarida.includes(annee_jarida) : true) &&
      (num_jarida ? law.num_jarida.toString().includes(num_jarida) : true)
    );
    setFilteredLaws(filteredCurrentLaws);
    // return filteredCurrentLaws;
  };

  const totalPages = Math.ceil(filteredLaws.length / lawsPerPage); // Utiliser le bon état pour obtenir le nombre total de pages
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleWizaraChange = (e) => {
    setWizara(e.target.value);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  const handleAnneeJaridaChange = (e) => {
    setAnnee_jarida(e.target.value);
  };
  const handleNumJaridaChange = (e) => {
    setNum_jarida(e.target.value);
  };

  
  const handleShowResults = () => {
    if (searchTerm) {
        search();
        getCurrentLaws();
    } else {
        getCurrentLaws();
    }
    // setSearchTerm("");
    setCurrentPage(1);
    setShowPopup(false);
};

const handleDomainChange = (e) => {
  setDomain(e.target.value);
};


  return (
    // <div className="fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-50">
    <div>
    <div className='flex flex-col items-center self-center my-20 mx-20 px-5 py-5 bg-my_whitee rounded-md shadow-md border-2 border-Deep_Blue'>
    <MdCancelPresentation className='mb-5 text-Deep_Blue self-end' onClick={() => setShowPopup(false)}/>
    <h1 className='text-2xl  font-cairo font-bold text-Deep_Blue mb-5'>يرجى إدخال معايير البحث </h1>
      <div className='flex flex-row justify-between bg-my_whitee  inputStyle md:ml-auto'>
        <input
          className='px-5 py-2 '
          placeholder='البحث'
          value={searchTerm}
          onChange={handleSearchChange}
       
       /> <IoMdSearch className='absolute top-1 right-2 text-Deep_Blue' />
       
      </div>

              {/* filter  */}
              {/* <h1 className='text-Deep_Blue text-2xl font-cairo text-right mt-4 mb-2'>الفرز</h1> */}
              <div className='flex flex-wrap gap-4 self-end mb-5'>
              <div className='flex flex-col'>
               <label htmlFor="lawType" className="font-cairo text-Dark_Blue text-base  text-right">
      سنة الجريدة الرسمية
               </label>
            <input
              id="lawType"
              type="number"
              className="font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
              value={annee_jarida}
              onChange={handleAnneeJaridaChange}
            />
           </div>
               <div className='flex flex-col'>
               <label htmlFor="lawType" className="font-cairo text-Dark_Blue text-base  text-right">
      رقم الجريدة الرسمية
               </label>
            <input
              id="lawType"
              type="number"
              className="font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
              value={num_jarida}
              onChange={handleNumJaridaChange}
           />
           </div>
           <div className='flex flex-col'>
            <label htmlFor="lawType" className="font-cairo text-Dark_Blue text-base text-right">
              المجال
            </label>
            <select
              id="lawType"
              className="font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
              value={domain}
              onChange={handleDomainChange}
            >
              <option value="">اختر المجال</option>
              {DomainsOptions.map((option, index) => (
                <option key={index} value={option.nom}>{option.nom}</option>
              ))}
            </select>
          </div>
           <div className='flex flex-col'>
               <label htmlFor="lawType" className="font-cairo text-Dark_Blue text-base text-right">
              الوزارة
               </label>
              <select id="lawType" className="font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
            value={wizara}
            onChange={handleWizaraChange}
           >
              <option value="">اختر الوزارة</option>
           
        {wizaraOptions.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
            </select>
            
               </div>
           <div className='flex flex-col'>
               <label htmlFor="lawType" className="font-cairo text-Dark_Blue text-base text-right">
                 نوع القانون:
               </label>
              <select id="lawType" className="font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
              value={type}
              onChange={handleTypeChange}
             >
              <option value="">اختر النوع</option>
              <option value="مرسوم">مرسوم</option>
              <option value="قرار">قرار</option>
              <option value="أمر">أمر</option>
              <option value="تصريح">تصريح</option>
              <option value="تقرير">تقرير</option>
            </select>
               </div>
           </div>
          
    <button className='btn_Bleu w-1/2  mt-5 mb-2' onClick={handleShowResults} >اظهار النتائج</button>
    </div>
    {(searchTerm || wizara ||  type || num_jarida || annee_jarida || domain) && (
        <LawList filteredLaws={filteredLaws} />
    )}
    </div>
)
}
