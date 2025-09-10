// components/Hero.js
import { useEffect, useState } from 'react';

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Technology Community",
    "Learning Platform",
    "Innovation Hub"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          UKM IT Community
        </h1>
        <div className="h-12 overflow-hidden">
          <div 
            className="text-2xl md:text-4xl text-blue-500 dark:text-blue-400 transition-transform duration-500"
            style={{ transform: `translateY(-${currentText * 100}%)` }}
          >
            {texts.map((text, index) => (
              <div key={index} className="h-12 flex items-center justify-center">
                {text}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          Wadah bagi mahasiswa yang tertarik dalam dunia teknologi informasi untuk belajar, berkolaborasi, dan berinovasi.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium text-white transition">
            Join Us
          </button>
          <button className="px-6 py-3 bg-transparent border border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 rounded-lg font-medium transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}