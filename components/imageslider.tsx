import React, { useState } from "react";

const images = [
  { src: "/hp_icon_130911.svg", alt: "HP Icon" },
  // Add more images here
];

const ImageSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((current + 1) % images.length);

  return (
    <div className="relative w-[100px] h-[100px] mx-auto">
      <img
        src={images[current].src}
        alt={images[current].alt}
        className="w-full h-full object-contain rounded shadow"
      />
      <button
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-700 text-white rounded-full p-1"
        onClick={prevSlide}
        aria-label="Previous"
      >
        &#8592;
      </button>
      <button
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-700 text-white rounded-full p-1"
        onClick={nextSlide}
        aria-label="Next"
      >
        &#8594;
      </button>
      <div className="flex justify-center mt-2 space-x-1">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full ${idx === current ? "bg-blue-500" : "bg-gray-300"}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
