import fashionModel from "../assets/fashion_hero.png";
import Button from "../utility/Button";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container-part1">
        <div className="hero-text-container">
          {["TONES", "FASHION"].map((text, index) => (
            <h1 key={index} className="hero-text">
              {text}
            </h1>
          ))}
        </div>

        <div className="hero-image-container">
          <img className="hero-image" src={fashionModel} alt="fashion model" />
        </div>
      </div>
      <div className="hero-container-part2">
        <div className="hero-call-to-action">
          <Button>DISCOVER</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <motion.div
        // initial={{ x: -300 }}
        animate={{
          x: [-300, 300, 300, -300, -300],
          y: [0, 0, 400, 400, 0],
          rotate: [0, 360, 0, -360, 0],
          transition: {
            duration: 6,
            delay: 2,
            ease: "anticipate",
            repeat: Infinity,
            // repeatType: "reverse",
          },
        }}
        className="box"
      ></motion.div>
      <motion.div
        initial={{ x: +300 }}
        animate={{
          x: -300,
          rotate: 180,
          transition: {
            duration: 3,
            delay: 2,
            ease: "anticipate",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        className="circle"
      ></motion.div>
      <div>
        <Button>Shop Now</Button>
      </div> */
}
