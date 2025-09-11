import { useState } from 'react';
import { downloadCalendarEvent } from '../utils/calendarUtils';

export default function ScheduleModal({ isOpen, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Data jadwal kegiatan (dapat diganti dengan data dari API)
  const scheduleData = {
    events: [
      {
        id: 1,
        title: "Workshop Red Hat",
        category: "workshop",
        date: "15 April 2024",
        time: "08:00 - 13:00",
        location: "C.2",
        speaker: "Bjorka",
        description: "Workshop intensif pengamanan website dengan Red Hat linux.",
        capacity: 30,
        registered: 28
      },
      {
        id: 2,
        title: "Tech Talk: The Unseen Entry: Advancing Beyond Basics",
        category: "tech-talk",
        date: "20 Juni 2025",
        time: "09:00 - 12:00",
        location: "C.2",
        speaker: "Bayu Fedra (Security Engineer at Singapore.co)",
        description: "Diskusi tentang pengamanan data dan bagaimana mempersiapkan kemanan dengan baik.",
        capacity: 100,
        registered: 85
      },
      {
        id: 3,
        title: "Study Group: React Native",
        category: "study-group",
        date: "16 Mei 2025",
        time: "09:00 - 12:00",
        location: "Lab 2",
        speaker: "Alief A.",
        description: "Sesi belajar bersama membangun aplikasi mobile dengan React Native.",
        capacity: 25,
        registered: 20
      },
      {
        id: 4,
        title: "Study Group: Frontend Web",
        category: "study-group",
        date: "23 Mei 2025",
        time: "09:00 - 12:00",
        location: "Lab 2",
        speaker: "Alief A.",
        description: "Sesi belajar bersama membangun sisi Frontend Website.",
        capacity: 25,
        registered: 20
      },
      {
        id: 5,
        title: "Study Group: Backend Web",
        category: "study-group",
        date: "30 Mei 2025",
        time: "09:00 - 12:00",
        location: "Lab 2",
        speaker: "Alief A.",
        description: "Sesi belajar bersama membangun sisi Backend Website.",
        capacity: 25,
        registered: 20
      }
    ],
    categories: [
      { id: 'all', name: 'Semua Kegiatan' },
      { id: 'workshop', name: 'Workshop' },
      { id: 'tech-talk', name: 'Tech Talk' },
      { id: 'competition', name: 'Kompetisi' },
      { id: 'study-group', name: 'Study Group' }
    ]
  };

  const filteredEvents = selectedCategory === 'all' 
    ? scheduleData.events 
    : scheduleData.events.filter(event => event.category === selectedCategory);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseDetail = () => {
    setSelectedEvent(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Jadwal Kegiatan UKM IT</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Filter Kategori */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Filter Berdasarkan Kategori</h3>
          <div className="flex flex-wrap gap-2">
            {scheduleData.categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {selectedEvent ? (
          /* Detail Kegiatan */
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <button 
              onClick={handleCloseDetail}
              className="mb-4 text-blue-500 hover:text-blue-700 dark:text-blue-400 flex items-center"
            >
              ← Kembali ke Daftar Jadwal
            </button>
            
            <h3 className="text-xl font-bold mb-4">{selectedEvent.title}</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Informasi Kegiatan</h4>
                <div className="space-y-2">
                  <p><span className="font-medium">Tanggal:</span> {selectedEvent.date}</p>
                  <p><span className="font-medium">Waktu:</span> {selectedEvent.time}</p>
                  <p><span className="font-medium">Lokasi:</span> {selectedEvent.location}</p>
                  <p><span className="font-medium">Pembicara:</span> {selectedEvent.speaker}</p>
                  <p>
                    <span className="font-medium">Kuota:</span> {selectedEvent.registered}/{selectedEvent.capacity} peserta
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mt-1">
                      <div 
                        className="bg-blue-500 h-2.5 rounded-full" 
                        style={{ width: `${(selectedEvent.registered / selectedEvent.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Deskripsi</h4>
                <p className="text-gray-700 dark:text-gray-300">{selectedEvent.description}</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Daftar Kegiatan
              </button>
              
              <button 
                onClick={() => downloadCalendarEvent(selectedEvent)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500 flex items-center"
                >
                <span className="mr-2">⏰</span> Tambah ke Kalender
                </button>
            </div>
          </div>
        ) : (
          /* Daftar Kegiatan */
          <div className="space-y-4">
            {filteredEvents.length === 0 ? (
              <p className="text-center py-8 text-gray-500">Tidak ada kegiatan untuk kategori yang dipilih.</p>
            ) : (
              filteredEvents.map(event => (
                <div 
                  key={event.id} 
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition"
                  onClick={() => handleEventClick(event)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{event.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {event.date} • {event.time} • {event.location}
                      </p>
                    </div>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                      {scheduleData.categories.find(cat => cat.id === event.category)?.name}
                    </span>
                  </div>
                  
                  <div className="flex items-center mt-3 text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      {event.registered}/{event.capacity} terdaftar
                    </span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2 mx-3">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Footer dengan info tambahan */}
        {!selectedEvent && (
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              📅 Jadwal dapat berubah. Silakan periksa regularly untuk update terbaru.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}