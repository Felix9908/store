import axios from 'axios'
import { useState, useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const {setAlertMessage, setShowAlert, setColorAlert} = useContext(ProductContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    }
    try {
      await axios.post("http://localhost:9999/contactUs", data ).then((res)=>{
        if(res.status === 200){
          setShowAlert(true);
          setAlertMessage(res.data + " We will reply to you with an email as soon as possible.");
          setColorAlert("bg-green-500");
        }
      })
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="max-w-md mx-auto p-10">
      <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium text-white">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium text-white">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-medium text-white">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            rows={5}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
