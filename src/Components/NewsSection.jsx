import React, { useState, useEffect } from 'react';
import NewsBox from './newsBox';
import { IoMdSearch } from "react-icons/io";
import Pagination from './Pagination';

export default function NewsSection() {
    const [newsList, setNewsList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        fetch('http://127.0.0.1:8000/news')
            .then(response => response.json())
            .then(data => setNewsList(data))
            .catch(error => console.error('Error fetching news:', error));
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = newsList.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="flex flex-col justify-between gap-10 my-5">
            <div className='px-5 py-2 mx-10 flex flex-row justify-between w-1/3 inputStyle md:ml-auto'> 
                <input className='font-cairo border-0 outline-none focus:border-0' placeholder='البحث'/>
                <IoMdSearch className='text-Deep_Blue' />
            </div>
            
            {currentItems.map(news => (
                <NewsBox key={news.id} news={news} />
            ))}

            <Pagination 
                currentPage={currentPage} 
                totalPages={Math.ceil(newsList.length / itemsPerPage)} 
                onPageChange={handlePageChange} 
            />
        </div>
    );
}
