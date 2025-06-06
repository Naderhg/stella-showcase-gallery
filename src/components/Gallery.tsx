
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'beauty', label: 'Beauty' },
    { id: 'editorial', label: 'Editorial' },
    { id: 'commercial', label: 'Commercial' }
  ];

  const images = [
    { id: 1, category: 'fashion', url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Fashion portrait' },
    { id: 2, category: 'beauty', url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Beauty shot' },
    { id: 3, category: 'editorial', url: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Editorial work' },
    { id: 4, category: 'fashion', url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Fashion model' },
    { id: 5, category: 'commercial', url: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Commercial shoot' },
    { id: 6, category: 'beauty', url: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Beauty portrait' },
    { id: 7, category: 'editorial', url: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Editorial fashion' },
    { id: 8, category: 'fashion', url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Fashion photography' },
    { id: 9, category: 'commercial', url: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Commercial model' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my work across fashion, beauty, editorial, and commercial photography
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 font-inter font-medium transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-gold-500 hover:bg-gold-600 text-black' 
                  : 'border-gray-300 hover:border-gold-500 hover:text-gold-600'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-inter text-sm uppercase tracking-wider">
                    {image.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
