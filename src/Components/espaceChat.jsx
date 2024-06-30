import React, { useState } from 'react';
import { TbMessageChatbot } from "react-icons/tb";

export default function EspaceChat() {
const [messages, setMessages] = useState([
{ text: "مرحبا", isBot: true },
]);
const [inputValue, setInputValue] = useState('');

const sendMessage = async () => {
if (inputValue.trim() === '') return;

const userMessage = { text: inputValue, isBot: false };
setMessages([...messages, userMessage]);
setInputValue('');

try {
const response = await fetch('http://127.0.0.1:8000/chatbot', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({ message: inputValue })
});
const data = await response.json();
const botMessage = { text: data.response, isBot: true };
setMessages(prevMessages => [...prevMessages, botMessage]);
} catch (error) {
console.error('Error:', error);
}
};

return (
<div className="flex flex-col h-screen w-full mb-36">
<div className="flex flex-col items-center p-4 bg-white shadow-md">
<h1 className='text-2xl font-cairo text-Deep_Blue'>مرحبا, انا على استعداد للرد عليك فيما يتعلق بالقانون الجزائري</h1>
<TbMessageChatbot className='text-Deep_Blue' size={100} />
</div>
<div className="flex-grow p-4 overflow-y-auto bg-lightgray rounded-lg w-3/3 ">
{messages.map((message, index) => (
<div key={index} className={`mb-4 ${message.isBot ? 'text-left' : 'text-right'}`}>
<span className={`px-4 py-2 rounded-lg inline-block ${message.isBot ? 'bg-light_Blue' : 'bg-my_yellow'}`}>{message.text}</span>
</div>
))}
</div>
<div className="p-4 bg-my_whitee border-t flex flex-col items-center fixed bottom-0 mx-auto" style={{"width" : "100%"}}>
<input
type="text"
value={inputValue}
onChange={(e) => setInputValue(e.target.value)}
placeholder="اكتب رسالة..."
style={{ direction: 'rtl' }}
className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
onKeyPress={(e) => {
if (e.key === 'Enter') {
sendMessage();
}
}}
/>
<button
onClick={sendMessage}
className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
>
إرسال
</button>
</div>
</div>
);
}