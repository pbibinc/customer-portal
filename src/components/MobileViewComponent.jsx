import React from "react";
import "../MobileView.css"; // We'll create this CSS file next

const MobileViewSimulator = ({children}) => {
  return <div className="mobile-view-simulator">{children}</div>;
};

export default MobileViewSimulator;
