import React, { useState } from 'react'
import MenuPrincipal from '../Components/menuPrincipal3'
import Header2 from '../Components/header2'
import IndexedJuriTable from '../Components/indexedJuriTable'
import Pagination from '../Components/Pagination'
import DeleteConfirm from '../Components/DeleteConfirm'

export default function IndexJurisprudence() {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; 

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
 
  const toggleDeletePopup = () => {
    setShowDeletePopup(!showDeletePopup);
  };

  return (
<div className='flex flex-row bg-my_whitee h-screen bg-opacity-10 '>
    <MenuPrincipal/>
    <div className='flex flex-col w-3/4'>
     <Header2 title="فهرسة و تصنيف الاجتهادات القضائية "/>
     <div className=' h-screen'>
     <IndexedJuriTable onClick1={toggleDeletePopup} />
     <Pagination currentPage={currentPage} 
       totalPages={totalPages} 
       onPageChange={handlePageChange} />
     </div>
    </div>
    {showDeletePopup && <div className="fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-50">
        <DeleteConfirm onClose={toggleDeletePopup} /> {/* Passer la fonction togglePopup comme prop onClose */}
    </div>}  
 </div>
  )
}
