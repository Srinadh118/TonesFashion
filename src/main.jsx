import { createRoot } from "react-dom/client";
import "./styles/BrandLoader.css";
import "./styles/modern-normalize.css";
import "./styles/index.css";
import "./styles/utils.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
