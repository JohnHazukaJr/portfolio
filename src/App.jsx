// src/App.jsx
import React from 'react';
import Header from './components/header';  // Make sure the file name is exactly 'header.jsx'
import Footer from './components/footer';  // Make sure the file name is exactly 'footer.jsx'
import PortfolioSection from './components/portfolio';  // Make sure the file name is exactly 'portfolio.jsx'
import rainvideo from './assets/rain.mp4'; // This is the correct relative path to your video
import './App.css'; // This will include global styles from App.css

function App() {
  return (
    <div className="app-container">
      <video autoPlay loop muted className="app-background-video">
        <source src={rainvideo} type="video/mp4" /> {/* Use the imported video path */}
        Your browser does not support the video tag.
      </video>
      <Header />
      <PortfolioSection />
      <Footer />
    </div>
  );
}

export default App;
