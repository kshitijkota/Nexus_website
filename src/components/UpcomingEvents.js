// src/components/UpcomingEvents.js

import React, { useState } from 'react';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  // Sample event data
  const events = [
    { id: 1, title: "Hackathon 2024", date: "March 10, 2024", description: "Join us for a 24-hour hackathon event to showcase your skills!" },
    { id: 2, title: "AI Workshop", date: "April 15, 2024", description: "A workshop on the latest trends in Artificial Intelligence." },
    { id: 3, title: "Web Dev Bootcamp", date: "May 20, 2024", description: "Learn the basics of web development in this hands-on bootcamp." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle "Previous" and "Next" button clicks
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === events.length - 1 ? 0 : prevIndex + 1));
  };

  if (events.length === 0) {
    return <div className="upcoming-events">No upcoming events at the moment.</div>;
  }

  const currentEvent = events[currentIndex];

  return (
    <section className="upcoming-events">
      <h2>Upcoming Events</h2>
      <div className="flashcard-container">
        <div className="flashcard">
          <div className="flashcard-content">
            <h3>{currentEvent.title}</h3>
            <p>{currentEvent.date}</p>
            <p>{currentEvent.description}</p>
          </div>
        </div>
      </div>
      <div className="event-navigation">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </section>
  );
};

export default UpcomingEvents;
