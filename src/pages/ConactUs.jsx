import axios from 'axios';
import React, { useState } from 'react';
export const ContactUs = () => {
  const[name, setName] = useState('');
    const[email, setEmail] = useState('');  
    const[message, setMessage] = useState('');

    const handleSubmit = async (e) => {   
        e.preventDefault();
        console.log(name, email, message);
        const serviceId = 'service_gmvf02s';
        const templateId = 'template_8bter7m';
        const userId = '8ww56zQe8st_8Yyqa';

        const data = {
            service_id: serviceId,
            template_id: templateId,
            user_id: userId,
            template_params: {
                from_name: name,
                from_email: email,
                to_name : 'Jeyamurugan',
                message: message
            }
        };
        try{
            const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
            console.log(res.data);
            setName('');
            setEmail('');
            setMessage('');

        }catch(error){
            console.error(error);
        }
    }
  return (
   <div>
     <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" value={email} onChange={(e) =>setEmail(e.target.value)} />
      <label>Message</label>
      <textarea name="message" value={message} onChange={(e) =>setMessage(e.target.value)} />
      <input type="submit" value="Send" className='but' />
    </form>
   </div>
  );
};