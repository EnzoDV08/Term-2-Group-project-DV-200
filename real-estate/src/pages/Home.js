import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Componets/StyleSheets/Home.css'; // Import CSS file for styling

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    // Fetch properties data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://realty-in-us.p.rapidapi.com/properties/v3/list', {
          headers: {
            'x-rapidapi-host': 'realty-in-us.p.rapidapi.com',
            'x-rapidapi-key': '8896e86008mshcdb4da5dde0a9cap1333cejsna708d8bd7d91'
          }
        });
        setProperties(response.data.properties);
        setFilteredProperties(response.data.properties);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchData();
  }, []);

  

  useEffect(() => {
    // Filter properties based on search term, min price, and max price
    const filtered = properties.filter(property => {
      const matchesSearchTerm = property.name.toLowerCase().includes(searchTerm.toLowerCase());
      const isInRange = (!minPrice || property.price >= minPrice) && (!maxPrice || property.price <= maxPrice);
      return matchesSearchTerm && isInRange;
    });
    setFilteredProperties(filtered);
  }, [properties, searchTerm, minPrice, maxPrice]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleMinPriceChange = event => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = event => {
    setMaxPrice(event.target.value);
  };

  return (
    <div className="home-container">
      <h1 className="title">Available Properties</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search by property name" value={searchTerm} onChange={handleSearch} />
        <input type="number" placeholder="Min Price" value={minPrice} onChange={handleMinPriceChange} />
        <input type="number" placeholder="Max Price" value={maxPrice} onChange={handleMaxPriceChange} />
      </div>
      <div className="properties-container">
        
        {filteredProperties.slice(0, 40).map(property => (
          <div key={property.id} className="property">
            <img src={property.image} alt={property.name} className="property-image" />
            <div className="property-details">
              <h2 className="property-name">{property.name}</h2>
              <p className="property-location">{property.location}</p>
              <p className="property-price">${property.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

