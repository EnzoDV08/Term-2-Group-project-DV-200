import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Componets/StyleSheets/Home.css';
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

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const manualPropertyData = [
    {
      id: 1,
      name: 'Elarduspark Apartment',
      location: 'Pretoria, Gauteng',
      bed: 2,
      price: 3500000,
      image: Img1,
    },
    {
      id: 2,
      name: 'Mooikloof Mansion',
      location: 'Pretoria, Gauteng',
      bed: 4,
      price: 7500000,
      image: Img2,
    },
    {
      id: 3,
      name: 'Spacious Condo',
      location: 'Cape Town, Western Cape',
      bed: 2,
      price: 4500000,
      image: Img3,
    },
    {
      id: 4,
      name: 'Luxury Villa',
      location: 'Johannesburg, Gauteng',
      bed: 5,
      price: 10000000,
      image: Img4,
    },
    {
      id: 5,
      name: 'Modern Townhouse',
      location: 'Durban, KwaZulu-Natal',
      bed: 3,
      price: 2500000,
      image: Img5,
    },
    {
      id: 6,
      name: 'Seaside Cottage',
      location: 'Port Elizabeth, Eastern Cape',
      bed: 3,
      price: 1800000,
      image: Img6,
    },
    {
      id: 7,
      name: 'Country Estate',
      location: 'Stellenbosch, Western Cape',
      bed: 6,
      price: 8500000,
      image: Img7,
    },
    {
      id: 8,
      name: 'Riverside Retreat',
      location: 'Nelspruit, Mpumalanga',
      bed: 3,
      price: 4200000,
      image: Img8,
    },
    {
      id: 9,
      name: 'Hilltop Hideaway',
      location: 'Pietermaritzburg, KwaZulu-Natal',
      bed: 3,
      price: 3800000,
      image: Img9,
    },
    {
      id: 10,
      name: 'City Loft',
      location: 'Johannesburg, Gauteng',
      bed: 4,
      price: 3200000,
      image: Img10,
    },
    {
      id: 11,
      name: 'Safari Lodge',
      location: 'Hoedspruit, Limpopo',
      bed: 4,
      price: 8900000,
      image: Img11,
    },
    {
      id: 12,
      name: 'Mountain Chalet',
      location: 'Clarens, Free State',
      bed: 4,
      price: 5500000,
      image: Img12,
    },
    {
      id: 13,
      name: 'Wine Farm',
      location: 'Franschhoek, Western Cape',
      bed: 5,
      price: 12500000,
      image: Img13,
    },
    {
      id: 14,
      name: 'Golf Estate',
      location: 'Mossel Bay, Western Cape',
      bed: 10,
      price: 6700000,
      image: Img14,
    },
    {
      id: 15,
      name: 'Coastal Villa',
      location: 'Ballito, KwaZulu-Natal',
      bed: 6,
      price: 4900000,
      image: Img15,
    },
    {
      id: 16,
      name: 'Urban Penthouse',
      location: 'Sandton, Gauteng',
      bed: 5,
      price: 8900000,
      image: Img16,
    },
  ];



  useEffect(() => {
    setProperties(manualPropertyData);
    setFilteredProperties(manualPropertyData);
  }, []);

  useEffect(() => {
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
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 px-2">
        {filteredProperties.map(property => (
          <div key={property.id} className="col-3">
            <div className="card property-card" style={{ backgroundColor: '#343a40', color: 'white' }}>
              <img src={property.image} alt={property.name} className="card-img-top property-image" />
              <div className="card-body property-details">
                <h5 className="card-title property-name">{property.name}</h5>
                <p className="card-text property-location">{property.location}</p>
                <p className="card-text property-location">Bedrooms: {property.bed}</p>
                <p className="card-text property-price">R{property.price}</p>
                <Link to="/PropertyDetail" className='btn-1'><p>Details</p></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
