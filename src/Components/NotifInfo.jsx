import React, { useState } from 'react';

export default function NotifInfo({ userData, onChange }) {
  const [hiddenInterests, setHiddenInterests] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const toggleInterest = (interest) => {
    if (hiddenInterests.includes(interest)) {
      setHiddenInterests(hiddenInterests.filter(item => item !== interest));
    } else {
      setHiddenInterests([...hiddenInterests, interest]);
    }
  };

  const toggleSubscription = () => {
    setIsSubscribed(!isSubscribed);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ici, vous pouvez ajouter la logique pour soumettre les données au backend
  };

  return (
    <div className="user-info p-4 w-full">
      <h1 className="text-3xl font-bold mb-2 text-right text-Deep_Blue">إدارة الملف الشخصي</h1>
      <h2 className="text-2xl font-semibold text-right text-light_Blue mb-4 mr-4">: معلومات عن الإشعارات</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4 rtl">
          <p className="text-right text-lg mb-2 mr-20">:إختر مجالاتك المفضلة</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center flex-row-reverse border border-gray-300 rounded-md px-3 py-2">
              <label htmlFor="criminalLaw" className="cursor-pointer mr-2">القانون الجنائي</label>
              <input
                type="checkbox"
                name="criminalLaw"
                onChange={() => toggleInterest('القانون الجنائي')}
                checked={!hiddenInterests.includes('القانون الجنائي')}
                className="form-checkbox h-5 w-5 text-Deep_Blue rounded focus:ring-Deep_Blue checked:bg-Deep_Blue"
              />
            </div>
            <div className="flex items-center flex-row-reverse border border-gray-300 rounded-md px-3 py-2">
              <label htmlFor="commercialLaw" className="cursor-pointer mr-2">القانون التجاري</label>
              <input
                type="checkbox"
                name="commercialLaw"
                onChange={() => toggleInterest('القانون التجاري')}
                checked={!hiddenInterests.includes('القانون التجاري')}
                className="form-checkbox h-5 w-5 text-Deep_Blue rounded focus:ring-Deep_Blue checked:bg-Deep_Blue"
              />
            </div>
            <div className="flex items-center flex-row-reverse border border-gray-300 rounded-md px-3 py-2">
              <label htmlFor="laborLaw" className="cursor-pointer mr-2">القانون العمال</label>
              <input
                type="checkbox"
                name="laborLaw"
                onChange={() => toggleInterest('القانون العمال')}
                checked={!hiddenInterests.includes('القانون العمال')}
                className="form-checkbox h-5 w-5 text-Deep_Blue rounded focus:ring-Deep_Blue checked:bg-Deep_Blue"
              />
            </div>
            <div className="flex items-center flex-row-reverse border border-gray-300 rounded-md px-3 py-2">
              <label htmlFor="constitutionalLaw" className="cursor-pointer mr-2">القانون الدستوري</label>
              <input
                type="checkbox"
                name="constitutionalLaw"
                onChange={() => toggleInterest('القانون الدستوري')}
                checked={!hiddenInterests.includes('القانون الدستوري')}
                className="form-checkbox h-5 w-5 text-Deep_Blue rounded focus:ring-Deep_Blue checked:bg-Deep_Blue"
              />
            </div>
          </div>
        </div>

        <div className="mb-4 rtl flex items-center">
          <span className="mr-2 text-lg">مشترك</span>
          <button
            type="button"
            className={`${
              isSubscribed
                ? 'bg-Deep_Blue text-my_whitee'
                : 'bg-gray-200 text-gray-800'
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
            onClick={toggleSubscription}
          >
            <span
              className={`${
                isSubscribed ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </button>
        </div>

        <div className="flex justify-center items-center px-4 mb-4 flex-wrap">
          <input
            type="submit"
            id="saveChanges"
            name="saveChanges"
            value="حفظ التغييرات"
            className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-Deep_Blue focus:border-transparent bg-Deep_Blue text-my_whitee hover:cursor-pointer hover:bg-my_yellow hover:text-Deep_Blue transition duration-300 ease-in-out hover:shadow-md"
          />
        </div>
      </form>
    </div>
  );
}