import React, { useState, useEffect } from 'react';

export default function SmallMenu({ onclick1, onclick2 }) {
    const [activeItem, setActiveItem] = useState('التجريف');

    const handleClick = (item) => {
        setActiveItem(item);
    };

    useEffect(() => {
        onclick1();
    }, []); 
    return (
        <div className="bg-light_Blue py-2 mb-8 bg-opacity-20">
            <div className="max-w-3xl mx-auto flex justify-between">
                <button
                    className={`py-2 px-4 font-semibold focus:outline-none ${
                        activeItem === 'جدول الاعمال' ? 'border-b-2 border-Deep_Blue text-Deep_Blue' : ''
                    }`}
                    onClick={() => { 
                        onclick2();
                        handleClick('جدول الاعمال');
                    }}
                >
                    جدول الاعمال
                </button>
                <button
                    className={`mr-4 py-2 px-4 font-semibold focus:outline-none  ${
                        activeItem === 'التجريف' ? 'border-b-2 border-Deep_Blue text-Deep_Blue' : ''
                    }`}
                    onClick={() => {
                        onclick1();
                        handleClick('التجريف ');
                    }}
                >
                    التجريف 
                </button>
            </div>
        </div>
    );
}
