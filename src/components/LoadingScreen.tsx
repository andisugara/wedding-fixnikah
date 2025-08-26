import React from "react";
import NikahFix from "../assets/images/nikahfix.png";

export const LoadingScreen: React.FC = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="flex flex-col items-center justify-center px-4">
      <img
        src={NikahFix}
        alt="NikahFix Logo"
        className="w-32 md:w-64 h-auto mb-8"
      />
      <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-white text-xl mt-8 text-center">
        Menyiapkan undangan spesial untuk Anda...
      </p>
    </div>
  </div>
);
