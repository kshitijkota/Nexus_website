import React from 'react';
import Slider from 'react-slick';
import './EventSlider.css';

const EventSlider = () => {
  const events = [
    { title: 'Tech Talk', description: 'A session on AI and ML.', date: 'Dec 10, 2024' },
    { title: 'Hackathon', description: '24-hour coding challenge.', date: 'Jan 15, 2025' },
    { title: 'Workshop', description: 'Web development basics.', date: 'Feb 20, 2025' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className="event-slider">
      <h2>Upcoming Events</h2>
      <Slider {...settings}>
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p><strong>{event.date}</strong></p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default EventSlider;
