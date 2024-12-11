import React from "react";
import "/styles/FloatingImages.css";

function FloatingImages() {
  const images = [
    "https://via.placeholder.com/200x100",
    "https://via.placeholder.com/150x200",
    "https://via.placeholder.com/250x150",
    "https://via.placeholder.com/100x200",
    "https://via.placeholder.com/200x150",
  ];

  const text = "Your mental health matters. Take the first step towards wellness.";

  return (
    <div className="floating-images-container">
      <div className="floating-images">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Floating ${index + 1}`} className="floating-image" />
        ))}
        {images.map((src, index) => (
          <img key={`repeat-${index}`} src={src} alt={`Floating ${index + 1}`} className="floating-image" />
        ))}
      </div>
      <div className="floating-text">
        <div className="text-wrapper">
          <p>{text}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default FloatingImages;
