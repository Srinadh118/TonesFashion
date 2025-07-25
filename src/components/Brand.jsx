import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Brand = () => {
  const innerBoxRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.to(innerBoxRef.current, {
      y: "-30vh",
      ease: "none",
      scrollTrigger: {
        trigger: innerBoxRef.current,
        start: "top bottom", // start when inner-box enters bottom of viewport
        end: "top top", // ends when it reaches top
        scrub: true,
      },
    });

    gsap.to(videoRef.current, {
      scale: 3.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "center center", // start scaling when video reaches center
        endTrigger: innerBoxRef.current,
        end: "bottom top", // stop when inner-box is out of screen
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="brand-showcase">
      <div className="inner-box" ref={innerBoxRef}>
        <div className="top">
          <h2>DESIGNED TO ELEVATE</h2>
          <p>
            Our name, "TONES," symbolizes the diversity of hues and shades in
            life and fashion, echoing our commitment to inclusivity and
            self-expression.
          </p>
        </div>
        <div className="middle">
          <div className="video-container" ref={videoRef}>
            <video src="/brand.mp4" autoPlay loop muted></video>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span>Black</span>
            <span>White</span>
            <span>Beige</span>
          </div>
          <div className="right">
            <h2>SELF EXPRESSION</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
