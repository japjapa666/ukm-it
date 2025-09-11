import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  
  // Data gallery dengan foto nyata
  const images = [
    { 
      id: 1, 
      title: "Tech Talk with Industry Expert", 
      category: "tech-talk",
      src: "/gallery/1.jpg",
      description: "Kuliah pakar 'Smart and Fun  Invesment' by Mandiri"
    },
    { 
      id: 2, 
      title: "Makrab 2024", 
      category: "bonding",
      src: "/gallery/2.jpg",
      description: "Malam keakraban anggota CIT"
    },
    { 
      id: 3, 
      title: "Tech Talk with Industry Expert", 
      category: "tech-talk",
      src: "/gallery/3.jpg",
      description: "Sharing session dengan praktisi industri"
    },
    { 
      id: 4, 
      title: "Project Demo Day", 
      category: "project",
      src: "/gallery/4.jpg",
      description: "Presentasi project akhir anggota UKM IT"
    },
    { 
      id: 5, 
      title: "Study Club Session", 
      category: "study",
      src: "/gallery/5.jpg",
      description: "Sesi belajar bersama anggota UKM IT"
    },
    { 
      id: 6, 
      title: "Seminar Cyber Security", 
      category: "tech-talk",
      src: "/gallery/6.jpg",
      description: "Seminar Cyber Security bersama praktisi expert dari Singapore.co"
    }
  ];

  const getCategoryColor = (category) => {
    switch(category) {
      case "workshop": return "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200";
      case "competition": return "bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200";
      case "tech-talk": return "bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-200";
      default: return "bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200";
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900 dark:text-white">Gallery</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={image.id}
              className="bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition shadow group relative"
              onClick={() => {
                setActiveImage(index);
                setShowModal(true);
              }}
            >
              <div className="aspect-w-16 aspect-h-9 relative h-48">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300">👁️ Lihat</span>
                </div>
              </div>
              <div className="p-3">
                <p className="text-neutral-900 dark:text-white text-sm font-medium truncate">{image.title}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(image.category)}`}>
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal for image view */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{images[activeImage].title}</h3>
                <button className="text-neutral-900 dark:text-white text-2xl hover:text-red-500 transition" onClick={() => setShowModal(false)}>×</button>
              </div>
              
              <div className="relative aspect-w-16 aspect-h-9 h-80 mb-4">
                <Image
                  src={images[activeImage].src}
                  alt={images[activeImage].title}
                  fill
                  className="object-contain rounded-lg"
                  sizes="100vw"
                />
              </div>
              
              <div className="mb-4">
                <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(images[activeImage].category)}`}>
                  {images[activeImage].category}
                </span>
              </div>
              
              <p className="text-neutral-700 dark:text-neutral-300">{images[activeImage].description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}