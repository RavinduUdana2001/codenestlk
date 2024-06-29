import React, { useState, useEffect } from 'react';
import './Popup.css';

const Popup = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Open popup after 3 seconds
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setShowPopup(false);
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('overlay')) {
            closePopup();
        }
    };

    return (
        <>
            {showPopup && (
                <div className="overlay" onClick={handleOverlayClick}>
                    <div className="popup">
                        <span className="close" onClick={closePopup}>×</span>
                        <div className="popup-content">
                            <h2 className="popup-title">New Year Special Offer!</h2>
                            <p className="popup-message">Get 15% off on all products. Hurry up, limited time offer!</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Popup;
