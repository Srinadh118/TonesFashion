import React from "react";

const Collections = () => {
  return (
    <div className="collections-section">
      <div className="collections-panel">
        <div className="collection-image">
          <img src="/collections/oversized/o1.png" alt="" />
          <p>
            <span className="title">Storm Weaver Oversized Tee</span>{" "}
            <span className="details">A clean, relaxed aesthetic</span>
          </p>
        </div>
        <div className="collection-image">
          <img src="/collections/oversized/o3.png" alt="" />
          <p>
            <span className="title">Predator Oversized Tee</span>{" "}
            <span className="details">
              keep it simple with sneakers for an easy, laid-back outfit.
            </span>
          </p>
        </div>
        <div className="collection-image">
          <img src="/collections/oversized/o2.png" alt="" />
          <p>
            <span className="title">Anti-Perfect Oversized Tee</span>{" "}
            <span className="details">Cofee Beige</span>
          </p>
        </div>
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
          <div key={index} className="collection-name">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
