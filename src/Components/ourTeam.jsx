import React from 'react'
import TeamImg from '../Images/TeamImg.png';


export default function ourTeam() {
  return (
    <div className="px-4 py-8">
    <h2 className="text-Deep_Blue font-bold font-cairo text-2xl text-center py-2">فريقنا</h2>
    <div className="flex flex-col lg:flex-row lg:justify-around">
      <div className="flex flex-col lg:w-1/2">
       <p className="text-Dark_Blue font-cairo text-lg my-4">
       نحن مجموعة من الطلاب في الدراسات العليا للإعلام، ملتزمون بتطوير وتحسين نظامنا الذكي للبحث ومراقبة القوانين. بفضل خلفياتنا المتنوعة وشغفنا بتكنولوجيا المعلومات والقانون، نعمل بجد لتوفير تجربة مستخدم ممتازة ومحتوى قانوني ذو جودة عالية لمستخدمينا.
       </p>
      </div>
      {/* Condition pour afficher l'image uniquement sur les appareils de taille moyenne et plus grands */}
      <img src={TeamImg} className="hidden lg:block"/>
    </div>
  </div>
  )
}
