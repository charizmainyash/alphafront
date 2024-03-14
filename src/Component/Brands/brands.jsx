import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import logo1 from '/Image/snitch.png'; // Import your logo images
import logo2 from '/Image/bella.png';
import logo3 from '/Image/minimalist.png';
import logo4 from '/Image/amul.png';
import logo5 from '/Image/tetley.png';
import logo6 from '/Image/ajmal_logo.png';
import logo7 from '/Image/daily.png';
import logo8 from '/Image/samsung.png';
import logo9 from '/Image/farak.png';
import logo10 from '/Image/satya.png';
import logo11 from '/Image/pankaj.png';
import logo12 from '/Image/Fastrack_logo.png';
import logo13 from '/Image/pilgrim_logo.png';
import logo14 from '/Image/simba_logo.png';
import logo15 from '/Image/souled_logo.png';


import {  } from "module";



const HeadingText = ({ text, startAnimation }) => {
  const [placeholder, setPlaceholder] = useState('');
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    let isMounted = true;

    function tick() {
      if (isMounted) {
        setPlaceholder((prev) => prev + text[placeholder.length]);
      }
    }

    if (inView && !animationTriggered && startAnimation) {
      if (placeholder.length < text.length) {
        let addChar = setInterval(tick, 100);
        return () => {
          clearInterval(addChar);
          isMounted = false;
        };
      }

      setAnimationTriggered(true);
    }
  }, [inView, animationTriggered, placeholder, startAnimation, text]);

  return (
    <h1
      ref={ref}
      className={`brand_heading text-center text-8xl font-bold `} style={{ margin: '40px 0', color: 'black' }}>
      {placeholder}
      
    </h1>
  );
};








const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15];

export const MovingLogos = () => {
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const containerRef = React.useRef(null);

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const logosWidth = logos.length * 140; // Width of each logo (including margin) multiplied by the number of logos
    const loopInterval = 10; // Interval for loop movement (lower value for faster speed)
    const loopStep = 2; // Movement step for loop
    let position = 0;
    let animationId;

    const moveLogos = () => {
      position -= loopStep;
      setTranslateX(position);

      if (Math.abs(position) >= logosWidth) {
        position = 0; // Reset position when it reaches the end
        setTranslateX(position);
      }
    };

    const loop = () => {
      animationId = setInterval(moveLogos, loopInterval);
    };

    const stopLoop = () => {
      clearInterval(animationId);
    };

    loop();

    return () => stopLoop();
  }, []);

  const setTranslateX = (position) => {
    const logosWrapper = document.getElementById('logosWrapper');
    logosWrapper.style.transform = `translateX(${position}px)`;
  };

  const handleLogoHover = (index) => {
    setHoveredLogo(index);
  };

  const handleLogoLeave = () => {
    setHoveredLogo(null);
  };



  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const heading = [
    'BRANDS WORKED FOR'
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setCurrentSentenceIndex((prevIndex) => prevIndex + 1);
      }, 500); // 2 seconds delay between sentences
    }
  }, [inView, currentSentenceIndex, heading.length]);

  return (
    <Container ref={containerRef}>
      

      <div className="p-4 brand-section h-52">
        
        {heading.map((service, index) => (
       <div>
         <HeadingText key={index} index={index} text={service} startAnimation={index <= currentSentenceIndex} />
        
       </div>

      ))}
      </div>

      {/* <Heading>BRANDS WORKED FOR</Heading> */}
      
      <LogosWrapper id="logosWrapper">
        {logos.map((logo, index) => (
          <Logo
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            onMouseEnter={() => handleLogoHover(index)}
            onMouseLeave={handleLogoLeave}
            hovered={hoveredLogo === index}
          />
        ))}
        {logos.map((logo, index) => (
          <Logo
            key={index + logos.length}
            src={logo}
            alt={`Logo ${index + 1}`}
            onMouseEnter={() => handleLogoHover(index)}
            onMouseLeave={handleLogoLeave}
            hovered={hoveredLogo === index}
          />
        ))}
      </LogosWrapper>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  margin: 20px auto;
  padding: 10px;
  background-color: #f0f0f0;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 6rem; /* Set font size to 6rem */
  margin: 40px 0; /* Add space above and below the heading */
`;

const LogosWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 100px; /* Adjust the width to fit your design */
  height: 100px; /* Adjust the height to fit your design */
  margin-right: 40px; /* Increase margin between logos */
  object-fit: contain; /* Prevent stretching and maintain aspect ratio */
  transition: transform 0.2s;
  transform: ${({ hovered }) => (hovered ? 'translateY(-5px)' : 'none')};
`;


 

