import React, { useState } from 'react';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Envoi des données de connexion au backend
        fetch('http://127.0.0.1:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: username,
                password: password,
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('signup', true );
                    window.location.href = '/';
                } else {
                    console.error('Token is missing');
                }
            })
            .catch(error => {
                console.error('Error logging in:', error);
            });
    };

    return (
        <div className="flex justify-center my-20 items-center" >
            <div className="w-1/2 flex flex-col border-4 border-Deep_Blue rounded-xl shadow-2xl shadow-light_Blue ">
                <h5 className="text-2xl font-cairo font-bold text-Dark_Blue mt-5" >تسجيل الدخول</h5>
                <form className='m-5' onSubmit={handleSubmit}>
                    <div className="">
                        <input
                            type="text"
                            className="inputStyle w-2/3 px-5 py-1 mx-5 text-right"
                            placeholder="   اسم المستخدم / الريد الإلكتروني"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="inputStyle w-2/3 px-5 py-1 mx-5 my-3 text-right"
                            
                            placeholder="   كلمة السر"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn_Bleu w-2/3 mt-5 mb-2 "
                    >
                        دخول
                    </button>
                </form>
                <div className="text-center mt-3 mb-4 font-cairo text-Deep_Blue" >
                    <a href="/register" style={{ textDecoration: "underline" }}>ليس لديك حساب, قم بالتسجيل</a>
                </div>
            </div>
        </div>
    );
}
