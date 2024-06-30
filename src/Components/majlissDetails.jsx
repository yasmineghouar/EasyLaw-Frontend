import React from 'react';

export default function MajlissDetails(props) {
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
                <p className="mb-2" style={{ margin: 'auto', color: "#9FC2CC", opacity: '1', fontFamily: "Cairo", fontSize: "20px", fontWeight: "semibold" }}>ضد الغرفة الوطنیة للموثقین</p>
            </div>

            <div className="flex flex-row justify-content-around mb-12 mt-16" style={{ alignItems: "flex-start"}}>
                <div className="flex flex-col my-2 mx-10 mb-12" style={{ opacity: "1", width: "40%" }}>
                    <p className="mb-2 text-center" style={{ margin: 'auto', color: "#0C6291", opacity: '1', fontFamily: "Cairo", fontSize: "20px", fontWeight: "semibold" }}>المبدأ</p>
                    <p className="flex flex-col my-7 mx-7 text-right">
                    طعن قضائي بالإلغاء طعن قضائي بالإلغاءطعن قضائي بالإلغاءطعن قضائي بالإلغاءطعن قضائي بالإلغاءطعن قضائي بالإلغاءطعن قضائي بالإلغاء
                    </p>
                </div>
                <hr style={{ border: "1px solid #9FC2CC", width: "1px", margin: "auto", height: "200px" }} />
                <div className="flex flex-col my-2 mx-10 mb-12" style={{opacity: "1", width: "40%" }}>
                    <p className="mb-2 text-center" style={{ margin: 'auto', color: "#0C6291", opacity: '1', fontFamily: "Cairo", fontSize: "20px", fontWeight: "semibold" }}>التشریع</p>
                    <p className="flex flex-col my-7 mx-7 text-right">
                        قانون الإجراءات المدنیة و الإداریة : المادتین 832 و 956 .
                    </p>
                </div>
                <hr style={{ border: "1px solid #9FC2CC", width: "1px", margin: "auto", height: "200px" }} />
                <div className="flex flex-col my-2 mx-10 mb-12" style={{opacity: "1", width: "40%" }}>
                    <p className="mb-2 text-center" style={{ margin: 'auto', color: "#0C6291", opacity: '1', fontFamily: "Cairo", fontSize: "20px", fontWeight: "semibold" }}>الموضوع</p>
                    <p className="flex flex-col my-7 mx-7 text-right">
                      .طعن قضائي بالإلغاء طعن قضائي بالإلغاءطعن قضائي بالإلغاءطعن قضائي بالإلغاءطعن قضائي بالإلغاءطعن قضائي بالإلغاءطعن قضائي بالإلغاء
                    </p>
                </div>
            </div>


            <div className="flex flex-col text-center md:flex-row justify-content-center">
                <p className="mb-" style={{ margin: 'auto', color: "#0C6291", opacity: '1', fontFamily: "Cairo", fontSize: "20px", fontWeight: "semibold" }}> : و علیھ</p>
            </div>
            <div className="flex flex-col my-2 mx-10 mb-16 mt-4" style={{ border: "2px solid #9FC2CC", borderRadius: '15px', opacity: "1" }}>
                <p className="flex flex-col my-7 mx-7 text-right">
                    ن المادة 956 بالنقض بشھرین یسري من تاریخ التبلیغ الرسمي للقرار محل حیث أن القرار محل الطعن كان قد بلغ للطاعن شخصیا بتاریخ بالإلغاء أمام مجلس الدولة ، و ھذا الأخیر أصدر قرار الطعن بالإلغاء باعتبار و أن مثل ھذه القرارات تكون قابلة للطعن فیھا بالنقض أمام مجلس الدولة و لیس بالإلغاء ، عندھا عاد الطاعن بالمادة 832 من قانون الإجراءات المدنیة و الإداریة التي تقطع الآجال و القرار الصادر عن مجلس الدولة بتاریخ حیث حقیقة فالمادة سبیل الحصر ھي -1 الطعن أمام جھة قضائیة إداریة غیر -2 طلب المساعدة القضائیة -3 وفاة المدعي أو تغیر توجیھا غیر سلیم فإن ھذه الآجال تبقى منقطعة فقط طیلة سریان الدعوى الخاطئة و لیس من تاریخ التبلیغ. حیث أن مجلس الدولة كان قد فصل بتاریخ 2016/02/18 بعدم قبول الطعن بالإلغاء و مع ذلك فالطاعن لم یطعن بالنقض إلا بتاریخ 2016/05/02 و بالتالي فسواء حسبت الآجال من تاریخ التبلیغ أو من تاریخ الفصل في دعوى الإلغاء فھي خارج الآجال القانونیة ، مما یتعین التصریح بعدم قبول الطعن بالنقض . حوجیھا غیر سلیم فإن ھذه الآجال تبقى منقطعة فقط طیلة سریان الدعوى الخاطئة و لیس من تاریخ التبلیغ. حیث أن مجلس الدولة كان قد فصل بتاریخ 2016/02/18 بعدم قبول الطعن بالإلغاء و مع ذلك فالطاعن لم یطعن بالنقض إلا بتاریخ 2016/05/02 و بالتالي فسواء حسبت الآجال من تاریخ التبلیغ أو من تاریخ الفصل في دعوى الإلغاء فھي خارج الآجال القانونیة ، مما یتعین التصریح بعدم قبول الطعن بالنقض . حیث أن المادة 956 بالنقض بشھرین یسري من تاریخ التبلیغ الرسمي للقرار محل حیث أن القرار محل الطعن كان قد بلغ للطاعن شخصیا بتاریخ بالإلغاء أمام مجلس الدولة ، و ھذا الأخیر أصدر قرار الطعن بالإلغاء باعتبار و أن مثل ھذه القرارات تكون قابلة للطعن فیھا بالنقض أمام مجلس الدولة و لیس بالإلغاء ، عندھا عاد الطاعن بالمادة 832 من قانون الإجراءات المدنیة و الإداریة التي تقطع الآجال و القرار الصادر عن مجلس الدولة بتاریخ حیث حقیقة فالمادة سبیل الحصر ھي -1 الطعن أمام جھة قضائیة إداریة غیر -2 طلب المساعدة القضائیة -3 وفاة المدعي أو تغیر توجیھا غیر سلیم فإن ھذه الآجال تبقى منقطعة فقط طیلة سریان الدعوى الخاطئة و لیس من تاریخ التبلیغ. حیث أن مجلس الدولة كان قد فصل بتاریخ 2016/02/18 بعدم قبول الطعن بالإلغاء و مع ذلك فالطاعن لم یطعن بالنقض إلا بتاریخ 2016/05/02 و بالتالي فسواء حسبت الآجال من تاریخ التبلیغ أو من تاریخ الفصل في دعوى الإلغاء فھي خارج الآجال القانونیة ، مما یتعین التصریح بعدم قبول الطعن بالنقض . حوجیھا غیر سلیم فإن ھذه الآجال تبقى منقطعة فقط طیلة سریان الدعوى الخاطئة و لیس من تاریخ التبلیغ. حیث أن مجلس الدولة كان قد فصل بتاریخ 2016/02/18 بعدم قبول الطعن بالإلغاء و مع ذلك فالطاعن لم یطعن بالنقض إلا بتاریخ 2016/05/02 و بالتالي فسواء حسبت الآجال من تاریخ التبلیغ أو من تاریخ الفصل في دعوى الإلغاء فھي خارج الآجال القانونیة ، مما یتعین التصریح بعدم قبول الطعن بالنقض                               
                </p>
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