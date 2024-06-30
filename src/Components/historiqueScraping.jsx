import React, { useEffect, useState } from 'react';
import { IoMdArrowBack } from "react-icons/io";

export default function HistoriqueScraping() {
    const [data, setData] = useState([]);
    const [lawsData, setLawsData] = useState([]);
    const [juripredenceData, setJuripredenceData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentPageLaws, setCurrentPageLaws] = useState(1);
    const [currentPageJuris, setCurrentPageJuris] = useState(1);
    const [itemsPerPage] = useState(5); // Nombre d'éléments par page

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (selectedDate) {
                    const responseLaws = await fetch(`http://127.0.0.1:8000/laws/updated-at?datetime=${selectedDate}`);
                    const newLawsData = await responseLaws.json();
                    setLawsData(newLawsData);

                    const responseJuris = await fetch(`http://127.0.0.1:8000/qrars/updated-at?datetime=${selectedDate}`);
                    const newJurisData = await responseJuris.json();
                    setJuripredenceData(newJurisData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [selectedDate]);

    const handleDateClick = (date) => {
        setJuripredenceData([]);
        const formattedDateStr = formatDate(date);
        setSelectedDate(formattedDateStr);
    };

    const handleDateClick2 = (date) => {
        setLawsData([]);
        const formattedDateStr = formatDate(date);
        setSelectedDate(formattedDateStr);
    };
    const handleBack = () =>{
        setLawsData([]);
        setJuripredenceData([]);
    }
    const formatDate = (date) => {
        const dateObj = new Date(Date.parse(date));
        const year = dateObj.getUTCFullYear();
        const month = ("0" + (dateObj.getUTCMonth() + 1)).slice(-2);
        const day = ("0" + dateObj.getUTCDate()).slice(-2);
        const hours = ("0" + dateObj.getUTCHours()).slice(-2);
        const minutes = ("0" + dateObj.getUTCMinutes()).slice(-2);
        const seconds = ("0" + dateObj.getUTCSeconds()).slice(-2);
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };

    useEffect(() => {
        fetch('http://127.0.0.1:8000/scraping-info-history')
            .then(response => response.json())
            .then(data => {
                const filteredData = data.map(row => ({
                    action: row.action,
                    service: row.service,
                    updated_at: row.updated_at,
                    updated_by: row.updated_by
                }));
                setData(filteredData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const paginate = (pageNumber, type) => {
        if (type === 'laws') {
            setCurrentPageLaws(pageNumber);
        } else {
            setCurrentPageJuris(pageNumber);
        }
    };

    const renderTableRows = () => (
        data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-light_Blue bg-opacity-30' : 'bg-my_yellow bg-opacity-30'}>
                <td className="px-6 py-4 whitespace-nowrap">{row.service}</td>
                <td 
                    className="px-6 py-4 whitespace-nowrap" 
                    onClick={() => row.service === 'قوانين الجريدة الرسمية' ? handleDateClick(row.updated_at) : row.service === 'اجتهادات قضائية' ? handleDateClick2(row.updated_at) : null}
                >
                    {row.updated_at}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{row.updated_by}</td>
                <td className="px-6 py-4 whitespace-nowrap"><button className='btn_Bleu'
                onClick={() => row.service === 'قوانين الجريدة الرسمية' ? handleDateClick(row.updated_at) : row.service === 'اجتهادات قضائية' ? handleDateClick2(row.updated_at) : null}
                >عرض القائمة</button></td>

            </tr>
        ))
    );

    const renderPagination = (type) => {
        const currentPage = type === 'laws' ? currentPageLaws : currentPageJuris;
        const dataLength = type === 'laws' ? lawsData.length : juripredenceData.length;
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = type === 'laws' ? lawsData.slice(indexOfFirstItem, indexOfLastItem) : juripredenceData.slice(indexOfFirstItem, indexOfLastItem);

        return (
            <div>
                <IoMdArrowBack    onClick={() => handleBack()} size={30} className='text-Deep_Blue mb-5' />
                {currentItems.map((item, index) => (
                    <div key={index} className={`p-4 ${index % 2 === 0 ? 'bg-light_Blue' : 'bg-my_yellow'} bg-opacity-30 mb-2`}>
                        <div className="font-medium text-gray-500 uppercase tracking-wider">:موضوع النص القانوني</div>
                        <div className="whitespace-nowrap overflow-hidden overflow-ellipsis">{item.sujet || item.principe}</div>
                        <div className="font-medium text-gray-500 uppercase tracking-wider mt-2">:مصنف ضمن مجال</div>
                        <div className="whitespace-nowrap overflow-hidden overflow-ellipsis">{item.مجال}</div>
                    </div>
                ))}
                <div className="flex justify-center my-4">
                    <button
                        onClick={() => paginate(currentPage - 1, type)}
                        disabled={currentPage === 1}
                        className="mx-2 px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                    >
                        Précédent
                    </button>
                    <button
                        onClick={() => paginate(currentPage + 1, type)}
                        disabled={indexOfLastItem >= dataLength}
                        className="mx-2 px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                    >
                        Suivant
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="mx-10">
            {lawsData.length === 0 && juripredenceData.length === 0 && (
                <table className="table-auto min-w-full divide-y divide-Dark_Blue">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">خدمة</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">تاريخ</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">المشرف</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>

                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {renderTableRows()}
                    </tbody>
                </table>
            )}

            {lawsData.length > 0 && renderPagination('laws')}
            {juripredenceData.length > 0 && renderPagination('juris')}
        </div>
    );
}

