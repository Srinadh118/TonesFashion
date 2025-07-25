import { useEffect, useState } from "react";
import { preloadImages } from "./preloadImages";
import images from "./images";
import gsap from "gsap";

const Preloader = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    preloadImages(images)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((err) => console.error("Image preload failed", err));
  }, []);

  useEffect(() => {
    if (imagesLoaded) {
      // Trigger GSAP animation
      gsap.to(".image-container", { opacity: 1, duration: 1 });
    }
  }, [imagesLoaded]);

  return <div className="image-container" style={{ opacity: 0 }}></div>;
};

export default Preloader;
