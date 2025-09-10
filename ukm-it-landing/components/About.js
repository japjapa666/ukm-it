// components/About.js
export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              UKM IT adalah unit kegiatan mahasiswa yang fokus pada pengembangan kemampuan di bidang teknologi informasi. 
              Kami menyediakan wadah untuk mahasiswa mengembangkan minat dan bakat dalam programming, desain, jaringan, dan teknologi terkini.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Sejak didirikan pada tahun 2010, kami telah menghasilkan berbagai project inovatif dan membantu anggota 
              mengembangkan karir di industri teknologi.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center shadow transition-colors duration-300">
              <div className="text-4xl font-bold text-blue-500 dark:text-blue-400 mb-2">500+</div>
              <div className="text-gray-700 dark:text-gray-300">Members</div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center shadow transition-colors duration-300">
              <div className="text-4xl font-bold text-blue-500 dark:text-blue-400 mb-2">50+</div>
              <div className="text-gray-700 dark:text-gray-300">Projects</div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center shadow transition-colors duration-300">
              <div className="text-4xl font-bold text-blue-500 dark:text-blue-400 mb-2">30+</div>
              <div className="text-gray-700 dark:text-gray-300">Events</div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center shadow transition-colors duration-300">
              <div className="text-4xl font-bold text-blue-500 dark:text-blue-400 mb-2">12</div>
              <div className="text-gray-700 dark:text-gray-300">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}