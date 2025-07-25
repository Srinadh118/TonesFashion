import React, { useState } from "react";
import { images } from "../lib/images";

const formatKey = (label) => label.toLowerCase().replace(/\s/g, "");

const Collections = () => {
  const [activeCollection, setActiveCollection] = useState("oversizedtees");

  const currentImages = images[activeCollection] || [];

  return (
    <div className="collections-section">
      <div className="collections-panel">
        {currentImages.map((img, index) => (
          <div className="collection-image" key={index}>
            <img src={img.src} alt={img.title} />
            <p>
              <span className="title">{img.title}</span>{" "}
              <span className="details">{img.details}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="text-panel">
        {[
          "Oversized Tees",
          "Daily Tees",
          "Tones Original",
          "Shirts",
          "Satin Shirts",
          "Chinos",
          "Accessories",
        ].map((item, index) => (
          <div
            key={index}
            className={`collection-name ${
              formatKey(item) === activeCollection ? "active" : ""
            }`}
            onMouseEnter={() => setActiveCollection(formatKey(item))}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
