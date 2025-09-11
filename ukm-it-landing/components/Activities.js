// components/Activities.js
import { useState } from 'react';
import ScheduleModal from './ScheduleModal';

export default function Activities() {
  const [activeTab, setActiveTab] = useState(0);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  
  const activities = [
    {
      title: "Workshop",
      description: "Pelatihan intensif tentang teknologi terkini seperti web development, mobile apps, cloud computing, dan AI.",
      icon: "🎓",
      color: "bg-primary-500"
    },
    {
      title: "Study Club",
      description: "Kegiatan belajar bersama tentang programming, design UI/UX, cyber security, dan masih banyak tema yang akan dipelajari.",
      icon: "💻",
      color: "bg-secondary-500"
    },
    {
      title: "Tech Talk",
      description: "Sharing session dengan praktisi industri IT untuk berbagi pengalaman dan insight terbaru.",
      icon: "🎤",
      color: "bg-accent-500"
    },
    {
      title: "Project Collaboration",
      description: "Kolaborasi membuat project nyata untuk mengasah kemampuan teknis dan soft skills anggota.",
      icon: "🤝",
      color: "bg-neutral-500"
    }
  ];

  return (
    <section id="activities" className="py-20 px-4 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900 dark:text-white">Our Activities</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-neutral-800 p-6 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer card-hover border border-neutral-200 dark:border-neutral-700"
              onMouseEnter={() => setActiveTab(index)}
            >
              <div className={`w-16 h-16 ${activity.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <span className="text-2xl">{activity.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-neutral-900 dark:text-white">{activity.title}</h3>
              <p className="text-neutral-700 dark:text-neutral-300 text-center">{activity.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-neutral-50 dark:bg-neutral-800 p-8 rounded-lg shadow transition-colors duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-white">{activities[activeTab].title}</h3>
          <p className="text-neutral-700 dark:text-neutral-300">{activities[activeTab].description}</p>
          <button 
            onClick={() => setIsScheduleModalOpen(true)}
            className="mt-6 px-6 py-3 bg-primary-500 hover:bg-primary-600 dark:bg-secondary-500 dark:hover:bg-secondary-600 rounded-lg text-white transition shadow-lg hover:shadow-xl"
          >
            Lihat Jadwal
          </button>
        </div>

        <ScheduleModal 
          isOpen={isScheduleModalOpen} 
          onClose={() => setIsScheduleModalOpen(false)} 
        />
      </div>
    </section>
  );
}