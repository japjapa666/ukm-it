import { useState } from 'react';

export default function Header({ theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 bg-opacity-95 dark:bg-opacity-95 z-50 shadow-md dark-mode-transition py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-3 shadow-lg">
            <span className="font-bold text-white text-xl">IT</span>
          </div>
          <h1 className="text-2xl font-bold gradient-text">UKM IT</h1>
        </div>

        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#home" className="hover:text-blue-500 transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-blue-500 transition-colors duration-300">About</a>
          <a href="#activities" className="hover:text-blue-500 transition-colors duration-300">Activities</a>
          <a href="#gallery" className="hover:text-blue-500 transition-colors duration-300">Gallery</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors duration-300">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 shadow-md"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <button 
            className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg dark-mode-transition">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="py-2 hover:text-blue-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="py-2 hover:text-blue-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#activities" className="py-2 hover:text-blue-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Activities</a>
            <a href="#gallery" className="py-2 hover:text-blue-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Gallery</a>
            <a href="#contact" className="py-2 hover:text-blue-500 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}