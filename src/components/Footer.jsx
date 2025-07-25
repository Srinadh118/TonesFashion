import "../styles/components/Footer.css";
import BrandLogo from "../utility/BrandLogo";
import Button from "../utility/Button";

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <div className="top-container">
          <BrandLogo />
          <div className="get-in-touch">
            <div className="text-container">
              <h3>GET</h3>
              <h3>IN</h3>
              <h3>TOUCH</h3>
            </div>
            <div className="input-container">
              <Button className="btn theme-accent">
                <input type="text" placeholder="Email" />
              </Button>
            </div>
          </div>
        </div>
        <div className="skew-container">
          <div className="skew-text" data-text="TONES">
            TONES
          </div>
        </div>
        <div className="bottom-container">
          <div className="copy-right">
            <h5>&copy; TONES FASHION</h5>
            <h6>ALL RIGHTS RESERVED</h6>
          </div>
          <div className="policy">
            {[
              "Exchange/Return Request",
              "Terms and Conditions",
              "Privacy Policy",
            ].map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          <div className="social">
            <a
              href="https://www.instagram.com/tones_fashion?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="blank"
            >
              Instagram
            </a>
          </div>
          <div className="design">
            <span>DESIGNED BY</span>
            <span>
              <a href="https://github.com/Srinadh118" target="blank">
                SRINADH
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
