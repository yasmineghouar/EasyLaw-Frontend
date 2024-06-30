// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState } from 'react'; 


// // pour l'integration
// export default function RegisterForm() {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [adresse, setAdresse] = useState('');
//     const [numero, setNumero] = useState('');
//     const [password, setPassword] = useState('');
//     const [verfipassword, setVerfipassword] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault(); // Empêcher le comportement par défaut du formulaire
        
//         // Envoyer les données au backend ici
//     };

//     return (
//         <div className="card border" style={{ border: '2px solid #001F3F', height: '93vh', width: "55%", marginLeft: "22%", marginTop: "5%", marginBottom: "5%" }}>
//             <div className="card-body text-center bg-danger" style={{ width: '40%', height: '70%', marginTop: '5%', marginLeft: '25%' }}>
//                 <h5 className="card-title text-center" style={{ fontFamily: 'Cairo, sans-serif', fontWeight: 'bold', fontSize: '32px', color: "#001F3F", marginBottom: "18%", marginLeft: "18%" }}> إنشاء حساب جديد </h5>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <input
//                             type="text"
//                             className="form-control"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             style={{
//                                 border: '1.5px solid #001F3F',
//                                 width: '140%',
//                                 height: '6vh',
//                                 marginLeft: '-13%',
//                                 marginBottom: "5%",
//                                 borderRadius: '5px',
//                                 direction: 'rtl',
//                                 fontFamily: 'Cairo, sans-serif'
//                             }}
//                             placeholder="   اسم المستخدم    "
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                             type="text"
//                             className="form-control"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             style={{
//                                 border: '1.5px solid #001F3F',
//                                 width: '140%',
//                                 height: '6vh',
//                                 marginLeft: '-13%',
//                                 marginBottom: "5%",
//                                 borderRadius: '5px',
//                                 direction: 'rtl',
//                                 fontFamily: 'Cairo, sans-serif'
//                             }}
//                             placeholder="    البريد الالكتروني     "
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                             type="text"
//                             className="form-control"
//                             value={adresse}
//                             onChange={(e) => setAdresse(e.target.value)}
//                             style={{
//                                 border: '1.5px solid #001F3F',
//                                 width: '140%',
//                                 height: '6vh',
//                                 marginLeft: '-13%',
//                                 marginBottom: "5%",
//                                 borderRadius: '5px',
//                                 direction: 'rtl',
//                                 fontFamily: 'Cairo, sans-serif'
//                             }}
//                             placeholder="    العنوان    "
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                             type="number"
//                             className="form-control"
//                             value={numero}
//                             onChange={(e) => setNumero(e.target.value)}
//                             style={{
//                                 border: '1.5px solid #001F3F',
//                                 width: '140%',
//                                 height: '6vh',
//                                 marginLeft: '-13%',
//                                 marginBottom: "5%",
//                                 borderRadius: '5px',
//                                 direction: 'rtl',
//                                 fontFamily: 'Cairo, sans-serif'
//                             }}
//                             placeholder="   رقم الهاتف     "
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                             type="password"
//                             className="form-control"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             style={{
//                                 border: '1.5px solid #001F3F',
//                                 width: '140%',
//                                 height: '6vh',
//                                 marginBottom: "5%",
//                                 marginLeft: '-13%',
//                                 borderRadius: '5px',
//                                 direction: 'rtl',
//                                 fontFamily: 'Cairo, sans-serif'
//                             }}
//                             placeholder="   كلمة السر"
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                             type="password"
//                             className="form-control"
//                             value={verfipassword}
//                             onChange={(e) => setVerfipassword(e.target.value)}
//                             style={{
//                                 border: '1.5px solid #001F3F',
//                                 width: '140%',
//                                 height: '6vh',
//                                 marginBottom: "5%",
//                                 marginLeft: '-13%',
//                                 borderRadius: '5px',
//                                 direction: 'rtl',
//                                 fontFamily: 'Cairo, sans-serif'
//                             }}
//                             placeholder="    تأكيد  كلمة السر"
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="btn btn-primary btn-block"
//                         style={{
//                             borderRadius: '5px',
//                             backgroundColor: '#9FC2CC',
//                             color: '#EEEEEE',
//                             width: '30%',
//                             height: '5vh',
//                             fontFamily: 'Cairo, sans-serif',
//                             fontWeight: 'bold',
//                             marginTop: "8%",
//                             marginLeft: "18%"
//                         }}
//                     >
//                         تسجيل
//                     </button>
//                 </form>
//                 <div className="text-center mt-3 mb-4" style={{ color: '#001F3F', fontFamily: 'Cairo, sans-serif', marginTop: "8%", marginLeft: "18%" }}>
//                     <Link to="/login" style={{ textDecoration: "underline" }}> لديك حساب، قم بتسجيل الدخول </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }




import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [adresse, setAdresse] = useState('');
    const [numero, setNumero] = useState('');
    const [password, setPassword] = useState('');
    const [verfipassword, setVerfipassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const userData = {
            username,
            email,
            password,
            role: 'user',
            phoneNumber: numero
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();
            setMessage(data.message);
            if (data.message === "User Created") {
                // Effectuer une connexion implicite avec les identifiants saisis lors de l'inscription
                const loginData = {
                    email,
                    password
                };
    
                const loginResponse = await fetch('http://127.0.0.1:8000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(loginData)
                });
    
                const loginTokenData = await loginResponse.json();
    
                // Sauvegarder le token dans le localStorage
                localStorage.setItem('token', loginTokenData.token);
    
                // Rediriger l'utilisateur vers la page d'accueil
                window.location.href = "/";
    
                // Sauvegarder l'état de l'inscription
                localStorage.setItem('signup', true);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error: Unable to create user');
        }
    };

    return (
        <div className="flex justify-center my-10 items-center" >
            <div className="w-1/2 flex flex-col border-4 border-Deep_Blue rounded-xl shadow-2xl shadow-light_Blue" >
                <h5 className="text-2xl font-cairo font-bold text-Dark_Blue mt-5" > إنشاء حساب جديد </h5>
                {message === "Please sign in" && <p className='text-xl font-cairo text-Deep_Blue'>حساب موجود من قبل حاول الدخول</p>}
                <form  onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                            type="text"
                            className="inputStyle w-2/3 px-5 py-1 mx-5 mb-2 text-right"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                           
                            placeholder="   اسم المستخدم    "
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="inputStyle w-2/3 px-5 py-1 mx-5 mb-2 text-right"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                           
                            placeholder="    البريد الالكتروني     "
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="inputStyle w-2/3 px-5 py-1 mx-5 mb-2 text-right"
                            value={adresse}
                            onChange={(e) => setAdresse(e.target.value)}
                            
                            placeholder="    العنوان    "
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="number"
                            className="inputStyle w-2/3 px-5 py-1 mx-5 mb-2 text-right"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                            
                            placeholder="   رقم الهاتف     "
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="inputStyle w-2/3 px-5 py-1 mx-5 mb-2 text-right"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            
                            placeholder="   كلمة السر"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="inputStyle w-2/3 px-5 py-1 mx-5 mb-2 text-right"
                            value={verfipassword}
                            onChange={(e) => setVerfipassword(e.target.value)}
                            
                            placeholder="    تأكيد  كلمة السر"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn_Bleu w-2/3 mt-5 mb-2"
                        
                    >
                        تسجيل
                    </button>
                </form>
                <div className="text-center mt-3 mb-4 font-cairo text-Deep_Blue" >
                    <Link to="/login" style={{ textDecoration: "underline" }}> لديك حساب، قم بتسجيل الدخول </Link>
                </div>
               
            </div>
        </div>
    );
}
