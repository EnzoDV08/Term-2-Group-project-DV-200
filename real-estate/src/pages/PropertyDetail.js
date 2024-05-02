import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import '../Componets/StyleSheets/SpecificProperty.css';
import Img14 from '../Images/Img14.png';
import Image17 from '../Images/image 17.png';
import Image18 from '../Images/image 18.png';
import Image19 from '../Images/image 19.png';
import Image20 from '../Images/image 20.png';

const PropertyDetail = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <div className="property-container">
      <div className="property-img">
        <img src={Img14} alt="Property" />
      </div>
      <div className="property-details">
        <h1 className="property-name">Elarduspark Apartment</h1>
        <p className="property-info"><strong>Bedrooms:</strong> 3</p>
        <p className="property-info"><strong>Bathrooms:</strong> 2</p>
        <p className="property-info"><strong>Size:</strong> 9999m<sup>3</sup></p>
        <p className="property-info"><strong>Amenity:</strong> Access to an on-site gym, laundry facilities, and secure parking.</p>
        <p className="property-info"><strong>Price:</strong> R350,000</p>
        <p className="property-description">
          <strong>Description:</strong> Welcome to your dream family home nestled in the serene neighborhood of Greenwood Heights. This immaculate property offers a perfect blend of modern convenience and classic charm, providing an idyllic retreat for you and your loved ones.
          <br /><br />
          As you step through the inviting front door, you're greeted by an abundance of natural light streaming through the large windows, illuminating the spacious living area adorned with hardwood floors and elegant crown molding. The open-concept layout seamlessly connects the living room, dining area, and gourmet kitchen, creating an ideal space for entertaining guests or relaxing with family.
          <br /><br />
          The chef-inspired kitchen boasts granite countertops, stainless steel appliances, and ample storage space, making meal preparation a delight. A cozy breakfast nook overlooking the lush backyard offers the perfect spot to enjoy your morning coffee or casual meals with loved ones.
          <br /><br />
          Retreat to the tranquil master suite featuring a luxurious ensuite bathroom complete with a soaking tub, separate shower, and dual vanity sinks. Three additional bedrooms provide plenty of space for family members or guests, each offering comfort and style.
          <br /><br />
          Step outside to the beautifully landscaped backyard oasis, where you'll find a spacious patio area perfect for al fresco dining or summer barbecues. The expansive lawn area provides plenty of room for outdoor activities and gardening, while mature trees offer shade and privacy.
          <br /><br />
          Conveniently located near top-rated schools, parks, shopping centers, and dining options, this home offers the perfect combination of convenience and relaxation. Don't miss your chance to experience the epitome of suburban living in this charming family home.
        </p>
        <p>Additional Photos:</p>
        <div className='additional-img'>
          <img src={Image17} alt="Property" />
          <img src={Image18} alt="Property" />
          <img src={Image19} alt="Property" />
          <img src={Image20} alt="Property" />
        </div>
      </div>
      <div className="contact-jaco">
        <button>Contact Jaco</button>
      </div>
    </div>
  );
};

export default PropertyDetail;


