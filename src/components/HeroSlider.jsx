import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowRight, FaGem, FaStar, FaHeart } from 'react-icons/fa6';
import '../styles/HeroSlider.css'; 

const sloganData = [
  { 
    title: 'Precision in Every Step of Movement', 
    highlight: 'Discipline',
    text: 'Building strong character and professional focus through motion arts.',
    icon: <FaGem />
  },
  { 
    title: 'Unlocking Creative Potential Without Limits', 
    highlight: 'Action',
    text: 'Producing breathtaking stage and screen performances that inspire.',
    icon: <FaStar />
  },
  { 
    title: 'Growing A Vibrant Community Together', 
    highlight: 'Love',
    text: 'Join Rwanda’s most dedicated network of artists and performers.',
    icon: <FaHeart />
  }
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % sloganData.length);
      setIsAnimating(false);
    }, 600);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); 
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="modern-hero-section">
      {/* Background Animated Gradient Shapes */}
      <div className="gradient-sphere sphere-1"></div>
      <div className="gradient-sphere sphere-2"></div>

      <div className="container hs-wrapper">
        <div className={`hs-content-box ${isAnimating ? 'slide-out' : 'slide-in'}`}>
          
          <div className="hs-badge-wrapper">
             <span className="hs-mini-badge">THE IMENA EXPERIENCE</span>
          </div>
          
          <h1 className="hs-main-title">
            {sloganData[index].title} 
            <span className="gradient-text"> {sloganData[index].highlight}</span>
          </h1>
          
          <p className="hs-sub-text">
            {sloganData[index].text}
          </p>

          <div className="hs-action-area">
            <button className="hs-cta-main">
              Join The Movement <FaArrowRight />
            </button>
            <div className="hs-feature-icon">
              {sloganData[index].icon}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="hs-pagination">
            {sloganData.map((_, i) => (
              <div 
                key={i} 
                className={`hs-line-dot ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
