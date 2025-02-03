import React from "react";

interface PropertyGalleryProps {
  images: string[];
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  const [currentImage, setCurrentImage] = React.useState(0);

  return (
    <div className="space-y-4">
      <div className="relative">
        <img
          src={images[currentImage]}
          alt="Property"
          className="w-full h-[500px] object-cover rounded-lg"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full ${
                currentImage === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Property view ${index + 1}`}
            className="w-full h-32 object-cover rounded-lg cursor-pointer"
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
}
