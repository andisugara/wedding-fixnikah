import React from "react";
import NikahFix from "../assets/images/nikahfix.png";

export const NetflixHeaderCover: React.FC = () => (
  <header className="absolute w-full">
    <div className="px-4 md:px-24 py-8">
      <img src={NikahFix} alt="NikahFix Logo" className="w-32 md:w-64 h-auto" />
    </div>
  </header>
);
