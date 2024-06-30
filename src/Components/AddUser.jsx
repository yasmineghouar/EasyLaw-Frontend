import React, { useState } from 'react';
import { MdCancelPresentation } from "react-icons/md";

export default function AddUser({ onClose }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
    phoneNumber: ""
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {

    console.log(formData) ;
    fetch('http://127.0.0.1:8000/add-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        setSuccessMessage(data.message);
        setTimeout(() => {
          setSuccessMessage("جيد");
          onClose();
        }, 3000); // Fermer la fenêtre après 3 secondes
      })
      .catch(error => console.error('Error adding user:', error));
  };
  

  return (
    <div className='flex flex-col items-center w-auto md:w-1/4 px-5 py-5 bg-my_whitee rounded-md shadow-md border-2 border-Deep_Blue'>
      <MdCancelPresentation className='text-Deep_Blue self-end cursor-pointer' onClick={onClose} />
      <h1 className='text-2xl font-cairo font-bold text-Deep_Blue mb-5'>اضافة مستخدم</h1>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      <div className='flex flex-col'>
        <div className='flex flex-col mb-3'>
          <label className='text-right text-Deep_Blue font-cairo'>:اسم المستخدم</label>
          <input className='inputStyle w-full px-2 py-1' name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div className='flex flex-col mb-3'>
          <label className='text-right text-Deep_Blue font-cairo'>:الرقم السري</label>
          <input className='inputStyle w-full px-2 py-1' name="password" type="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className='flex flex-col mb-3'>
          <label className='text-right text-Deep_Blue font-cairo'>:البريد الالكتروني</label>
          <input className='inputStyle w-full px-2 py-1' name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className='flex flex-col mb-3'>
          <label className='text-right text-Deep_Blue font-cairo'>:رقم الهاتف</label>
          <input className='inputStyle w-full px-2 py-1' name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div>
        <div className='flex flex-col mb-3'>
          <label className='text-right text-Deep_Blue font-cairo'>:رتبة المستخدم</label>
          <select className='inputStyle w-full px-2 py-1' name="role" value={formData.role} onChange={handleChange}>
            <option value="">اختر الدور</option>
            <option value="admin">مدير</option>
            <option value="moderateur">مشرف</option>
          </select>
        </div>
      </div>
      <button className='btn_Bleu w-full mt-5 mb-2' onClick={handleSubmit}>اضافة</button>
    </div>
  )
}
