// components/Gallery.js
import { useState } from 'react';

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  
  const images = [
    { id: 1, title: "Workshop Web Development" },
    { id: 2, title: "Hackathon 2023" },
    { id: 3, title: "Tech Talk with Industry Expert" },
    { id: 4, title: "Project Demo Day" },
    { id: 5, title: "Study Group Session" },
    { id: 6, title: "Coding Competition" }
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={image.id}
              className="bg-white dark:bg-gray-700 h-48 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition shadow"
              onClick={() => {
                setActiveImage(index);
                setShowModal(true);
              }}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">📷</div>
                <p className="text-gray-700 dark:text-gray-300">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal for image view */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg max-w-2xl w-full" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{images[activeImage].title}</h3>
                <button className="text-gray-700 dark:text-white text-2xl" onClick={() => setShowModal(false)}>×</button>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 h-96 flex items-center justify-center rounded">
                <p className="text-4xl">Image Preview</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}