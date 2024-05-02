import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Componets/StyleSheets/SpecificProperty.css';

const SpecificProperty = () => {
  return (
    <div>
      <div>
        <img src="#" alt="Property" />
      </div>
      <div>
        <h2>Beautiful Home</h2>
        <p>Bedrooms: 3</p>
        <p>Price: $250,000</p>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit velit id malesuada dapibus. Integer sagittis velit ut arcu ultricies, non placerat libero ullamcorper. Nullam in felis id ex commodo efficitur. Phasellus vitae dolor a metus tincidunt aliquet.</p>
      </div>
    </div>
  );
}

export default SpecificProperty;