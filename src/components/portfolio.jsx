import React from 'react';
import './portfolio.css'; 
import tackleTimesImage from '../assets/tackle-times.png'
import ThreeNWImage from '../assets/3NW.png'
import EventsImage from '../assets/Events.png'

function PortfolioSection() {
  const portfolioItems = [
    { id: 1, title: '3NW', description: '3NW is a tech startup founded by me and a group of talented peers. We specialize in web design and have a vision to expand into the exciting world of mobile gaming in the future. Our team is dedicated to delivering innovative solutions and creating engaging digital experiences for our clients and users', repoUrl: 'https://github.com/CrisCo116/Big-Brain-Computing', imageUrl: ThreeNWImage },
    { id: 2, title: 'Invite to The Rager', description: 'Invite to the Rager is a powerful Event Search API designed to simplify the process of finding and sharing exciting events. With our API you can effortlessly search for events happening near you discover trending happenings, and access event details with ease.', repoUrl: 'https://github.com/samelimill/event-finder-port', imageUrl: EventsImage},
    { id: 3, title: 'Tackle-Times', description: 'TackleTimes is your go-to solution for staying updated with your favorite NFL teams schedule. Designed for avid football enthusiasts and dedicated fans. TackleTimes offers a comprehensive NFL API that provides real-time access to game schedules matchups and important events for all NFL teams.', imageUrl: tackleTimesImage, repoUrl: 'https://github.com/kpfenning/Tackle-Times' },
    // Add more projects as needed
  ];

  return (
    <section className="portfolio-section">
      <h2>My Portfolio</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {/* Use the imported image as the src */}
            {item.imageUrl && (
              <div className="portfolio-image-container">
                <img src={item.imageUrl} alt={item.title} />
              </div>
            )}
            {item.repoUrl && <a href={item.repoUrl} target="_blank" rel="noopener noreferrer">View Repository</a>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;

