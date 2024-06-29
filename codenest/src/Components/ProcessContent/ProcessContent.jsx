import React from 'react';
import photo2 from '../../assets/photo4.png';
import './ProcessContent.css'; // Import CSS file for styling

function ProcessContent() {
  return (
    <div>
    <h2 className='fs-bold mt-5 mb-5 text-center'style={{fontSize:'40px' , color:'#18315a'}}>How our process is going on </h2>
    
    <div className="image-container">
        
      <img src={photo2} alt="Working Process" className='center-image' />
    </div>
    </div>
  );
}

export default ProcessContent;
