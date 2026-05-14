import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/Carousel.module.css';

const technologies = [
  { name: 'React', icon: '/tech/react.png' },
  { name: 'Next.js', icon: '/tech/next.webp' },
  { name: 'Node.js', icon: '/tech/nodejs-logo.svg' },
  { name: 'TypeScript', icon: '/tech/typescript.svg' },
  { name: 'PostgreSQL', icon: '/tech/postgresql.png' },
  { name: 'MongoDB', icon: '/tech/mongodb-icon.svg' },
  { name: 'MySQL', icon: '/tech/mysql-logo.svg' },
  { name: 'Java', icon: '/tech/java-icon.svg' },
  { name: 'AWS', icon: '/tech/aws.png' },
  { name: 'C#', icon: '/tech/Csharp.png' },
  { name: 'Tailwind CSS', icon: '/tech/tailwind.svg' },
  { name: 'SpringBoot', icon: '/tech/spring.svg' }
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(technologies.length / itemsPerSlide);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Function to select a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // AutoPlay functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentSlide]);

  // Pause autoplay when hovering
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  // Resume autoplay when mouse leaves
  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div 
      className={styles.carousel} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className={`${styles.carouselControl} ${styles.prev}`}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        &#10094;
      </button>

      <div className={styles.carouselTrackContainer}>
        <div 
          className={styles.carouselTrack} 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array(totalSlides).fill().map((_, slideIndex) => (
            <div key={slideIndex} className={styles.carouselSlide}>
              {technologies.slice(
                slideIndex * itemsPerSlide, 
                (slideIndex + 1) * itemsPerSlide
              ).map((tech, techIndex) => (
                <div key={techIndex} className={styles.technologyItem}>
                  <div className={styles.techIcon}>
                    <Image 
                      src={tech.icon} 
                      alt={`${tech.name} icon`} 
                      width={100} 
                      height={100} 
                    />
                  </div>
                  <p className={styles.techName}>{tech.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <button 
        className={`${styles.carouselControl} ${styles.next}`}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        &#10095;
      </button>

      <div className={styles.carouselDots}>
        {Array(totalSlides).fill().map((_, index) => (
          <span 
            key={index} 
            className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`} 
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}