import React from 'react';
import Header from '../components/header'; // Adjust path if necessary
import Navbar from '../components/navbar'; // Adjust path if necessary
import Footer from '../components/footer'; // Adjust path if necessary
import rainVideo from '../assets/rain.mp4'; // Adjust path if necessary
import resumePDF from '../assets/Resume.pdf'; // Adjust path if necessary
import './Resume.css'; // Ensure this CSS file contains the necessary styles

function Resume() {
  return (
    <div className="app-container">
      <video autoPlay loop muted className="app-background-video">
        <source src={rainVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Header />
      <div className="resume-content">
        <iframe
          src={resumePDF}
          title="John Doe Resume"
          width="100%"
          height="1000px"
          style={{ border: 'none' }}
        >
          This browser does not support PDFs. Please download the PDF to view it: 
          <a href={resumePDF}>Download PDF</a>.
        </iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;


