import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ganeshImg from "../assets/ganesh.jpg";
import rushikaImg from "../assets/rushika.png";
import vamsiImg from "../assets/vamsi.png";
import "../styles/pages/AboutPage.css";

gsap.registerPlugin(ScrollTrigger);

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const timelineEvents = [
  {
    year: "2021",
    title: "The Idea",
    description:
      "Ganesh Bugatha, a rising fashion influencer, envisions a brand that captures the essence of modern Indian streetwear.",
  },
  {
    year: "2022",
    title: "Building the Team",
    description:
      "The core team assembles: Rushika Uppula joins to lead e-commerce and Vamsi Chilukuri takes the helm of creative direction.",
  },
  {
    year: "2023",
    title: "Brand Launch",
    description:
      "TONES Fashion officially launches online, releasing its first collection of essential tees and cargos to immediate acclaim.",
  },
  {
    year: "2025",
    title: "Expanding Horizons",
    description:
      "The brand expands its collection to include hoodies, shirts, and accessories, defining a complete streetwear wardrobe.",
  },
];

const teamMembers = [
  {
    name: "Ganesh Bugatha",
    role: "CEO & Founder",
    imageUrl: ganeshImg,
  },
  {
    name: "Rushika Uppula",
    role: "Ecommerce Manager",
    imageUrl: rushikaImg,
  },
  {
    name: "Vamsi Chilukuri",
    role: "Creative Lead",
    imageUrl: vamsiImg,
  },
];

const AboutPage = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-item", {
        scrollTrigger: {
          trigger: ".timeline",
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
        opacity: 0,
        y: 50,
        stagger: 0.3,
      });
      gsap.from(".team-member-card", {
        scrollTrigger: {
          trigger: ".team-section",
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        stagger: 0.2,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={container}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="about-page"
    >
      <section className="section intro">
        <h1 className="heading">Our Story</h1>
        <p className="subtext">
          TONES isn't just a brand; it's a canvas for expression. Born from the
          streets and shaped by culture, we create pieces that are both timeless
          and contemporary.
        </p>
      </section>

      <section className="section journey">
        <h2 className="subheading">Our Journey</h2>
        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker" />
              <time className="year">{event.year}</time>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-desc">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section team-section">
        <h2 className="subheading">Meet The Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-member-card">
              <div className="image-container">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="image"
                />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
