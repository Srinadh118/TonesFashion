import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import videos from "../lib/videos.js";

const TeamSuccess = () => {
  const containerRef = useRef(null);
  const videoRefs = useRef([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (index !== 0) gsap.set(video, { autoAlpha: 0 });
    });
  }, []);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const segment = width / videos.length;
    const newIndex = Math.min(
      videos.length - 1,
      Math.max(0, Math.floor(x / segment))
    );

    if (newIndex !== currentVideoIndex) {
      gsap.to(videoRefs.current[currentVideoIndex], {
        autoAlpha: 0,
        duration: 0.4,
      });
      gsap.to(videoRefs.current[newIndex], { autoAlpha: 1, duration: 0.4 });
      setCurrentVideoIndex(newIndex);
    }
  };

  const handleTouchStart = useRef(0);
  const handleTouchMove = (e) => {
    const touchX = e.touches[0].clientX;
    const deltaX = touchX - handleTouchStart.current;

    if (Math.abs(deltaX) > 50) {
      let newIndex = currentVideoIndex + (deltaX > 0 ? -1 : 1);
      newIndex = Math.max(0, Math.min(videos.length - 1, newIndex));
      if (newIndex !== currentVideoIndex) {
        gsap.to(videoRefs.current[currentVideoIndex], {
          autoAlpha: 0,
          duration: 0.4,
        });
        gsap.to(videoRefs.current[newIndex], { autoAlpha: 1, duration: 0.4 });
        setCurrentVideoIndex(newIndex);
        handleTouchStart.current = touchX;
      }
    }
  };

  return (
    <div className="success-section">
      <div className="text-container">
        <div className="text-part1">
          <h1>TOTAL</h1>
          <h1>BOOST</h1>
          <h1>CONFIDENCE</h1>
        </div>
        <div className="text-part2">
          <h1>WITH PERFECT</h1>
          <h1>TONES</h1>
          <h1>STYLE</h1>
        </div>
      </div>

      <div
        className="videos-container"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => (handleTouchStart.current = e.touches[0].clientX)}
        onTouchMove={handleTouchMove}
      >
        <div className="brackets">
          <h1>[</h1>
          <div className="videos">
            {videos.map((video, index) => (
              <video
                key={video.id}
                ref={(el) => (videoRefs.current[index] = el)}
                src={video.url}
                className="bracket-video"
                muted
                loop
                autoPlay
                playsInline
              />
            ))}
          </div>
          <h1>]</h1>
        </div>
      </div>
    </div>
  );
};

export default TeamSuccess;
