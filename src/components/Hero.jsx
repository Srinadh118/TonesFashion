import { useGSAP } from "@gsap/react";
import fashionModel from "../assets/fashion_hero.png";
import Button from "../utility/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const textRef = useRef(null);
  const textRef2 = useRef(null);

  useGSAP(() => {
    const splitText = new SplitText(textRef.current, {
      type: "chars",
    });
    const splitText2 = new SplitText(textRef2.current, {
      type: "lines",
    });

    const tl = gsap.timeline();
    const stagger = {
      amount: 0.01,
      from: "start",
    };

    tl.from(".hero-image", {
      y: 200,
      duration: 0.8,
      ease: "power2.inOut",
      stagger: stagger,
    });
    tl.from(splitText2.lines, {
      y: 100,
      autoAlpha: 0,
      duration: 0.8,
      ease: "power2.inOut",
      stagger: stagger,
    });

    tl.from(".hero-text", {
      x: -300,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      stagger: stagger,
    });
    tl.from(splitText.chars, {
      y: 100,
      autoAlpha: 0,
      duration: 0.8,
      ease: "power2.inOut",
      stagger: 0.1,
    });
  });

  return (
    <AnimatePresence>
      <div className="hero-section">
        <div className="hero-container-part1">
          <div className="hero-text-container">
            {["TONES", "FASHION"].map((text, index) => (
              <h1 key={index} className="hero-text" ref={textRef}>
                {text}
              </h1>
            ))}
          </div>

          <div className="hero-image-container">
            <img
              className="hero-image"
              src={fashionModel}
              alt="fashion model"
            />
          </div>
        </div>
        <div className="hero-container-part2">
          <div className="hero-text-container">
            <h2 className="hero-text-2" ref={textRef2}>
              The best way to express your style is with our exclusive
              collection of fashion products.
            </h2>
          </div>
          <div className="hero-call-to-action">
            <Link to="/products">
              <Button className="btn light-back">DISCOVER</Button>
            </Link>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Hero;
