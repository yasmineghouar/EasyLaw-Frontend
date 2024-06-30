import React, { useState, useEffect } from 'react';
import LawComponent from './lawComponent';
import Pagination from './Pagination';

export default function LawList({ filteredLaws }) { // Recevez filteredLaws en tant que prop
    const [currentPage, setCurrentPage] = useState(1);
    const lawsPerPage = 10;
    const getCurrentLawsPaginated = () => { 
      const indexOfLastLaw = currentPage * lawsPerPage;
      const indexOfFirstLaw = indexOfLastLaw - lawsPerPage;
      return filteredLaws.slice(indexOfFirstLaw, indexOfLastLaw);
    };
    return (
        <div>
            {filteredLaws.length > 0 &&
                <div className='flex flex-col gap-4 mx-20 my-6'>
                    {/* Affichage des résultats */}
                    <div className='flex flex-row justify-between'>
                        <h1 className='text-Deep_Blue font-cairo text-right'>{filteredLaws.length}: عدد النتائج </h1>
                        <h1 className='text-Deep_Blue text-2xl font-cairo text-right'>نتائج البحث</h1>
                    </div>
                    {getCurrentLawsPaginated().slice(0, lawsPerPage).map((law, index) => (
                        <LawComponent key={index} law={law} index={(currentPage - 1) * lawsPerPage + index + 1} />
                    ))}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(filteredLaws.length / lawsPerPage)}
                        onPageChange={setCurrentPage}
                    />
                </div>
            }
        </div>
    );
}
