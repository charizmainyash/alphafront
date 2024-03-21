// eslint-disable-next-line no-unused-vars
import React, { useState , useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { VideoCard } from '../VideoCard/VideoCard';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import axios from 'axios';
import VideoYouTube from '../VideoCard/VideoYoutube';
import { base_url } from '../../Api/api';

export const Work = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const [works, setWorks] = useState(null);

    async function hangleData() {
        axios.get(`${base_url}/getWork`)
            .then((result) => {
                console.log(result.data.msg);
                setWorks(result.data.msg);
                console.log(works);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        hangleData();
    }, []);

  return (
    <div className='p-2 bg-black text-white'>
        <Header />
        <div className=''>
            <h1 className={`w-main-text text-center font-extrabold text-8xl text-transform:uppercas ${inView ? 'animated' : ''}`} ref={ref}>
                Select Work
            </h1>          
        </div>      
        <div className='w-video-section flex flex-wrap gap-8 p-2'>
        <VideoCard
            url="/assets/video_3.mp4"
            title="LABEL VARSHA"
            desc="ACROSS THE NATION"
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

            {/* <VideoYouTube key="1" url="https://www.youtube.com/watch?v=GNUDN0WLpdo" title="Title" desc="Description" /> */}
            {
                works ?
                      works.map((work, index) => <VideoYouTube key={index} url={work.link} title={work.title} desc={work.description} />)
                      :
                ""      
            }  
        </div>  
        <Footer />  
    </div>
  )
}
