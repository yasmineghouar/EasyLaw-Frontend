import React, { useState } from 'react'
import MenuPrincipal from '../Components/menuPrincipal3'
import Header2 from '../Components/header2'
import UsersTable from '../Components/UsersTable'
import Pagination from '../Components/Pagination'
import AddUser from '../Components/AddUser'
import DeleteConfirm from '../Components/DeleteConfirm'
import { Link } from 'react-router-dom'
import { IoMdSearch } from "react-icons/io"; 

export default function GestionUser() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const totalPages = 10; 

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const toggleDeletePopup = () => {
    setShowDeletePopup(!showDeletePopup); 
  };
  return (
    <div className='flex flex-row bg-my_whitee h-screen bg-opacity-10'>
       <MenuPrincipal/>
       <div className='flex flex-col w-3/4'>
        <Header2 title="ادارة المستخدمين "/>
        <div className='flex self-start mx-5 mt-3'>
         
      <div className='flex flex-row gap-5 mt-5'>
        
        <div className='px-5 py-2 flex flex-row justify-between inputStyle md:ml-auto'>
          <input className='w-full text-right font-cairo border-0 bg-transparent outline-none focus:border-0' placeholder='البحث' />
          <IoMdSearch className='text-Deep_Blue' />
        </div>
        <button className='btn_Bleu' onClick={togglePopup}>اضافة عضو</button> {/* Utilisation de onClick pour définir l'événement de clic */}
       <Link to="/GestionModirateur"><button className='btn_Bleu' >حسابات المشرفين</button></Link> 
      </div>
    </div>
        <UsersTable onClick1={toggleDeletePopup} onClick2={togglePopup}/>
        <Pagination currentPage={currentPage} 
    totalPages={totalPages} 
    onPageChange={handlePageChange} />
       </div>

       {showPopup && <div className="fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-50">
        <AddUser onClose={togglePopup} /> {/* Passer la fonction togglePopup comme prop onClose */}
      </div>}
         {showDeletePopup && <div className="fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-50">
        <DeleteConfirm onClose={toggleDeletePopup} /> {/* Passer la fonction togglePopup comme prop onClose */}
        </div>}    
 
    </div>
  )
}
