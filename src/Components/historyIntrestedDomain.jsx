import React, { useEffect, useState } from 'react';

export default function HistoryIntrestedDomain() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Effectuer une requête GET à l'API pour récupérer les données
        fetch('http://127.0.0.1:8000/History_interested-domains')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    const getActionDescription = (history, nom) => {
        if (history.action === "add" && history.attribute === "nom") {
            return "اضافة مجال";
        } else if (history.action === "delete") {
            return `حذف مجال الاهتمام ${nom}`;
        } else if (history.action === "add" && history.attribute ==="mot_cle") {
            return `اضافة كلمة مفتاحية ${history.new_value}`;
        } else if (history.action === "update") {
            return `تغيير مجال الاهتمام من ${history.old_value} الى ${history.new_value}`;
        } else if (history.action === "add" && history.attribute === "mot_cle") {
            return `تغيير كلمة مفتاحية من  ${history.old_value} الى ${history.new_value} `;
        }
        return '';
    };

    return (
        <div className="mx-10">
            <table className="table-auto min-w-full divide-y divide-Dark_Blue">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">المجال</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">عملية</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">تاريخ</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">المشرف</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-light_Blue bg-opacity-30' : 'bg-my_yellow bg-opacity-30'}>
                            <td className="px-6 py-4 whitespace-nowrap">{row.nom}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {row.history ? getActionDescription(row.history, row.nom) : ''}
                            </td>                            
                            <td className="px-6 py-4 whitespace-nowrap">{row.history.changed_at}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{row.history.changed_by}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
