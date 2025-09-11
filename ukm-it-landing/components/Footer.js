import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-accent-500 text-neutral-900 py-12 px-4 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center mr-2 overflow-hidden">
                <Image 
                  src="/logo.png" 
                  alt="UKM IT Logo" 
                  width={40} 
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">UKM CIT</h3>
            </div>
            <p className="text-neutral-700">
              Unit Kegiatan Mahasiswa Community of Information Technology Universitas Tiga Serangkai
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-neutral-700 hover:text-primary-500 transition">Home</a></li>
              <li><a href="#about" className="text-neutral-700 hover:text-primary-500 transition">About</a></li>
              <li><a href="#activities" className="text-neutral-700 hover:text-primary-500 transition">Activities</a></li>
              <li><a href="#gallery" className="text-neutral-700 hover:text-primary-500 transition">Gallery</a></li>
              <li><a href="#contact" className="text-neutral-700 hover:text-primary-500 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/cit.tsu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition shadow">
                <span className="text-white">📱</span>
              </a>
              <a href="https://chat.whatsapp.com/Kgc7SM28iFAKJsgy1AkHOR" className="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center hover:bg-secondary-600 transition shadow">
                <span className="text-white">💬</span>
              </a>
              <a href="https://discord.gg/tvQqVErV" className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center hover:bg-neutral-800 transition shadow">
                <span className="text-accent-500">👥</span>
              </a>
              </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-300 mt-8 pt-8 text-center text-neutral-700">
          <p>© {new Date().getFullYear()} UKM CIT - Universitas Tiga Serangkai All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}