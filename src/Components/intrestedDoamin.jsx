import React, { useEffect, useState } from 'react';
import AddDomain from './addDomain';
import AddMotCle from './addMotCle';


export default function InterestedDomain() {
  const [domains, setDomains] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [keywords, setKeywords] = useState([]);
  const [showAddDomainPopup, setShowAddDomainPopup] = useState(false);
  const [showAddMotClePopup, setShowAddMotClePopup] = useState(false);



  useEffect(() => {
    fetch('http://127.0.0.1:8000/interested-domains')
      .then(response => response.json())
      .then(data => setDomains(data))
      .catch(error => console.error('Error fetching domains:', error));
  }, []);

  useEffect(() => {
    if (selectedDomain) {
      fetch(`http://127.0.0.1:8000/interested-domain/${selectedDomain}/mots-cles`)
        .then(response => response.json())
        .then(data => setKeywords(data))
        .catch(error => console.error('Error fetching keywords:', error));
    }
  }, [selectedDomain]);


  const openAddDomainPopup = () => setShowAddDomainPopup(true);
  const closeAddDomainPopup = () => setShowAddDomainPopup(false);

  const openAddMotClePopup = () => setShowAddMotClePopup(true);
  const closeAddMotClePopup = () => setShowAddMotClePopup(false);

  return (
    <div className="flex h-screen">
      {/* Première partie: Liste de mots */}
      {selectedDomain && (
        <div className="w-1/3 p-4 bg-gray-100 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">الكلمات الاساسية</h2>
          <ul>
            {keywords.map(keyword => (
              <li key={keyword.id} className="mb-2">{keyword.nom}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Deuxième partie */}
      <div className={`p-4 flex flex-col ${selectedDomain ? 'w-2/3' : 'w-full'}`}>
        <h2 className="text-xl font-bold mb-4 self-end">مجالات الاهتمام</h2>
        {/* Boutons */}
        <div className="mb-4 flex space-x-4">
        <button className="btn_Bleu text-white px-4 py-2 rounded" onClick={openAddDomainPopup}>إضافة مجال</button>
        <button className="btn_Bleu text-white px-4 py-2 rounded" onClick={openAddMotClePopup}>إضافة كلمة مفتاحية</button>
        </div>

        {/* Liste de boîtes en flex wrap */}
        <div className="flex flex-wrap gap-4">
          {domains.map((domain, index) => (
            <div
              key={domain.id}
              onClick={() => setSelectedDomain(domain.id)}
              className={`w-32 h-32 flex items-center justify-center cursor-pointer ${
                index % 2 === 0 ? 'bg-light_Blue bg-opacity-30' : 'bg-my_yellow bg-opacity-30'
              }`}
            >
              {domain.nom}
            </div>
          ))}
        </div>
      </div>
      {showAddDomainPopup && <div className='fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-50'><AddDomain onClose={closeAddDomainPopup} /></div>}
      {showAddMotClePopup && <div className='fixed inset-0 flex items-center justify-center bg-light_Blue bg-opacity-50'><AddMotCle onClose={closeAddMotClePopup} /></div>}
    </div>
  );
}
