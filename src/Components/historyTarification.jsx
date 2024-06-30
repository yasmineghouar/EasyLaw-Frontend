import React, { useEffect, useState } from 'react';

export default function HistoryTarification() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/tarification-history')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="">
            <table className="table-auto min-w-full divide-y divide-Dark_Blue">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">المشرف</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">تاريخ</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">القيمة الحالية</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">المعلومة المغيرة</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">الخدمة</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((row, index) => (
                        <tr key={row.id} className={index % 2 === 0 ? 'bg-light_Blue bg-opacity-30' : 'bg-my_yellow bg-opacity-30'}>
                            <td className="px-6 py-4 whitespace-nowrap">{row.changed_by}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{row.changed_at}</td>
                            {
  row.new_value === "True" ? ( 
    <td className="px-6 py-4 whitespace-nowrap">عرض مفعل</td>
  ) : row.new_value === "False" ? (
    <td className="px-6 py-4 whitespace-nowrap">عرض مخفي</td>
  ) : row.attribute === "description" ? (
    <td className="px-6 py-4 whitespace-nowrap">تغيير نص النوضيحي</td>
  ) : <td className="px-6 py-4 whitespace-nowrap">{row.new_value}</td>
}




                            
                            <td className="px-6 py-4 whitespace-nowrap">
  {row.attribute === 'active' ? (
    'حالة العرض'
  ) : row.attribute === 'tarif' ? (
    'السعر'
  ) : row.attribute === 'description' ? (
    'النص التوضيحي'
  ) : null}
</td>

                            <td className="px-6 py-4 whitespace-nowrap">{row.tarification_info.service}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
