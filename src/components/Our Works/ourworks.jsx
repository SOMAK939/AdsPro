import React from "react";
import "./ourworks.css";

import pc_1 from "../../assets/pc1.jpg";
import pc_2 from "../../assets/pc2.jpg";
import pc_3 from "../../assets/pc3.jpg";
import pc_4 from "../../assets/pc4.jpg";

const ourworks = () => {
  return (
    
    <div className="whole">
        <h2 className="works-title">Our Workspace</h2>
      <div className="works">
    
        <div className="work">
          <img src={pc_1} alt="" />
        </div>
        <div className="work">
          <img src={pc_2} alt="" />
        </div>
        <div className="work">
          <img src={pc_3} alt="" />
        </div>
        <div className="work">
          <img src={pc_4} alt="" />
        </div>
      </div>
    </div>
  );
};
export default ourworks;
