import React from 'react';
import { Link } from 'react-router-dom';

export default function NewsBox({ news }) {
    return (
        <Link key={news.id} to={`/News/DetailNews/${news.idNews}`}>
            <div className="flex flex-row gap-5 mx-10 border-2 border-light_Blue rounded-md shadow-md md:flex-row items-end justify-end">
                {/* Première partie avec l'image */}
                <div className="font-cairo md:w-2/3 md:pl-4 text-right">
                    <h2 className="font-bold text-xl mb-2 text-Dark_Blue">{news.title}</h2>
                    <p className="text-sm mb-2 text-Deep_Blue">{news.date}</p>
                    <p className="text-sm">{news.resumer}</p>
                </div>
                {/* Deuxième partie avec le titre, la date et le texte */}
                <div className="md:w-1/5">
                    <img src={news.image} alt="Description de l'image" className="w-full h-auto" />
                </div>
            </div>
        </Link>
    );
}
