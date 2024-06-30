import React from 'react'
import logoWhite from '../Images/logoWhite.png'
export default function detailsFacture() {
  return (
   <div className='flex flex-col gap-2 mx-auto md:mx-40 my-20'>
     <div className='flex flex-col gap-3 px-10 py-5   border-4 border-Deep_Blue shadow-md rounded-md'>
       <div className='flex flex-row-reverse gap'>
         <img src={logoWhite} className='w-24 h-auto'/>
         <h1 className='text-2xl font-cairo font-bold text-my_yellow py-2 mx-auto'>فاتورة الدفع</h1>
       </div>

    <div className='flex flex-row-reverse justify-between'>
        {/* معلومات المستخدم  */}
        <div className='flex flex-col gap-2 border-2 border-light_Blue rounded-md shadow-sm px-4 py-2'>
        <h1 className='text-xl text-light_Blue font-cairo font-bold py-1 '> معلومات المستخدم</h1>
           <div className='flex flex-row-reverse gap-1'>
            <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:اسم</h1>
            <h1 className='font-cairo text-Dark_Blue'>عباسي زوليخة </h1>
            </div>
            <div className='flex flex-row-reverse gap-1'>
            <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:عنوان</h1>
            <h1 className='font-cairo text-Dark_Blue'>طريق الملعب , تيبازة</h1>
            </div>
            <div className='flex flex-row-reverse gap-1'>
            <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:رقم الهاتف</h1>
            <h1 className='font-cairo text-Dark_Blue'>0793921328</h1>
            </div>
            <div className='flex flex-row-reverse gap-1'>
            <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:البريد الالكتروني </h1>
            <h1 className='font-cairo text-Dark_Blue'>kz-abbaci@esi.dz</h1>
            </div>
        </div>
        {/* معلومات الفاتورة  */}
        <div className='flex flex-col gap-2 border-2 border-light_Blue rounded-md shadow-sm px-4 py-2'>
        <h1 className='text-xl text-light_Blue font-cairo font-bold py-1 '> معلومات الفاتورة</h1>
           <div className='flex flex-row-reverse gap-1'>
            <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:رقم الفاتورة </h1>
            <h1 className='font-cairo text-Dark_Blue'> 12-13 </h1>
            </div>
            <div className='flex flex-row-reverse gap-1'>
            <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:تاريخ الاصدار</h1>
            <h1 className='font-cairo text-Dark_Blue'> 23-02-2024</h1>
            </div>
            <div className='flex flex-row-reverse gap-1'>
            <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:تاريخ الدفع </h1>
            <h1 className='font-cairo text-Dark_Blue'>23-02-2024</h1>
            </div>
            <div className='flex flex-row-reverse gap-1'>
            <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>: طريقة الدفع </h1>
            <h1 className='font-cairo text-Dark_Blue'>البطاقة الذهبية </h1>
            </div>
        </div>
         {/* التكلفة الاجمالية    */}
         <div className='flex flex-col gap-2 border-2 border-light_Blue rounded-md shadow-sm px-4 py-2'>
        <h1 className='text-xl text-light_Blue font-cairo font-bold py-1 '> التكلفة الاجمالية  </h1>
           <div className='flex flex-row-reverse gap-1'>
            <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:مبلغ الفاتورة </h1>
            <h1 className='font-cairo text-Dark_Blue'> 9000 DZ </h1>
            </div>
            <div className='flex flex-row-reverse gap-1'>
            <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:ضريبة القيمة المضافة </h1>
            <h1 className='font-cairo text-Dark_Blue'> 300DZ</h1>
            </div>
            <div className='flex flex-row-reverse gap-1'>
            <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:مبلغ الاجمالي  </h1>
            <h1 className='font-cairo text-Dark_Blue'>9300 DZ</h1>
            </div>
          
        </div>

    </div> 
    <div className='flex flex-row-reverse  '>
        {/* تفاصيل الخدمة  */}
        <div className='flex flex-col gap-2 border-2  border-light_Blue rounded-md shadow-sm px-4 py-2'>
        <h1 className='text-xl text-light_Blue font-cairo font-bold py-1 '> تفاصيل الخدمة</h1>
           <div className='flex flex-row-reverse gap-2 '>
            <h1 className='font-cairo text-xl font-bold text-Deep_Blue text-right'>:وصف الخدمة</h1>
            <h1 className='font-cairo text-Dark_Blue text-right'> البحث المتقدم عن القوانين الاساسية في الجزائر كما هي منصوص عليها في الجرائد الرسمية و امكانية الحصول على اشعارات عن القوانين الجديدة التي تخص مجال اهتمامات المسخدم  </h1>
            </div>
            <div className='flex flex-row-reverse gap-1'>
            <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:مدة الاستفادة من الخدمة </h1>
            <h1 className='font-cairo text-Dark_Blue'>شهر</h1>
            </div>
            <div className='flex flex-row-reverse gap-1'>
            <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:سعر الخدمة </h1>
            <h1 className='font-cairo text-Dark_Blue'>9000 DZ</h1>
            </div>
            <div className='flex flex-row-reverse gap-1'>
            <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:تاريخ نهايةالخدمة  </h1>
            <h1 className='font-cairo text-Dark_Blue'>23-03-2024</h1>
            </div>
        </div>
       
         
    </div> 
 {/* معلومات الاتصال  */}
 <div className='flex flex-col gap-2 border-2 border-light_Blue rounded-md shadow-sm px-4 py-2'>
        <h1 className='text-xl text-light_Blue font-cairo font-bold py-1 '> معلومات الاتصال</h1>
           <div className='flex flex-row-reverse gap-1'>
            <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:البريد الالكتروني   </h1>
            <h1 className='font-cairo text-Dark_Blue'> 12-13 </h1>
            </div>
            <div className='flex flex-row-reverse gap-1'>
            <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:رقم الهاتف  </h1>
            <h1 className='font-cairo text-Dark_Blue'> 23-02-2024</h1>
            </div>
        </div>
    </div>

    <button className='btn_Bleu w-40'> طباعة</button>
   </div>
  )
}
