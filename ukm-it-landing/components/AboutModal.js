export default function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Tentang UKM CIT</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Visi</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Menjadi lembaga organisasi mahasiswa Teknik Informasi yang unggul dan inovatif, serta mampu menghasilkan fasilitas dan wadah kreatifitas yang mendukung pengembangan potensi dan keterampilan mahasiswa.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Misi</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Mendorong penelitian di bidang informasi dan teknologi di lingkungan mahasiswa Universitas Tiga Serangkai</li>
              <li>Menjalin kerjasama dengan instansi lain untuk menambah pengalaman lapangan bagi anggota</li>
              <li>Membuat sebuah forum untuk menindaklanjuti adanya suatu perkembangan teknologi khususnya pada bidang teknologi informasi</li>
              </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Program Unggulan</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Study Club</h4>
                <p className="text-sm">Program intensif belajar pemrograman dari dasar hingga advance</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Project Collaboration</h4>
                <p className="text-sm">Kolaborasi membuat project nyata dengan bimbingan mentor</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Tech Competition</h4>
                <p className="text-sm">Kompetisi teknologi internal dan eksternal kampus</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Industry Visit</h4>
                <p className="text-sm">Kunjungan ke perusahaan teknologi untuk belajar langsung</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Benefit Bergabung</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Akses ke workshop dan materi eksklusif</li>
              <li>Kesempatan mengikuti kompetisi dengan dukungan penuh</li>
              <li>Jaringan dengan senior dan profesional di industri</li>
              <li>Sertifikat keanggotaan dan partisipasi</li>
              <li>Ruang coworking dan fasilitas lab komputer</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}