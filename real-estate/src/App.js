import React from 'react';
import './App.css';
import NavBar from './Componets/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetail from './pages/PropertyDetail';
import AddPropertyPage from './pages/AddPropertyPage';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PropertyDetail" element={<PropertyDetail />} />
        <Route path="/AddPropertyPage" element={<AddPropertyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
