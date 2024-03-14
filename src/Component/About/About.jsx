// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="bg-black text-white p-2 w-full h-full">
      <Header />
      <div className="">
        <h1
          className={`a-main-text my-5 text-left font-extrabold text-8xl text-transform:uppercas ${
            inView ? "animate-featured" : ""
          }`}
          ref={ref}
        >
          Raw, Creative for building strong brands.
        </h1>
      </div>
      <div
        className={`a-text-img flex justify-evenly mt-6 ${
          showText ? "animated" : ""
        }`}
      >
        <div className="a-text p-2 w-3/5">
          
          <p className="about_v1 text-2xl my-6">
            Unleash raw creativity! fortifying brands with a pro touch. Forget
            boring ads, we’re the creative rebels who turn brands into
            blockbusters.
            <br></br>
            <br></br>
            Forget the Filter, Unleash the Real. Connect with your audience on a
            deeper level with Alpha Zeal. We go beyond cookie-cutter campaigns
            and tell your brand's unique story, the raw and the real.
            <br></br>
            <br></br>
            Potent ideas, untamed creativity, professionally brewed for
            strength. We craft unstoppable stories for organic growth and
            emphasize engagement fueled by bold ideas and a vision that matters.
          </p>
          <div className="About_linkbtn ">
          <Link to={"/about"} className="button-custom my-1 ">
            Read Me &#8594;
          </Link>
          <Link to={"/work"} className="button-custom my-1">
            View Our Work &#8594;
          </Link>
          </div>
        </div>
        <div className="a-img w-2/5  p-9">
          <img src="https://imgs.search.brave.com/8m-WZl-2k26iMPCLYANuULptZIkmHa-ev0O5B2Ya0Bs/rs:fit:500:0:0/g:ce/aHR0cDovL2ltYWdl/cy5jbGlwYXJ0cGFu/ZGEuY29tL2Jpa2Ut/Y2xpcGFydC1ibGFj/ay1hbmQtd2hpdGUt/YmxhY2std2hpdGUt/YmljeWNsZS5wbmc"></img>
        </div>
      </div>
      <div className="mt-32">
        <div className=" my-2">
          <h1
          className={`a-desc-head-text text-6xl font-bold text-transform:uppercase ${
            inView ? "animate-featured" : ""
          }`}
          ref={ref}
        >
          Daring creativity, real heart, and brands people love. That's Alpha
          Zeal.
        </h1>
        </div>
        <div className="a-desc flex justify-between flex-wrap mt-7 gap-9">
          <div className="a-desc1 w-1/4 text-xl font-semibold">
            <p>
              <span className="a-des text-gray-400">01</span><span className="a-des"> Exciting ads that stand
              out and captivate.</span>
            </p>
          </div>
          <div className="a-desc2 w-1/4 text-xl font-semibold">
            <p>
              <span className="a-des  text-gray-400">02</span><span className="a-des"> A chat-friendly process
              to dream and discover.</span>
            </p>
          </div>
          <div className="a-desc3 w-1/3 text-xl font-semibold">
            <p>
              <span className="a-des  text-gray-400">03</span><span className="a-des"> Custom stories for your
              brand that truly connect on a personal level.</span>
            </p>
          </div>
          <div className="a-desc4 w-1/4 text-xl font-semibold">
            <p>
              <span className="a-des  text-gray-400">04</span><span className="a-des"> Exceptional results
              delivered by a top-notch team.</span>
            </p>
          </div>
          <div className="a-desc5 w-1/4 text-xl font-semibold">
            <p>
              <span className="a-des text-gray-400">05</span> <span className="a-des">Innovative concepts
              that not only spark inspiration but also foster trust.</span>
            </p>
          </div>
          <div className="a-desc6 w-1/3 text-xl font-semibold">
            <p>
              <span className="a-des  text-gray-400">06</span><span className="a-des"> Tailored engagement
              strategies that resonate and build lasting relationships.</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};