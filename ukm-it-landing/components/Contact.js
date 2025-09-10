// components/Contact.js
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Terima kasih telah menghubungi kami!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Tertarik untuk bergabung dengan UKM IT atau ingin berkolaborasi dengan kami? 
              Jangan ragu untuk menghubungi kami melalui form ini atau melalui informasi kontak di bawah.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  📍
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-700 dark:text-gray-300">Gedung Student Center, Universitas Example</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  📧
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-700 dark:text-gray-300">ukm.it@example.ac.id</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  💬
                </div>
                <div>
                  <h4 className="font-semibold">Social Media</h4>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition">Instagram</a>
                    <a href="#" className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition">Discord</a>
                    <a href="#" className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow transition-colors duration-300">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded font-medium text-white transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}