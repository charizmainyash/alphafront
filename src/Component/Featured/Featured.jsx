// eslint-disable-next-line no-unused-vars
import React, { useState , useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import { VideoCard } from '../VideoCard/VideoCard';
import './Featured.css';



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
      className="f-main-text text-center text-9xl font-bold text-white"
    >
      {placeholder}
      
    </h1>
  );
};








export const Featured = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const heading = [
    'FEATURED WORK'
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
    <div className="featured-container">
      <div className="p-4 featured-section">
        
        {heading.map((service, index) => (
       <div>
         <HeadingText key={index} index={index} text={service} startAnimation={index <= currentSentenceIndex} />
        
       </div>

      ))}
      </div>
        <div className={`featured_video_home_section flex flex-wrap justify-between p-2`}>
          <VideoCard
            url="/assets/video_3.mp4"
            title="LABEL VARSHA"
            desc="ACROSS NATION"
          />
          <VideoCard
            url="/assets/video_2.mp4"
            title="MIA BY TANISHQ"
            desc="CELEBRATE THE REAL YOU"
          />
        </div>

        <div className={`featured_video_home_section flex flex-wrap justify-between p-2`}>
          <VideoCard
            // url="https://assets-global.website-files.com/62d57921074baa1ce7275405/63c084f55da78823643adbc3_ThePerfectPants-transcode.mp4"
            url="/assets/video5.mp4"
            title="JUNO"
            desc="GRANDMA CABBAGE"
          />
          <VideoCard
            url="/assets/Tetley.mp4"
            title="TETLEY GREEN TEA"
            desc="#everyBODYcan"
          />
        </div>

    </div>
  );
};
