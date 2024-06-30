import React, { useState, useRef } from 'react';
import Pagination from './Pagination';
import oeil from '../Images/oeill.png';

export default function Notifications({ notifications }) {
  const notificationsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedNotification, setExpandedNotification] = useState(null);
  const notificationRefs = useRef([]);

  const indexOfLastNotification = currentPage * notificationsPerPage;
  const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;
  const currentNotifications = notifications.slice(indexOfFirstNotification, indexOfLastNotification);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleExpand = (notification, index) => {
    setExpandedNotification(notification === expandedNotification ? null : notification);
    const notificationRef = notificationRefs.current[index];
    if (notificationRef) {
      notificationRef.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <div className="flex flex-col space-y-4">
       <p></p>
      <h1 className="text-2xl font-medium text-Deep_Blue">جميع الإشعارات</h1>
      <div className="flex flex-col gap-4">
        {currentNotifications.map((notification, index) => (
          <div
            key={index}
            ref={(el) => (notificationRefs.current[index] = el)}
            className={`relative rounded-lg bg-gray-100 shadow-md p-4 hover:bg-gray-200 transition-all duration-200 ${
              expandedNotification === notification ? 'border-2 border-blue-500' : ''
            }`}
          >
            <div
              className={`${
                expandedNotification === notification ? 'max-h-[500px]' : 'max-h-[45px]'
              } overflow-hidden transition-all duration-300`}
            >
              <p className="text-lg font-medium text-gray-800">{notification.content}</p>
            </div>
            <button
              className="absolute bottom-2 right-2 focus:outline-none"
              onClick={(e) => {
                e.preventDefault();
                handleExpand(notification, index);
              }}
            >
              <img src={oeil} alt="Voir plus" className="h-6 w-6" />
            </button>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(notifications.length / notificationsPerPage)}
        onPageChange={setCurrentPage}
      />
      <p></p>
    </div>
  );
}