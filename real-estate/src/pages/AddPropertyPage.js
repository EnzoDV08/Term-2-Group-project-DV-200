import React, { useState } from 'react';
import '../Componets/StyleSheets/AddPropertyPage.css';

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

  const handleSubmit = event => {
    event.preventDefault();
    // Form submission logic
    console.log(formData);
  };

  return (
    <div>
      <h1>Add Property</h1>
      <form onSubmit={handleSubmit} className="property-form">
        <div className="form-row">
          <div>
            <label htmlFor="name">Property Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label htmlFor="price">Price (in Rand):</label>
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
        </div>
        <div className="form-row">
          <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label htmlFor="image">Upload Image:</label>
            <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPropertyPage;
