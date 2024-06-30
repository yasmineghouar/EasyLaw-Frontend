import React from 'react';

export default function MahkamaDetails(props) {
    const { id } = props;
    return (
        <div style={{marginBottom : "5%"}}>
        <div className="flex flex-col mt-20 mx-20 mb-8" style={{ border: "5px solid #0C6291", borderRadius: '15px', opacity: 0.69 }}>
            <div className="flex flex-col text-center md:flex-row justify-content-center mt-10 mb-4">
                <h2 className="text-xl" style={{ margin: 'auto', opacity: '1', fontFamily: "Cairo", fontSize: "32px", fontWeight: "bold" }}>
                    <span style={{ color: "#000000" }}>{id}</span> <span style={{ color: "#0C6291" }}>تفاصيل القرار</span> 
                </h2>
            </div>
            <div className="flex flex-col text-center md:flex-row justify-content-center mb-1">
                <p className="mb-2" style={{ margin: 'auto', color: "#9FC2CC", opacity: '1', fontFamily: "Cairo", fontSize: "20px", fontWeight: "semibold" }}>المؤرخ في 2017/04/20 </p>
            </div>
            <div className="flex flex-col text-center md:flex-row justify-content-center mb-16">
                <p className="mb-2" style={{ margin: 'auto', color: "#9FC2CC", opacity: '1', fontFamily: "Cairo", fontSize: "20px", fontWeight: "semibold" }}>الموضوع : اتعاب المحامي</p>
            </div>

            <div className="flex flex-row justify-content-around mb-12 mt-16" style={{ alignItems: "flex-start"}}>
                <div className="flex flex-col my-2 mx-10 mb-12" style={{ opacity: "1", width: "40%" }}>
                    <p className="mb-2 text-center" style={{ margin: 'auto', color: "#0C6291", opacity: '1', fontFamily: "Cairo", fontSize: "20px", fontWeight: "semibold" }}>المبدأ</p>
                    <p className="flex flex-col my-7 mx-7 text-right">
                        يحق للمحبوس حبسا مؤقتا غير مبرر، استرجاع أتعاب الدفاع، بناء على الوصل المحرّر من طرف المحامي.
                    </p>
                </div>
                <hr style={{ border: "1px solid #9FC2CC", width: "1px", margin: "auto", height: "200px" }} />
                <div className="flex flex-col my-2 mx-10 mb-12" style={{opacity: "1", width: "40%" }}>
                    <p className="mb-2 text-center" style={{ margin: 'auto', color: "#0C6291", opacity: '1', fontFamily: "Cairo", fontSize: "20px", fontWeight: "semibold" }}>المرجع القانوني</p>
                    <p className="flex flex-col my-7 mx-7 text-right">
                        المادة 137 مكرر من قانون الإجراءات الجزائية.
                    </p>
                </div>
                <hr style={{ border: "1px solid #9FC2CC", width: "1px", margin: "auto", height: "200px" }} />
                <div className="flex flex-col my-2 mx-10 mb-12" style={{opacity: "1", width: "40%" }}>
                    <p className="mb-2 text-center" style={{ margin: 'auto', color: "#0C6291", opacity: '1', fontFamily: "Cairo", fontSize: "20px", fontWeight: "semibold" }}>الأطراف</p>
                    <p className="flex flex-col my-7 mx-7 text-right">
                        - الطاعن : (م. هـ).
                        - المطعون ضده : الوكيل القضائي للخزينة.
                    </p>
                </div>
            </div>


            <div className="flex flex-col text-center md:flex-row justify-content-center">
                <p className="mb-" style={{ margin: 'auto', color: "#0C6291", opacity: '1', fontFamily: "Cairo", fontSize: "20px", fontWeight: "semibold" }}>رد المحكمة العليا عن الوجه المرتبط بالمبدأ</p>
            </div>
            <div className="flex flex-col my-2 mx-10 mb-12 mt-4" style={{ border: "2px solid #9FC2CC", borderRadius: '15px', opacity: "1" }}>
                <p className="flex flex-col my-7 mx-7 text-right">عن الـــوجه الوحيد: المتعلق بالخطأ في تطبيق القانون،حيث أنٌه بمراجعة القرار المطعون فيه، يتٌضح من خلاله بأنٌ قضاة المجلس قد ناقشوا الوقائع مناقشة قانونية، وسببوه بما فيه الكفاية والوضوح راجعين إلى المادة 46 من القانون 08 - 11  فإنها تشترط لقيام جنحة تسهيل تنقل الأجانب داخل التراب الوطني بطريقة غير شرعية أن يكون النقل بطريقة غير شرعية، في حين أن المتهم في قضية الحال لم يقم بنقل الأجانب بطريقة غير شرعية، بل قام بعملية النقل بطريقة شرعية كونه ناقل عمومي وحائز على رخصة استغلال الخط، ولم يقم بالخروج عن الخط الذي يستغله ولا يسعه وليس من حقه التأكد من هوية الأشخاص الذين يستقلون حافلته، ولا التأكد من وضعيتهم القانونية وأن الركن الشرعي والمادي لجنحة تسهيل تنقل الأجانب بطريقة غير شرعية منعدم في قضية الحال لذلك تعين على المجلس إلغاء الحكم المستأنف والقضاء ببراءة المتهم، وعليه فإن قضاة المجلس قد طبقوا صحيح القانون، ولم يخطئوا في تطبيقه، الأمر الذٌي يجعل ما ينعاه النائب العام على القرار المطعون فيه غير سديد لذلك تعين رفض طعنه لعدم التأسيس.</p>
            </div>
            <div className="flex flex-col text-center md:flex-row justify-content-center">
                <p className="mb-6" style={{ margin: 'auto', color: "#0C6291", opacity: '1', fontFamily: "Cairo", fontSize: "20px", fontWeight: "semibold" }}>منطوق القرار </p>
            </div>
            <div className="flex flex-col my-2 mx-10 mb-16 mt-4" style={{ border: '2px solid #9FC2CC', borderRadius: '15px', opacity: '1' }}>
                <p className="flex flex-col my-3 mx-7 text-right">قبول الطلب مع منح تعويض معنوي و تعويض عن أتعاب المحامي</p>
            </div>
        </div>

        <button
            type="button"
            className="btn btn-primary btn-block mb-12"
            style={{
                borderRadius: '5px',
                width: '120px',
                height: '5vh',
                backgroundColor: '#0C6291', // Couleur de fond bleue
                color: '#FFFFFF', // Texte blanc
                fontSize: "20px",
                fontFamily: 'Cairo, sans-serif',
                fontWeight: 'bold',
                textDecoration: 'none', 
                fontSize : "20px",
                marginLeft : "-75%"
            }}
            onClick={() => { window.location.href = '#'; }}
        >
            طباعة
        </button>

      </div>
    )
}