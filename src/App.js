import React from 'react';
import './App.css';
import './index.css'; 
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  const location = useLocation();
  return (
    <>
    <Navbar />
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
     </Routes>
    </>
  );
}

export default App;
