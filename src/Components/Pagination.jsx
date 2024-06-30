import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center my-5">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 mx-1 bg-light_Blue rounded-md text-sm"
      >
        الصفحة السابقة
      </button>
      <span className="px-3 py-1 bg-light_Blue rounded-md text-sm">
        {currentPage}/{totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 mx-1 bg-light_Blue rounded-md text-sm"
      >
        الصفحة التالية
      </button>
    </div>
  );
};

export default Pagination;
