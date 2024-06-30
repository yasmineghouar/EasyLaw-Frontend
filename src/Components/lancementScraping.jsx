import React, { useState, useEffect } from 'react';
import { CircleLoader } from 'react-spinners';

export default function LancementScraping() {
    const [date, setDate] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState(null);
    const [scraping, setScraping] = useState(false); // Nouvelle variable d'état
    const [scrapingData, setScrapingData] = useState([]);
    const [scrapingJuripredence, setScrapingJuripredence] = useState(false); // Nouvelle variable d'état
    const [message , setMessage] = useState("")

    const getCurrentDate = () => {
        const today = new Date();
        // console.log(today)
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const getCurrentDateTime = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        const hours = String(today.getHours()).padStart(2, '0');
        const minutes = String(today.getMinutes()).padStart(2, '0');
        const seconds = String(today.getSeconds()).padStart(2, '0');
        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    };
    
    
    const getCurrentDate2 = () => {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1; // Les mois sont indexés à partir de 0
        const year = today.getFullYear();
        return `${day}/${month}/${year}`;
    };
    const handleButtonClick = async (service) => {
        try {
            if(service =="laws"){
                const lawService = scrapingData.find(item => item.service === 'laws');
                const datedebut = lawService ? lawService.lastDate : '';
                const formattedDateDebut = datedebut ? `${datedebut.slice(8, 10)}/${datedebut.slice(5, 7)}/${datedebut.slice(0, 4)}` : '';
    
                const dateEnd = getCurrentDate();
                    await fetch(`http://127.0.0.1:8000/scrape?datedebut=${formattedDateDebut}&dateEnd=${dateEnd}`);
                    setScraping(true); // Déclencher la vérification continue
                    setShowPopup(true);
                    setPopupContent(
                        <div className="flex flex-col items-center w-auto md:w-1/3 px-5 py-5 bg-my_whitee rounded-md shadow-md border-2 border-Deep_Blue">
                            {/* <CircleLoader color="#00BFFF" height={80} width={80} /> */}
                            
                            <div className="flex justify-center">
                                <div className="loader border-t-4 border-b-4 border-Deep_Blue rounded-full w-16 h-16 animate-spin mr-4"></div>
                            </div>
                            <button className='btn_Bleu mt-4 mr-2' onClick={() => StopScraping()}>الغاء</button>
                        </div>
                    );
            }else if (service == "juripredence"){
                const juripredenceService = scrapingData.find(item => item.service === 'juripredence');
                const datedebut = juripredenceService ? juripredenceService.lastDate : '';
                
                const formattedDateDebut = datedebut ? 
        `${parseInt(datedebut.slice(8, 10), 10)}/${parseInt(datedebut.slice(5, 7), 10)}/${datedebut.slice(0, 4)}` 
        : '';
            console.log(formattedDateDebut);
    
                const dateEnd = getCurrentDate2();
                console.log(dateEnd)

                    await fetch(`http://127.0.0.1:8000/scraping-juri-majliss?datedebut=${formattedDateDebut}&dateEnd=${dateEnd}`);
                    setScrapingJuripredence(true); // Déclencher la vérification continue
                    setShowPopup(true);
                    setPopupContent(
                        <div className="flex flex-col items-center w-auto md:w-1/3 px-5 py-5 bg-my_whitee rounded-md shadow-md border-2 border-Deep_Blue">
                            <div className="flex justify-center">
                                <div className="loader border-t-4 border-b-4 border-Deep_Blue rounded-full w-16 h-16 animate-spin mr-4"></div>
                            </div>
                            <button className='btn_Bleu mt-4 mr-2' onClick={() => StopScraping2()}>الغاء</button>
                        </div>
                    );
            }  
        } catch (error) {
            console.error('Error:', error);
            alert("Une erreur s'est produite lors de la requête.");
        }
    };
    const handleButtonClick2 = async (service) => {
        try {
            if (service === "laws") {
                const response = await fetch("http://127.0.0.1:8000/update-majal");
                const data = await response.json();
                console.log(data)
                setMessage(data.message || "Opération réussie");
            }
            if (service === "juripredence") {
                const response = await fetch("http://127.0.0.1:8000/indexation-qrar-domain");
                const data = await response.json();
                console.log(data)
                setMessage(data.message || "Opération réussie");
            }
            
        } catch (error) {
            console.error('Error:', error);
            setMessage("Une erreur s'est produite lors de la mise à jour.");
        }
    };

    useEffect(() => {
        const fetchScrapingData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/scraping-info');
                const data = await response.json();
                setScrapingData(data);
            } catch (error) {
                console.error('Error fetching scraping info:', error);
            }
        };
        fetchScrapingData();
    }, []);

    useEffect(() => {
        let intervalId;
        if (scraping) {
            intervalId = setInterval(async () => {
                try {
                    const statusResponse = await fetch('http://127.0.0.1:8000/scrape_status');
                    const statusData = await statusResponse.json();
    
                    if (statusData.status.includes('Script de scraping terminé')) {
                        await fetch('http://127.0.0.1:8000/process');
                        const possibleScrapingResponse = await fetch('http://127.0.0.1:8000/check_file_empty');
                        const possibleScrapingData = await possibleScrapingResponse.json();
    
                        if (possibleScrapingData.message === "The file is empty") {
                            alert("لا يوجد قانون");
                            setScraping(false);
                            setShowPopup(false);
                            clearInterval(intervalId);
                        } else if (possibleScrapingData.message === "The file is not empty") {
                            setPopupContent(
                                <div className='flex flex-col items-center w-auto md:w-1/3 px-5 py-5 bg-my_whitee rounded-md shadow-md border-2 border-Deep_Blue'>
                                    <div className='flex flex-row gap-4'>
                                        <button className='btn_Bleu' onClick={() => handlePopupButtonClick('action1')}>الغاء</button>
                                        <button className='btn_Bleu' onClick={() => handlePopupButtonClick('action3')}>تاكيد</button>
                                    </div>
                                </div>
                            );
                            setScraping(false); 
                            clearInterval(intervalId);
                        }
                    }
                } catch (error) {
                    console.error('Error fetching scraping status:', error);
                    setScraping(false);
                    clearInterval(intervalId);
                }
            }, 5000); 
        }
    
        return () => clearInterval(intervalId); 
    }, [scraping]);
    
    useEffect(() => {
        let intervalId;
        if (scrapingJuripredence) {
            intervalId = setInterval(async () => {
                try {
                    const statusResponse = await fetch('http://127.0.0.1:8000/scrapeJuripredence_status');
                    const statusData = await statusResponse.json();
    
                    if (statusData.status.includes('no more pages')) {
                        alert("لا يوجد اجتهاد قضائي ");
                        setScrapingJuripredence(false);
                        setShowPopup(false);
                        clearInterval(intervalId); 
                    }
                    if (statusData.status.includes('while waiting for the next page to load')){
                            setPopupContent(
                                <div className='flex flex-col items-center w-auto md:w-1/3 px-5 py-5 bg-my_whitee rounded-md shadow-md border-2 border-Deep_Blue'>
                                    <div className='flex flex-row gap-4'>
                                        <button className='btn_Bleu' onClick={() => handlePopupButtonClick2('action1')}>الغاء</button>
                                        <button className='btn_Bleu' onClick={() => handlePopupButtonClick2('action3')}>تاكيد</button>
                                    </div>
                                </div>
                            );
                            setScrapingJuripredence(false); 
                            clearInterval(intervalId);
                    }
                       
                   
                } catch (error) {
                    console.error('Error fetching scraping status:', error);
                    setScraping(false);
                    clearInterval(intervalId);
                }
            }, 5000); 
        }
    
        return () => clearInterval(intervalId); 
    }, [scrapingJuripredence]);
    

    const updateScrapingInfo = async (scrapingInfoId, lastDate) => {
        try {
            console.log("MylastHope:"+lastDate)
            const response = await fetch(`http://127.0.0.1:8000/scraping-info/${scrapingInfoId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ lastDate })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error updating scraping info:', error);
            throw error;
        }
    };
    
    const handlePopupButtonClick = async (action) => {
        
            if (action === 'action3') {
                await fetch('http://127.0.0.1:8000/confirmScraping', { method: 'GET' });
                
                const dateEnd = getCurrentDateTime();
                await updateScrapingInfo(1, dateEnd ,"system");

            }else if (action === 'action1'){
                await fetch(' http://127.0.0.1:8000/cancelScraping', { method: 'GET' });
            }
        
        setShowPopup(false);
    };
    
    const handlePopupButtonClick2 = async (action) => {
        
        if (action === 'action3') {
            await fetch('http://127.0.0.1:8000/validerScraping', { method: 'GET' });
            
            const dateEnd = getCurrentDateTime();
            console.log("dateScrapIjthed"+dateEnd)
            await updateScrapingInfo(2, dateEnd ,"system");

        }
    setShowPopup(false);
};


    const StopScraping = async () => {
        try {
            setScraping(false);
            setShowPopup(false);
        } catch (error) {
            console.error('Error:', error);
            alert("Une erreur s'est produite lors de la requête pour annuler le scraping.");
        }
    };

    const StopScraping2 = async () => {
        try {
            setScrapingJuripredence(false);
            setShowPopup(false);
        } catch (error) {
            console.error('Error:', error);
            alert("Une erreur s'est produite lors de la requête pour annuler le scraping.");
        }
    };


    const handleRadioChange = (e, id) => {
        // Handle radio button change logic
        const updatedData = scrapingData.map(item => 
            item.id === id ? { ...item, autoScraping: e.target.value === 'on' } : item
        );
        setScrapingData(updatedData);
    };

    const renderScrapingSection = (info) => {
        let bgColor;
        let buttonText1;
        let buttonText2;
        switch (info.service) {
            case 'laws':
                bgColor = 'bg-light_Blue';
                buttonText1 = 'تجريف قوانين الجريدة الرسمية';
                buttonText2 = 'فهرسة قوانين الجريدة الرسمية';

                break;
            case 'juripredence':
                bgColor = 'bg-my_yellow';
                buttonText1 = 'تجريف الاجتهادات القضائية';
                buttonText2 = 'فهرسة الاجتهادات القضائية';
                break;
            case 'documents':
                bgColor = 'bg-Dark_Blue';
                buttonText1 = 'تجريف الوثائق و الصور';
                buttonText2 = 'فهرسة الوثائق و الصور';
                break;
            default:
                bgColor = 'bg-gray-200';
                buttonText1 = '';

        }

        return (
           
                <div key={info.id} className={`flex flex-col gap-4 items-center rounded-md shadow-md p-5 ${bgColor} bg-opacity-40`}>
                <button className="btn_Bleu" onClick={() => handleButtonClick(info.service)}>
                    {buttonText1}
                </button>
                <button className="btn_Bleu" onClick={() => handleButtonClick2(info.service)}>
                    {buttonText2}
                </button>
                <div className='flex flex-row'>
                    {/* <div className='flex flex-row gap-3'>
                        <div className='flex flex-row gap-1'>
                            <input
                                type="radio"
                                name={`radio${info.id}`}
                                value="on"
                                checked={info.autoScraping}
                                onChange={(e) => handleRadioChange(e, info.id)}
                            />
                            <label htmlFor="on">On</label>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <input
                                type="radio"
                                name={`radio${info.id}`}
                                value="off"
                                checked={!info.autoScraping}
                                onChange={(e) => handleRadioChange(e, info.id)}
                            />
                            <label htmlFor="off">Off</label>
                        </div>
                        <h1 className='font-cairo text-Deep_Blue font-bold'>:الفهرسة الالية</h1>
                    </div> */}
                </div>
                <div className='flex flex-row gap-1'>
                    <h1 className='font-cairo text-Dark_Blue '>{info.lastDate}</h1>
                    <h1 className='font-cairo text-Deep_Blue font-bold'>:تاريخ اخر فهرسة</h1>
                </div>
                {showPopup && (
                    <div className="fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-30">
                        {popupContent}
                    </div>
                )}
            </div>
           
          
        );
    };

    return (
        <div>
        <h1 className='font-cairo text-green-600'>{message}</h1>

        <div className="flex flex-row justify-around">
            {scrapingData.map(info => renderScrapingSection(info))}
        </div>
        
        </div>
    );
}




