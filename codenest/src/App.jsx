import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage/HomePage';
import AboutPage from './Components/Pages/AboutPage/AboutPage';
import ContactPage from './Components/Pages/ContactPage/ContactPage';
import ServicesPage from './Components/Pages/ServicesPage/ServicesPage';
import FixedGif from './Components/FixedGif/FixedGif';
import Popup from './Components/Popup/Popup';



function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/Services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
    
        <FixedGif/>
      </div>
    </Router>
  );
}

export default App;
