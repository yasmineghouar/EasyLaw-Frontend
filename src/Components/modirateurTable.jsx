import React, { useState, useEffect } from 'react';

export default function ModeratorsList() {
  const [moderators, setModerators] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/moderators')
      .then(response => response.json())
      .then(data => setModerators(data.moderators))
      .catch(error => console.error('Error fetching moderators:', error));
  }, []);
  const deleteUser = (userId) => {
    fetch(`http://localhost:8000/delete-user/${userId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(userId);
        
        setMessage('تم حذف حساب المستخدم بنجاح');
        setTimeout(() => {
          setMessage('');
        }, 5000);
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  const validateUser = (userId) => {
    fetch(`http://localhost:8000/validate-user/${userId}`, {
      method: 'PUT'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMessage('تم تفعيل حساب المستخدم بنجاح');
        setTimeout(() => {
          setMessage('');
        }, 5000);
      })
      .catch(error => console.error('Error validating user:', error));
  };

  return (
    <div className="mt-10 flex justify-center">
       {message && (
        <div className="fixed top-20 right-96 bg-green-500 px-4 py-2 rounded-lg">
          <p className="text-white">{message}</p>
        </div>
      )}
      <table className="w-full max-w-4xl">
        <thead>
          <tr className="bg-transparent border-2 border-light_Blue rounded-t-lg text-Deep_Blue font-bold">
            <th className="py-2 px-4">تعديل</th>
            <th className="py-2 px-4">رقم الهاتف</th>
            <th className="py-2 px-4">البريد الالكتروني</th>
            <th className="py-2 px-4">اسم المستخدم</th>
          </tr>
        </thead>
        <tbody> 
          {moderators.map(moderator => (
            <tr key={moderator.id} className={`border-2 border-light_Blue p-4 ${moderator.deleted ? 'text-gray-500' : ''}`}>
               <td className='py-2 flex flex-row justify-center'>
                {moderator.deleted ? (
                <button className='text-Dark_Blue  w-30 rounded-md shadow-sm px-2 py-1 bg-light_Blue' onClick={() => validateUser(moderator.id)}>تاكيد</button>

                ) : (
                  <button className='text-Dark_Blue  w-30 rounded-md shadow-sm px-2 py-1 bg-my_yellow' onClick={() => deleteUser(moderator.id)}>حذف</button>
                )}
              </td>
              <td className='py-2'>{moderator.phoneNumber}</td>
              <td className='py-2'>{moderator.email}</td>
              <td className='py-2'>{moderator.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
