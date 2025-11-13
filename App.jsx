import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Finals-Lab-Act-1/Navbar';
import Home from './Finals-Lab-Act-1/Home';
import About from './Finals-Lab-Act-1/About';
import Portfolio from './Finals-Lab-Act-1/Portfolio';
import Contact from './Finals-Lab-Act-1/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

