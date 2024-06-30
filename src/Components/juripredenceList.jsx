import React, { useState, useEffect } from 'react'
import JuripredenceComponent from './juripredenceComponent'
import Pagination from './Pagination'
import { IoMdSearch } from "react-icons/io";

export default function JuripredenceList() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; 
    const [qraratMahkama, setQraratMahkama] = useState([]);
    const [qraratMahkamaSearch, setQraratMahkamaSearch] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sujet, setSujet] = useState(''); 
    const [year, setYear] = useState('');
    const [sujets, setSujets] = useState([]);
    const [years, setYears] = useState([]);
    const [domains,setDomains] = useState([]) ;
    const [domain, setDomaine] = useState('');
    
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
    
    const search = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/searchQrar?q=${searchTerm}`);
        const data = await response.json();
        if (Array.isArray(data)) {
          setQraratMahkamaSearch(data);
        } else {
          console.error('Data returned by the API is not in the expected format:', data);
        }
        console.log(qraratMahkamaSearch)
      } catch (error) {
        console.error('Error fetching laws:', error);
      }
    };

    const fetchQraratMahkama = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/qraratwihDetails');
            const data = await response.json();
            if (JSON.stringify(data) !== JSON.stringify(qraratMahkama)) {
              setQraratMahkama(data); // Mettre à jour les données seulement si elles ont changé
              const pages = Math.ceil(data.length / itemsPerPage);
            }
            console.log(qraratMahkama)
        } catch (error) {
            console.error('Erreur lors de la récupération des données : ', error);
        }
    };

    useEffect(() => {
      if (searchTerm !== '') {
        search();
      } else {
      fetchQraratMahkama();      
    }
    }, [searchTerm]);

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    // Calcul de l'index de départ et de fin des éléments à afficher sur la page actuelle
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const [selectedTypeHayaa, setSelectedTypeHayaa] = useState('');
    
    const getCurrentLawsPaginated = () => {
      const currentLaws = searchTerm !== '' ? qraratMahkamaSearch : qraratMahkama;
      let filteredCurrentLaws = currentLaws.filter(law =>
          (sujet ? law.sujetQarar.startsWith(sujet) : true) &&
          (year ? law.dataQarar.toString().includes(year) : true) &&
          (domain ? law.مجال.includes(domain) : true)
      );
      const indexOfLastLaw = currentPage * itemsPerPage;
    const indexOfFirstLaw = indexOfLastLaw - itemsPerPage;
    return filteredCurrentLaws.slice(indexOfFirstLaw, indexOfLastLaw);
  }
  const getCurrentLaws = () => {
    const currentLaws = searchTerm !== '' ? qraratMahkamaSearch : qraratMahkama;
    currentLaws.forEach(law => {
  });

    let filteredCurrentLaws = currentLaws.filter(law =>
        
      (sujet ? law.sujetQarar.startsWith(sujet) : true)&&
      (year ? law.dataQarar.toString().includes(year) : true) &&
      (domain ? law.مجال.includes(domain) : true)

    );
     return filteredCurrentLaws;
}
    const fetchSujets = async () => {
      try {
          const response = await fetch('http://127.0.0.1:8000/sujetsQarar');
          const data = await response.json();
          setSujets(data); // Met à jour la liste des sujets
      } catch (error) {
          console.error('Erreur lors de la récupération des sujets : ', error);
      }
    };

    const fetchdomains = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/interested-domains');
        const data = await response.json();
        console.log(data) ;
        setDomains(data);
      } catch (error) {
        console.error('Error fetching domains options:', error);
      }
    };

    useEffect(() => {
      fetchSujets(); // Appel de la fonction fetchSujets
      fetchdomains() ;
      
    }, []);

    // Fonction pour récupérer les années 
    const fetchYears = async () => {
      try {
          const response = await fetch('http://127.0.0.1:8000/yearsQarar');
          const data = await response.json();
          setYears(data); // Met à jour la liste des années
      } catch (error) {
          console.error('Erreur lors de la récupération des années : ', error);
      }
    };
    
    useEffect(() => {
      fetchYears(); // Appel de la fonction fetchYears
    }, []);

    const handleSujet = (event) => {
      setSujet(event.target.value);
    };

    const handleDomain = (event) => {
     console.log("tired"+event.target.value) ;
      setDomaine(event.target.value);
      console.log("helloooo"+domain) ;
    };

    const handleYear = (event) => {
      setYear(event.target.value);
    };

    const totalLawsCount = searchTerm !== '' ? qraratMahkamaSearch.length : getCurrentLaws().length;
    const totalPages = Math.ceil(totalLawsCount / itemsPerPage); 
    
  return (
    <div>
       <div className='flex flex-col items-center self-center my-20 mx-20 px-5 py-5 bg-my_whitee rounded-md shadow-md border-2 border-Deep_Blue'>

                
                <div className='flex flex-row gap-20 self-end'>
                {/* <div className='flex flex-row gap-2'>
                <select className='border-2 border-light_Blue px-3 py-2 shadow-sm rounded-md font-cairo text-Deep_Blue focus:text-my_yellow focus:bg-light_Blue'
                value={selectedTypeHayaa} onChange={(e) => setSelectedTypeHayaa(e.target.value)}>
                    <option value="">الهيئة</option>
                    <option value="المحكمة العليا">المحكمة العليا</option>
                    <option value="مجلس الدولة">مجلس الدولة</option>
                </select>
                </div> */}
            
            <div className='flex flex-row gap-4'>
            <div className='flex felx-row bg-my_yellow rounded-md shadow-sm pr-2'>
              <select id="lawType" className="font-cairo text-Deep_Blue py-2 bg-transparent  text-right"
                >
                <option value="">ترتيب حسب الزمن </option>
                <option value="مرسوم"> من الاحدث الى الاقدم </option>
                <option value="قرار"> من الاقدم الى الاحدث </option>
                </select>
                {/* <IoFilter /> */}
            </div>
            {/* search bar  */}
            <div className='px-5 py-2  flex flex-row justify-between inputStyle '> 
                  <IoMdSearch className='text-Deep_Blue' />
                  <input className='font-cairo bg-transparent border-0 outline-none focus:border-0' placeholder='البحث'
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
            </div>
            
            </div>
            </div>
                
            
                {/* filter  */}
                <div className='flex flex-wrap-reverse gap-3 self-end my-5'> 
    
    
    
                



<select id="lawType" className="bg-transparent font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
 onChange={handleYear}>
<option value="">سنة الصدور</option>
{years.map((year, index) => (
<option key={index} value={year.year}>{year.year}</option>
))}
</select>

<select id="lawType" className="bg-transparent font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
 onChange={handleSujet}>
<option  value="">الموضوع</option>
{sujets.map((sujet, index) => (
<option key={index} value={sujet.Nomsujet}>{sujet.Nomsujet}</option>
))}
</select>


<select className="bg-transparent font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
 
 onChange={handleDomain}>
<option  value="">:المجال</option>
{domains.map((domain, index1) => (
<option key={index1} value={domain.nom}>{domain.nom}</option>
))}
</select>

    </div>
       </div>

       {(searchTerm || sujet ||  year || domain) && (
    <div className='flex flex-col gap-4 mx-10 my-10'>
        <div className='flex flex-row justify-between'>
        <h1 className='text-Deep_Blue font-cairo text-right'> { getCurrentLaws().length}:عدد النتائج  </h1>
        <h1 className='text-Deep_Blue text-2xl font-cairo text-right'>نتائج البحث</h1>

        </div>    
        <div className='grid grid-cols-7 p-3 bg-light_Blue bg-opacity-40 gap-10'>
        <h1 className=' text-Deep_Blue font-cairo font-bold'> التفاصيل</h1>
        <h1 className=' text-Deep_Blue font-cairo font-bold'> الهيئة</h1>
        <h1 className=' col-span-2 text-Deep_Blue font-cairo font-bold'> المبدا</h1>
        <h1 className=' text-Deep_Blue font-cairo font-bold'> الموضوع</h1>
        <h1 className=' text-Deep_Blue font-cairo font-bold'> تاريخ القرار</h1>
        <h1 className='text-Deep_Blue font-cairo font-bold'>رقم القرار</h1>

        </div>
   
   
    {
   getCurrentLawsPaginated().map((qrar, index) => (
        <JuripredenceComponent key={index} index={index} qrar={qrar} />
    ))}
<Pagination  
currentPage={currentPage} 
totalPages={totalPages} 
onPageChange={handlePageChange} 
/>
    </div>
    
    )}
    </div>
  
  )
}

