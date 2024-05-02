import React from 'react';
import './App.css';
import NavBar from './Componets/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetail from './pages/PropertyDetail';
import AddPropertyPage from './pages/AddPropertyPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Componets/Footer';
import Api from './Componets/API';

function App() {
  return (
    <Router>
      <div className='PageLayout'>
        <div className="content-wrapper">
          <NavBar />
          <Api />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/PropertyDetail" element={<PropertyDetail />} />
            <Route path="/AddPropertyPage" element={<AddPropertyPage />} />
          </Routes>
        </div>
        <div className="footer-wrapper">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
