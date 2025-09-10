// components/Activities.js
import { useState } from 'react';

export default function Activities() {
  const [activeTab, setActiveTab] = useState(0);
  
  const activities = [
    {
      title: "Workshop",
      description: "Pelatihan intensif tentang teknologi terkini seperti web development, mobile apps, cloud computing, dan AI.",
      icon: "🎓"
    },
    {
      title: "Hackathon",
      description: "Kompetisi programming dimana peserta menyelesaikan masalah dengan membuat solusi teknologi dalam waktu terbatas.",
      icon: "💻"
    },
    {
      title: "Tech Talk",
      description: "Sharing session dengan praktisi industri IT untuk berbagi pengalaman dan insight terbaru.",
      icon: "🎤"
    },
    {
      title: "Project Collaboration",
      description: "Kolaborasi membuat project nyata untuk mengasah kemampuan teknis dan soft skills anggota.",
      icon: "🤝"
    }
  ];

  return (
    <section id="activities" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Activities</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setActiveTab(index)}
            >
              <div className="text-4xl mb-4">{activity.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{activity.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow transition-colors duration-300">
          <h3 className="text-2xl font-semibold mb-4">{activities[activeTab].title}</h3>
          <p className="text-gray-700 dark:text-gray-300">{activities[activeTab].description}</p>
          <button className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white transition">
            Lihat Jadwal
          </button>
        </div>
      </div>
    </section>
  );
}