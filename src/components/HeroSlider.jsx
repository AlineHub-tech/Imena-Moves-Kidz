
import React, { useEffect, useState, useCallback } from 'react';
import { FaBolt, FaGift, FaAppleAlt, FaChevronLeft, FaChevronRight, FaPlayCircle, FaUsers, FaStar } from 'react-icons/fa';
import '../styles/HeroSlider.css'; 
import SlideImg5 from '../assets/d5.jpg'; 
import SlideImg1 from '../assets/d1.jpg'; 
import SlideImg4 from '../assets/d4.jpg'; 
import SlideImg3 from '../assets/d3.jpg'; 


// Amakuru ajyanye na Imena Moves (Mu Cyongereza nkuko byifuzwa)
const slidesData = [
 { title: 'Working Together', icon: FaStar, text: 'enjoyment,displine,love and action.', imageUrl: SlideImg5 },
  { title: 'Talent Development', icon: FaStar, text: 'Trainings and coaching programs for youth.', imageUrl: SlideImg1 },
  { title: 'Creative Workshops', icon: FaUsers, text: 'Join our vibrant performing community today.', imageUrl: SlideImg4 },
  { title: 'Collaboration & Shows', icon: FaPlayCircle, text: 'Partnering with brands for live events.', imageUrl: SlideImg3 },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setIndex(prev => (prev + 1) % slidesData.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); 
    return () => clearInterval(timer);
  }, [nextSlide]);

  const prevSlide = () => {
    setIndex(prev => (prev - 1 + slidesData.length) % slidesData.length);
  };

  const currentSlide = slidesData[index];
  const IconComponent = currentSlide.icon; // Dynamic icon component

  return (
    <section className="hero-slider-container">
      
      <div 
        className="slide-background" 
        style={{ backgroundImage: `url(${currentSlide.imageUrl})` }}
      >
        <div className="slide-overlay"> {/* Added overlay class for better visibility */}
            <div className="slide-content">
                <div className="hero-text-area">
                    <h1>Welcome to Imena Moves</h1>
                    <p>Reshaping motion arts in Rwanda with talent, discipline, and movement.</p>
                    <button className="btn primary-btn">Learn More <i className="fas fa-arrow-right"></i></button>
                </div>

                <div className="slider-promo-area">
                    <h2>
                        <IconComponent className="promo-icon"/> {currentSlide.title}
                    </h2>
                    <p>{currentSlide.text}</p>
                    <div className="slider-controls">
                        <button onClick={prevSlide} aria-label="Previous Slide"><FaChevronLeft /></button>
                        {slidesData.map((_, i) => (
                          <span 
                            key={i} 
                            className={`dot ${i === index ? 'active' : ''}`} 
                            onClick={() => setIndex(i)}
                            aria-label={`Go to slide ${i + 1}`}
                          ></span>
                        ))}
                        <button onClick={nextSlide} aria-label="Next Slide"><FaChevronRight /></button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
