import React, { useState } from 'react';
import whats from '../../assets/whatsapp.png';
import './FixedImage.css'

function FixedImage() {
  const [isShaking, setIsShaking] = useState(false);

  const handleImageClick = () => {
    // Redirect user to WhatsApp when the image is clicked
    window.location.href = 'https://api.whatsapp.com/send?phone=1234567890'; // Replace with your WhatsApp link
    
    // Add the shake class for animation
    setIsShaking(true);

    // Remove the shake class after the animation completes
    setTimeout(() => {
      setIsShaking(false);
    }, 500);
  };

  return (
    <div className={`fixed-image-container ${isShaking ? 'shake' : ''}`}>
      <a href="https://api.whatsapp.com/send?phone=1234567890" target="_blank" rel="noopener noreferrer">
        {/* Add target="_blank" and rel="noopener noreferrer" for security */}
        <img src={whats} alt="Fixed Image" className="fixed-image" onClick={handleImageClick} />
      </a>
    </div>
  );
}

export default FixedImage;
