import React from "react";

interface GallerySectionProps {
  galleryImages: string[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ galleryImages }) => {
  if (!galleryImages || galleryImages.length === 0) return null;
  
  return (
  <div className="bg-black py-16 px-4 md:px-8">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
        Galeri
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};
