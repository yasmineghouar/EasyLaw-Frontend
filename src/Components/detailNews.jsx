import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function DetailNews() {
    const [newsDetail, setNewsDetail] = useState();
    const { idNews } = useParams(); // Utilisation correcte de useParams

    useEffect(() => {
      console.log(idNews);
      fetch(`http://localhost:8000/news/${idNews}`)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => setNewsDetail(data))
      .catch(error => console.error('Error fetching news detail:', error));
  
    }, [idNews]);

    if (!newsDetail) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col my-10 mx-10">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-full md:w-1/2 pt-5">
                    <h2 className="font-bold text-xl mb-2 text-right text-Deep_Blue">{newsDetail.title}</h2>
                    <p className="text-sm mb-2 text-right text-light_Blue">{newsDetail.date}</p>
                    <p className="text-sm text-right text-Deep_Blue">{newsDetail.resumer}</p>
                </div>
                <div className="flex flex-row w-full md:w-1/2 justify-center">
                    <img src={newsDetail.image} alt="Description de l'image" className="w-2/3 h-auto" />
                </div>
            </div>

            <div className="my-4">
                <p className="text-lg text-right text-Dark_Blue">{newsDetail.detail}</p>
            </div>
        </div>
    );
}
