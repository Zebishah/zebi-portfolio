import './App.css';
import React, { useEffect, useState } from 'react';
import About from './modules/About';
import Blog from './modules/Blog';
import CVSection from './modules/CVSection';
import Contact from './modules/Contact';
import Footer from './modules/Footer';
import MainPage from './modules/MainPage';
import Navbar from './modules/Navbar';
import Projects from './modules/Projects';
import Skills from './modules/Skills';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <div className="flex flex-col bg-[#3a3f44] w-full overflow-x-none">
        <Navbar />
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={
            <>

              <MainPage />
              <About />
              <Skills />
              <Projects />
              <CVSection />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
