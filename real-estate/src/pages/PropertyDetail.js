import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    // Fetch property details based on ID from the API
    const fetchPropertyDetails = async () => {
      try {
        const response = await axios.get(`https://realty-in-us.p.rapidapi.com/properties/get-details?id=${id}`, {
          headers: {
            'x-rapidapi-host': 'realty-in-us.p.rapidapi.com',
            'X-RapidAPI-Key': '8896e86008mshcdb4da5dde0a9cap1333cejsna708d8bd7d91'
          }
        });
        setProperty(response.data);
      } catch (error) {
        console.error('Error fetching property details:', error);
      }
    };

    fetchPropertyDetails();
  }, [id]);

  return (
    <div>
      {property ? (
        <div>
          <img src={property.image} alt={property.name} />
          <h1>{property.name}</h1>
          <p>Location: {property.location}</p>
          <p>Price: ${property.price}</p>
          <p>Description: {property.description}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Bathrooms: {property.bathrooms}</p>
          <p>Size: {property.size} sq ft</p>
          <h2>Amenities:</h2>
          <ul>
            {property.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
          <h2>Additional Images:</h2>
          <div>
            {property.additionalImages.map((image, index) => (
              <img key={index} src={image} alt={`Additional ${index + 1}`} />
            ))}
          </div>
        </div>
      ) : (
        <p>Loading property details...</p>
      )}
    </div>
  );
};

export default PropertyDetail;
