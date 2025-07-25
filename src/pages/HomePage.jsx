import "../styles/pages/HomePage.css";
import Hero from "../components/Hero";
import Brand from "../components/Brand";
import Collections from "../components/Collections";
import Expression from "../components/Expression";
import TeamSuccess from "../components/TeamSuccess";

const HomePage = () => {
  return (
    <div className="main-section">
      <Hero />
      <Brand />
      <Collections />
      <Expression />
      <TeamSuccess />
    </div>
  );
};

export default HomePage;
