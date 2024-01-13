import React from 'react';
import Header from '../components/header'; // Adjust path if necessary
import Footer from '../components/footer'; // Adjust path if necessary
import rainvideo from '../assets/rain.mp4'; // Adjust path if necessary
import './About.css'; // Ensure this CSS file contains the necessary styles
import profilePhoto from '../assets/wedding.png'; // Adjust path if necessary

function About() {
    const email = "johnmichaelhazukajr@gmail.com";
    const phone = "206-771-3345";

    return (
        <div className="app-container">
            <video autoPlay loop muted className="app-background-video">
                <source src={rainvideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay"></div> {/* Overlay to enhance text visibility */}
            <Header />
          
            <div className="about-page">
                <div className="about-section">
                    <h1>About Me</h1>
                    <p>
                    Hello! I'm John, a dedicated front-end developer with a passion for crafting
beautiful and highly functional web applications. With a strong design sensibility
and a commitment to writing clean, efficient code, I am dedicated to delivering
outstanding digital experiences. I specialize in React and have hands-on experience
with a wide range of modern web technologies.
In addition to my development skills, I am currently pursuing an IT degree at the
University of Kansas and am well on my way to completing a full-stack bootcamp at
the University of Oregon for software development. Outside of coding, I enjoy
cherishing moments with my wife and indulging my passion for riding dirtbikes.

Let's build something amazing together!

                    </p>
                </div>
                <div className="contact-section">
                    <div className="photo-container">
                        <img src={profilePhoto} alt="John Michael Hazuka Jr." className="profile-photo" />
                    </div>
                    <div className="contact-info">
                        <h1>John Michael Hazuka Jr.</h1>
                        <p className="title">Software Developer</p>
                        <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
                        <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;

