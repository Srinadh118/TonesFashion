import React from "react";
import CanvasExpress from "./CanvasExpress";

const Expression = () => {
  return (
    <div className="expression-section">
      <div className="expression-video-container">
        <div className="expression-frame">
          <CanvasExpress />
        </div>
        {/* <div className="expression-overlay"></div> */}
      </div>
    </div>
  );
};

export default Expression;
