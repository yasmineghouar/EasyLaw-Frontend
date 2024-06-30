import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Header2 from '../Components/headerRegister';
import MenuPrincipal from '../Components/menuPrncipale';
import Footer from '../Components/footer';
import logoWhite from '../Images/logoWhite.png';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function DetailFacture() {
  const { idFacture } = useParams();
  const [invoiceDetails, setInvoiceDetails] = useState(null);
  const componentRef = useRef();

  // Déplacez useReactToPrint en dehors de toute logique conditionnelle
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    const fetchInvoiceDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/invoice/${idFacture}`);
        const data = await response.json();
        if (response.ok) {
          setInvoiceDetails(data);
          console.log(data);
        } else {
          console.error('Failed to fetch invoice details:', data.message);
        }
      } catch (error) {
        console.error('Error fetching invoice details:', error);
      }
    };

    fetchInvoiceDetails();
  }, [idFacture]);

  const isSignedUp = localStorage.getItem('signup') === 'true';

  if (!isSignedUp) {
    window.location.href = '/login';
    return null;
  }

  if (!invoiceDetails) {
    return <div>Loading...</div>;
  }

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text("فاتورة الدفع", 10, 10);
  
    const tableElement = document.getElementById('my-table');
    if (tableElement) {
      // Supprimez les bordures pour une meilleure apparence du PDF
      const options = {
        html: '#my-table',
        didDrawPage: (data) => {
          // Ajoutez un pied de page avec le numéro de page
          doc.setTextColor(100);
          doc.setFontSize(10);
          doc.text('Page ' + data.pageNumber, data.settings.margin.left, doc.internal.pageSize.height - 10);
        }
      };
      
      // Générez le tableau dans le PDF
      doc.autoTable(options);
      
      // Téléchargez le PDF avec un nom de fichier
      doc.save("فاتورة الدفع.pdf");
    } else {
      console.error("Table element not found or empty.");
    }
  };
  
  

  return (
    <div>
      <Header2 />
      <MenuPrincipal />
      {invoiceDetails && (
         <div ref={componentRef} className='flex flex-col gap-2 mx-auto md:mx-40 my-20'>
          <div className='flex flex-col gap-3 px-10 py-5 border-4 border-Deep_Blue shadow-md rounded-md'>
          <table id='my-table'>
          <div className='flex flex-row-reverse gap'>
              <img src={logoWhite} className='w-24 h-auto' alt="Logo" />
              <h1 className='text-2xl font-cairo font-bold text-my_yellow py-2 mx-auto'>فاتورة الدفع</h1>
            </div>

            <div className='flex flex-row-reverse justify-around gap-4'>
              {/* Informations utilisateur */}
              <div className='w-full flex flex-col gap-2 border-2 border-light_Blue rounded-md shadow-sm px-4 py-2'>
                <h1 className='text-xl text-light_Blue font-cairo font-bold py-1'>معلومات المستخدم</h1>
                <div className='flex flex-row-reverse gap-1'>
                  <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:اسم</h1>
                  <h1 className='font-cairo text-Dark_Blue'>{invoiceDetails.invoice.user.username}</h1>
                </div>
                <div className='flex flex-row-reverse gap-1'>
                  <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:رقم الهاتف</h1>
                  <h1 className='font-cairo text-Dark_Blue'>{invoiceDetails.invoice.user.phoneNumber}</h1>
                </div>
                <div className='flex flex-row-reverse gap-1'>
                  <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:البريد الالكتروني</h1>
                  <h1 className='font-cairo text-Dark_Blue'>{invoiceDetails.invoice.user.email}</h1>
                </div>
              </div>
              {/* Informations facture */}
              <div className='w-full flex flex-col gap-2 border-2 border-light_Blue rounded-md shadow-sm px-4 py-2'>
                <h1 className='text-xl text-light_Blue font-cairo font-bold py-1'>معلومات الفاتورة</h1>
                <div className='flex flex-row-reverse gap-1'>
                  <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:رقم الفاتورة </h1>
                  <h1 className='font-cairo text-Dark_Blue'>{invoiceDetails.invoice.numFacture}</h1>
                </div>
                <div className='flex flex-row-reverse gap-1'>
                  <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:تاريخ الاصدار</h1>
                  <h1 className='font-cairo text-Dark_Blue'>{new Date(invoiceDetails.invoice.dateFacture).toLocaleDateString()}</h1>
                </div>
                <div className='flex flex-row-reverse gap-1'>
                  <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:تاريخ الدفع </h1>
                  <h1 className='font-cairo text-Dark_Blue'>{new Date(invoiceDetails.invoice.dateFacture).toLocaleDateString()}</h1>
                </div>
                <div className='flex flex-row-reverse gap-1'>
                  <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:طريقة الدفع</h1>
                  <h1 className='font-cairo text-Dark_Blue'>{invoiceDetails.invoice.payment_Way}</h1>
                </div>
              </div>
            {/* Coût total */}
            <div className='w-full flex flex-col gap-2 border-2 border-light_Blue rounded-md shadow-sm px-4 py-2'>
              <h1 className='text-xl text-light_Blue font-cairo font-bold py-1'>التكلفة الاجمالية</h1>
              <div className='flex flex-row-reverse gap-1'>
                <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:مبلغ الفاتورة</h1>
                <h1 className='font-cairo text-Dark_Blue'>{invoiceDetails.invoice.prixFacture} دج</h1>
              </div>
              <div className='flex flex-row-reverse gap-1'>
                <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:ضريبة القيمة المضافة</h1>
                <h1 className='font-cairo text-Dark_Blue'>0دج</h1>
              </div>
              <div className='flex flex-row-reverse gap-1'>
                <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:المبلغ الاجمالي</h1>
                <h1 className='font-cairo text-Dark_Blue'>{invoiceDetails.invoice.prixFacture} دج</h1>
              </div>
            </div>
          </div>
          <div className='flex flex-row-reverse'>
            {/* Détails du service */}
            <div className='w-full flex flex-col gap-2 border-2 border-light_Blue rounded-md shadow-sm px-4 py-2'>
              <h1 className='text-xl text-light_Blue font-cairo font-bold py-1'>تفاصيل الخدمة</h1>
              <div className='flex flex-row-reverse gap-2'>
                <h1 className='font-cairo text-xl font-bold text-Deep_Blue text-right'>:وصف الخدمة</h1>
                <h1 className='font-cairo text-Dark_Blue text-right'>{invoiceDetails.invoice.service.description}</h1>
              </div>
              <div className='flex flex-row-reverse gap-1'>
                <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:مدة الاستفادة من الخدمة</h1>
                <h1 className='font-cairo text-Dark_Blue'>شهر</h1>
              </div>
              <div className='flex flex-row-reverse gap-1'>
                <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:سعر الخدمة</h1>
                <h1 className='font-cairo text-Dark_Blue'>{invoiceDetails.invoice.prixFacture} دج</h1>
              </div>
              {/* <div className='flex flex-row-reverse gap-1'>
                <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:تاريخ نهاية الخدمة</h1>
                <h1 className='font-cairo text-Dark_Blue'>{new Date(invoiceDetails.invoice.dateFinService).toLocaleDateString()}</h1>
              </div> */}
            </div>
          </div>
          {/* Informations de contact */}
          <div className='flex flex-col gap-2 border-2 border-light_Blue rounded-md shadow-sm px-4 py-2'>
            <h1 className='text-xl text-light_Blue font-cairo font-bold py-1'>معلومات الاتصال</h1>
            <div className='flex flex-row-reverse gap-1'>
              <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:البريد الالكتروني</h1>
              <h1 className='font-cairo text-Dark_Blue'>{invoiceDetails.invoice.email}</h1>
            </div>
            <div className='flex flex-row-reverse gap-1'>
              <h1 className='font-cairo text-xl font-bold text-Deep_Blue'>:رقم الهاتف</h1>
              <h1 className='font-cairo text-Dark_Blue'>{invoiceDetails.invoice.phoneNumber}</h1>
            </div>
          </div>

          </table>
         <div className="flex justify-center mt-4">
        <button className='btn_Bleu w-40 mr-2' onClick={handlePrint}>طباعة</button>
        <button className='btn_Bleu w-40' onClick={handleDownload}>تحميل</button>
      </div> 
        </div>
      </div>
      )}
      
      <Footer />
    </div>
  );
}
