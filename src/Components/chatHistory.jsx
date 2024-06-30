import React from 'react';

// Composant réutilisable pour afficher une liste de messages
const MessageList = ({ messages }) => (
  <div className="flex flex-col gap-2 m-2">
    {messages.map((message, index) => (
      <div key={index} className="w-full p-2 rounded-md border-2 border-light_Blue shadow-md">
        <p>{message}</p>
      </div>
    ))}
  </div>
);

// Composant principal du chatbot
const Chatbot = () => {
  // Exemple de messages pour chaque section
  const messagesBySection = {
    "منذ يومين": ["المادة 10 من القانون الجزائري", "المادة 10 من القانون الجزائري", "المادة 10 من القانون الجزائري"],
    "الاسبوع الماضي": ["المادة 10 من القانون الجزائري", "المادة 10 من القانون الجزائري", "المادة 10 من القانون الجزائري"],
    "فبراير": ["المادة 10 من القانون الجزائري", "المادة 10 من القانون الجزائري", "المادة 10 من القانون الجزائري"],
    "جانفي": ["المادة 10 من القانون الجزائري", "المادة 10 من القانون الجزائري", "المادة 10 من القانون الجزائري"],
  };

  return (
    <div className="absolute right-0 w-1/4 h-screen flex flex-col gap-3 px-4 bg-my_whitee shadow-md">
      <button className="font-cairo text-2xl text-Deep_Blue rounded-md border-2 border-light_Blue px-2 py-1 shadow-md mt-2">
        محادثة جديدة + 
      </button>
      <div className="overflow-y-auto scroll-mt-2" style={{ scrollbarWidth: 'none',
  '-ms-overflow-style': 'none', /* IE and Edge */
  'scrollbar-width': 'none' /* Firefox */
 }}>
        {Object.entries(messagesBySection).map(([section, messages]) => (
          <div key={section}>
            <h1 className="text-Deep_Blue font-cairo text-right">{section}</h1>
            <MessageList messages={messages} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatbot;
