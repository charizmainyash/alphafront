// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeadingText = ({ text, startAnimation }) => {
  const [placeholder, setPlaceholder] = useState("");
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
    <div
      ref={ref}
      className="f-main-text text-center text-9xl font-bold text-white"
    >
      {placeholder}
    </div>
  );
};

export const Footer = () => {
  const paragraphs = [
    "Crafting Stories, Capturing Memories!",
    "Alpha Creativity, Zealous Results.",
    "Elevate Your Brand to Alpha Status!",
    "Crafting Legends with Zeal.",
  ];

  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentParagraphIndex(
        (prevIndex) => (prevIndex + 1) % paragraphs.length
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [paragraphs.length]);

  return (
    <>
      <div className="footer_all p-4 bg-black text-white">
        <hr className="border-dashed border-1 border-gray-400 my-8"></hr>
        <div className="footer-link-anim flex">
          <div className="footer-section flex justify-start">
            <div
              className="footer_div1 flex flex-col mx-5"
              style={{ alignItems: "flex-start" }}
            >
              <Link to={"/"} className="button-custom-footer">
                Home
              </Link>
              <Link to={"/about"} className="button-custom-footer">
                About
              </Link>
              <Link to={"/work"} className="button-custom-footer">
                Work
              </Link>
              <Link to={"/contact"} className="button-custom-footer">
                Contact
              </Link>
            </div>

            <div className="footer_div2 mx-1 w-54 ">
              <p
                className="text-gray-400 "
                style={{ alignItems: "flex-start" }}
              >
                SOCIALS
              </p>
              <div className=" flex flex-col justify-start my-2">
                <a
                  href="https://www.linkedin.com/company/alpha-zeal-media-pvt-ltd/"
                  className="button-custom-arrow w-full"
                  target="_blank"
                >
                  LINKDIN
                </a>
                <a
                  href="https://www.instagram.com/alpha.zeal.media?igsh=eGN4YzR2eGl5YzRp"
                  className="button-custom-arrow  w-full"
                  target="_blank"
                >
                  INSTAGRAM
                </a>
                <Link to={"/work"} className="button-custom-arrow  w-full">
                  PINTEREST
                </Link>
              </div>

              <p className="text-gray-400 my-2 mt-4 ">CONTACTS</p>
              <div className="flex flex-col">
                <Link to={"/contact"} className="button-custom-arrow  w-full">
                  hr@alphazealmedia.com
                </Link>
                <Link to={"/contact"} className="button-custom-arrow  w-full">
                  +91-7428969698
                </Link>
              </div>
            </div>
          </div>
          <div className="f-text h-19 w-full transition-all duration-1000 ease-in-out  ">
            <p className="f-text-animated text-white text-center mx-8 text-5xl ">
              {paragraphs[currentParagraphIndex]}
            </p>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-center text-gray-400">
            ©2024 Alpha Zeal Media Pvt Ltd ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </>
  );
};