export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900 dark:text-white">Contact Us</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-white">Get In Touch</h3>
            <p className="text-neutral-700 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
              Tertarik untuk bergabung dengan UKM CIT atau ingin berkolaborasi dengan kami? 
              Jangan ragu untuk menghubungi kami melalui informasi kontak di bawah.
            </p>
            
            {/* Info Bergabung dengan Link ke Google Form */}
            <div className="bg-primary-50 dark:bg-primary-900 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">Bergabung dengan UKM CIT</h4>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                Daftar sekarang untuk menjadi bagian dari komunitas teknologi terbaik di kampus!
              </p>
              <a 
                href="https://docs.google.com/forms/d/e/your-form-id/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 dark:bg-secondary-500 dark:hover:bg-secondary-600 rounded-lg font-medium text-white transition shadow-lg hover:shadow-xl"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg text-center shadow">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📍</span>
              </div>
              <h4 className="font-semibold mb-2 text-neutral-900 dark:text-white">Location</h4>
              <p className="text-neutral-700 dark:text-neutral-300">Jl. K.H Samanhudi No.84-86, Purwosari, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57149</p>
            </div>
            
            <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg text-center shadow">
              <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📧</span>
              </div>
              <h4 className="font-semibold mb-2 text-neutral-900 dark:text-white">Email</h4>
              <p className="text-neutral-700 dark:text-neutral-300">cit@tsu.ac.id</p>
            </div>
            
            <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg text-center shadow">
              <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-neutral-900 text-xl">📞</span>
              </div>
              <h4 className="font-semibold mb-2 text-neutral-900 dark:text-white">Telepon</h4>
              <p className="text-neutral-700 dark:text-neutral-300">+62 882-3258-7334</p>
            </div>
            
            <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg text-center shadow">
              <div className="w-12 h-12 bg-neutral-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">💬</span>
              </div>
              <h4 className="font-semibold mb-2 text-neutral-900 dark:text-white">Social Media</h4>
              <div className="flex justify-center space-x-3 mt-2">
                <a href="https://www.instagram.com/cit.tsu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-primary-500 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition text-2xl">
                  <span className="sr-only">Instagram</span>
                  📱
                </a>
                <a href="https://discord.gg/tvQqVErV" className="text-secondary-500 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300 transition text-2xl">
                  <span className="sr-only">Discord</span>
                  💬
                </a>
              </div>
            </div>
          </div>
          
          {/* Peta Lokasi */}
          <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white text-center">Lokasi Kami</h4>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.072731683428!2d110.79657107431886!3d-7.567049674734941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a142c55e64769%3A0x9bb451d3422cd0c!2sTiga%20Serangkai%20University%20(TSU)!5e0!3m2!1sid!2sid!4v1757569283188!5m2!1sid!2sid"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
            <p className="text-center text-neutral-600 dark:text-neutral-400 mt-4">
              Jl. K.H Samanhudi No.84-86, Purwosari, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57149</p>
          </div>
        </div>
      </div>
    </section>
  );
}