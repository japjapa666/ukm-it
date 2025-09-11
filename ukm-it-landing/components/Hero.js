// components/Hero.js
import { useEffect, useState } from 'react';

export default function Hero({ onLearnMoreClick }) {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Technology Community",
    "Learning Platform",
    "Innovation Hub"
  ];

  // URL Google Form untuk pendaftaran
  const googleFormUrl = "https://docs.google.com/forms/d/e/your-form-id/viewform";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-white to-accent-100 dark:from-neutral-900 dark:to-neutral-800 transition-colors duration-300">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-neutral-900 dark:text-white">
          Community of Information Technology
        </h1>
        <div className="h-12 overflow-hidden">
          <div 
            className="text-2xl md:text-4xl text-primary-500 dark:text-secondary-500 transition-transform duration-500"
            style={{ transform: `translateY(-${currentText * 100}%)` }}
          >
            {texts.map((text, index) => (
              <div key={index} className="h-12 flex items-center justify-center">
                {text}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-8 max-w-2xl mx-auto text-neutral-700 dark:text-neutral-300">
          Wadah bagi mahasiswa yang tertarik dalam dunia teknologi informasi untuk belajar, berkolaborasi, dan berinovasi.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary-500 hover:bg-primary-600 dark:bg-secondary-500 dark:hover:bg-secondary-600 rounded-lg font-medium text-white transition shadow-lg hover:shadow-xl text-center"
          >
            Join Us
          </a>
          <button 
            onClick={onLearnMoreClick}
            className="px-6 py-3 bg-transparent border border-neutral-900 dark:border-white text-neutral-900 dark:text-white hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-neutral-900 rounded-lg font-medium transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}