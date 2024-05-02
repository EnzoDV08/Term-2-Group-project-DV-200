import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Componets/StyleSheets/SpecificProperty.css';
import Img1 from '../Images/Img1.png';
import Img2 from '../Images/Img2.png';
import Img3 from '../Images/Img3.png';
import Img4 from '../Images/Img4.png';
import Img5 from '../Images/Img5.png';
import Img6 from '../Images/Img6.png';
import Img7 from '../Images/Img7.png';
import Img8 from '../Images/Img8.png';
import Img9 from '../Images/Img9.png';
import Img10 from '../Images/Img10.png';
import Img11 from '../Images/Img11.png';
import Img12 from '../Images/Img12.png';
import Img13 from '../Images/Img13.png';
import Img14 from '../Images/Img14.png';
import Img15 from '../Images/Img15.png';
import Img16 from '../Images/Img16.png';
import Image17 from '../Images/image 17.png';
import Image18 from '../Images/image 18.png';
import Image19 from '../Images/image 19.png';
import Image20 from '../Images/image 20.png';

const PropertyDetail = () => {

  return (
    <div className="property-container">
      <div className="property-img">
        <img src={Img1} alt="Property" />
      </div>
      <div className="property-details">
        <h2 className="property-name">Elarduspark Apartment</h2>
        <p className="property-info">Bedrooms: 3</p>
        <p className="property-info">Bathrooms: 2</p>
        <p className="property-info">Size: 9999m3</p>
        <p className="property-info">Amenity: wtp is dit</p>
        <p className="property-info">Price: R350,000</p>
        <p className="property-description">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit velit id malesuada dapibus. Integer sagittis velit ut arcu ultricies, non placerat libero ullamcorper. Nullam in felis id ex commodo efficitur. Phasellus vitae dolor a metus tincidunt aliquet.</p>
        <p>additional Photos:</p>
        <div className='additional-img'>
          <img src={Image17} alt="Property" />
          <img src={Image18} alt="Property" />
          <img src={Image19} alt="Property" />
          <img src={Image20} alt="Property" />

        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
