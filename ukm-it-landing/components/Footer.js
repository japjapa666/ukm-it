// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12 px-4 border-t border-gray-300 dark:border-gray-700">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-2">
                <span className="font-bold text-white">IT</span>
              </div>
              <h3 className="text-xl font-bold">UKM IT</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Unit Kegiatan Mahasiswa Teknologi Informasi Universitas Example.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-white transition">Home</a></li>
              <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-white transition">About</a></li>
              <li><a href="#activities" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-white transition">Activities</a></li>
              <li><a href="#gallery" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-white transition">Gallery</a></li>
              <li><a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition shadow">
                <span>📱</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition shadow">
                <span>💬</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition shadow">
                <span>👥</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition shadow">
                <span>🎥</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-500">
          <p>© {new Date().getFullYear()} UKM IT - Universitas Example. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}