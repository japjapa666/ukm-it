// pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Activities from '../components/Activities';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AboutModal from '../components/AboutModal';

export default function Home() {
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState(true);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(storedTheme);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white dark:bg-neutral-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white transition-colors duration-300">
      <Head>
        <title>UKM IT - Universitas Example</title>
        <meta name="description" content="Unit Kegiatan Mahasiswa Teknologi Informasi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header theme={theme} setTheme={setTheme} />
      <Hero 
        onLearnMoreClick={() => setIsAboutModalOpen(true)} 
      />
      <About />
      <Activities />
      <Gallery />
      <Contact />
      <Footer />
      
      <AboutModal 
        isOpen={isAboutModalOpen} 
        onClose={() => setIsAboutModalOpen(false)} 
      />
    </div>
  );
}