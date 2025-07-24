import "../styles/pages/HomePage.css";
import Hero from "../components/Hero";
import Brand from "../components/Brand";
import Collections from "../components/Collections";
import Expression from "../components/Expression";

const HomePage = () => {
  return (
    <div className="main-section">
      <Hero />
      <Brand />
      <Collections />
      <Expression />
      <div className="success-section">
        <h1>Success Section</h1>
      </div>
    </div>
  );
};

export default HomePage;
