import React, { useState } from 'react';
import axios from 'axios';
import '../Componets/StyleSheets/AddPropertyPage.css'
const AddPropertyPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    description: '',
    image: null
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = event => {
    setFormData({
      ...formData,
      image: event.target.files[0]
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { name, location, price, bedrooms, bathrooms, description, image } = formData;

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('location', location);
      formData.append('price', price);
      formData.append('bedrooms', bedrooms);
      formData.append('bathrooms', bathrooms);
      formData.append('description', description);
      formData.append('image', image);

      await axios.post('https://realty-in-us.p.rapidapi.com/properties/add', formData, {
        headers: {
          'x-rapidapi-host': 'realty-in-us.p.rapidapi.com',
          'x-rapidapi-key': 'YOUR_API_KEY_HERE',
          'Content-Type': 'multipart/form-data'
        }
      });

      // Handle success or navigate to another page
      console.log('Property added successfully');
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };

  return (
    <div>
      <h1>Add Property</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Property Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="bedrooms">Number of Bedrooms:</label>
          <input type="number" id="bedrooms" name="bedrooms" value={formData.bedrooms} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="bathrooms">Number of Bathrooms:</label>
          <input type="number" id="bathrooms" name="bathrooms" value={formData.bathrooms} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="image">Upload Image:</label>
          <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPropertyPage;
