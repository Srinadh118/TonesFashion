const Brand = () => {
  return (
    <div className="brand-showcase">
      <div className="inner-box">
        <div className="top">
          <h2>DESIGNED TO ELEVATE</h2>
          <p>
            Our name, "TONES," symbolizes the diversity of hues and shades in
            life and fashion, echoing our commitment to inclusivity and
            self-expression.
          </p>
        </div>
        <div className="middle">
          <div className="video-container">
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
