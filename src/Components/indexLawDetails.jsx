import React from 'react'

export default function indexLawDetails({onClick}) {
  return (
    <div className='flex flex-col m-5 gap-5'>
        <div className='flex flex-col gap-3'> 
             <h1 className='text-xl font-cairo text-Deep_Blue text-right'>تفاصيل حول القانون المجرف</h1>
             <div className='flex flex-row justify-between p-2 border-2 border-light_Blue rounded-md'>
                <div className='flex flex-row gap-2'>
                       <h1 className='text-Dark_Blue font-cairo'>موقع الجريدة الرسمية</h1>
                       <h1 className='text-Deep_Blue font-bold font-cairo'>:مصدر</h1>
                </div>

                <div className='flex flex-row gap-2'>
                       <h1 className='text-Dark_Blue font-cairo'>23-03-2024</h1>
                       <h1 className='text-Deep_Blue font-bold font-cairo'>:تاريخ التجريف</h1>
                </div>

                <div className='flex flex-row gap-2'>
                       <h1 className='text-Dark_Blue font-cairo'>عباسي زوليخة</h1>
                       <h1 className='text-Deep_Blue font-bold font-cairo'>: المشرف</h1>
                </div>

                <div className='flex flex-row gap-2'>
                       <h1 className='text-Dark_Blue font-cairo'> غير مفهرس</h1>
                       <h1 className='text-Deep_Blue font-bold font-cairo'>: الفهرسة</h1>
                </div>

             </div>
             <textarea
            className="text-right border-2 border-light_Blue rounded-md mt-4 h-28 p-2 text-Dark_Blue font-cairo"
            value="مرسوم تنفيذي رقم 89-51 ممضي في 18 أبريل 1989وزارة الفلاحةالجريدة الرسمية عدد 16 مؤرخة في 19 أبريل 1989، الصفحة 405يحدد كيفيات تطبيق المادة 29 من القانون رقم 87-19 المؤرخ في 8 ديسمبر سنة 1987 الذي يضبط كيفية إستغلال الأراضي الفلاحية التابعة للأملاك الوطنية ويحدد حقوق المنتجين وواجباتهم."
            />
        </div>
        <div className='flex flex-row justify-around mb-10'>
            {/* المعايير الثانوية */}
        <div className='flex flex-col'>
        <h1 className='text-xl text-Deep_Blue font-cairo text-right font-bold mb-2'>معايير الثانوية</h1>
        <div className='flex flex-col gap-2'>
          
          <div className='flex flex-col'>
            <label className='text-right text-Deep_Blue font-cairo'> الوزارة</label>
            <input className='inputStyle px-5 py-2'/>
         </div>
          
         <div className='flex flex-col'>
            <label className='text-right text-Deep_Blue font-cairo'> القطاع</label>
            <input className='inputStyle px-5 py-2'/>
         </div>
          </div>
          <button className='btn_Bleu mt-5' onClick={onClick}>اضافة معيار اخر للتصنيف</button>
        </div>
        {/* القوانين الاساسية */}
          <div className='flex flex-col'>
            <h1 className='text-xl text-Deep_Blue font-cairo text-right font-bold mb-2'>معايير الاساسية</h1>
          <div className='flex flex-row gap-2'>
          
          <div className='flex flex-col'>
            <label className='text-right text-Deep_Blue font-cairo'>نوع النص</label>
            <input className='inputStyle px-5 py-2'/>
         </div>
          
         <div className='flex flex-col'>
            <label className='text-right text-Deep_Blue font-cairo'>تاريخ النص</label>
            <input className='inputStyle px-5 py-2'/>
         </div>
          </div>
         <div className='flex flex-col'>
            <label className='text-right text-Deep_Blue font-cairo'>موضوع القانون</label>
            <textarea
            className="border-2 border-light_Blue rounded-md mt-4 h-28 p-2 text-Dark_Blue font-cairo"
            />
         </div>

         <div className='flex flex-row gap-2'>
          
          <div className='flex flex-col'>
            <label className='text-right text-Deep_Blue font-cairo'>رقم الجريدة الرسمية</label>
            <input className='inputStyle px-5 py-2'/>
         </div>
          
         <div className='flex flex-col'>
            <label className='text-right text-Deep_Blue font-cairo'>تاريخ الجريدة الرسمية</label>
            <input className='inputStyle px-5 py-2'/>
         </div>
          </div>
          <div className='flex flex-col'>
            <label className='text-right text-Deep_Blue font-cairo'>ملف الجريدة الرسمية</label>
            <input type='file' className='inputStyle px-5 py-2'/>
          </div>
          <button className='btn_Bleu mt-5'>تاكيد المعايير الاساسية</button>
          </div>

        </div>
    </div>
  )
}
