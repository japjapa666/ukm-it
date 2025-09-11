// components/About.js
export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900 dark:text-white">About Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-white">Who We Are</h3>
            <p className="text-neutral-700 dark:text-neutral-300 mb-6">
              UKM CIT adalah unit kegiatan mahasiswa yang fokus pada pengembangan kemampuan di bidang teknologi informasi. 
              Kami menyediakan wadah untuk mahasiswa mengembangkan minat dan bakat dalam programming, desain, jaringan, dan teknologi terkini.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300">
              Sejak didirikan pada tahun 2012, kami telah menghasilkan berbagai project inovatif dan membantu anggota 
              mengembangkan karir di industri teknologi.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary-50 dark:bg-primary-900 p-6 rounded-lg text-center shadow">
              <div className="text-4xl font-bold text-primary-500 dark:text-primary-300 mb-2">300+</div>
              <div className="text-neutral-700 dark:text-neutral-300">Members</div>
            </div>
            <div className="bg-secondary-50 dark:bg-secondary-900 p-6 rounded-lg text-center shadow">
              <div className="text-4xl font-bold text-secondary-500 dark:text-secondary-300 mb-2">20+</div>
              <div className="text-neutral-700 dark:text-neutral-300">Projects</div>
            </div>
            <div className="bg-accent-100 dark:bg-accent-900 p-6 rounded-lg text-center shadow">
              <div className="text-4xl font-bold text-accent-600 dark:text-accent-300 mb-2">20+</div>
              <div className="text-neutral-700 dark:text-neutral-300">Events</div>
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg text-center shadow">
              <div className="text-4xl font-bold text-neutral-700 dark:text-neutral-300 mb-2">10+</div>
              <div className="text-neutral-700 dark:text-neutral-300">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}