import React from "react";
import { NetflixHeaderCover } from "./NetflixHeaderCover";
import type { WeddingDetails } from "../types";

interface CoverScreenProps {
  weddingDetails: WeddingDetails | null;
  setCurrentScreen: (screen: string) => void;
}

export const CoverScreen: React.FC<CoverScreenProps> = ({
  weddingDetails,
  setCurrentScreen,
}) => {
  if (!weddingDetails) return null;
  
  return (
  <div className="min-h-screen bg-black relative overflow-hidden">
    {/* Background with gradient overlay */}
    <div className="absolute inset-0">
      <div className="absolute inset-0  z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&h=1080&fit=crop)`,
          filter: "brightness(0.3)",
        }}
      ></div>
    </div>
    {/* Content */}
    <NetflixHeaderCover />
    <div className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-4xl">
        <div className="text-white/80 text-lg md:text-xl mb-6 font-light">
          Dengan memohon rahmat dan ridho Allah SWT
        </div>

        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          {weddingDetails.groom}
          <div className="text-red-600 mx-4">&</div>
          {weddingDetails.bride}
        </h1>

        <div className="text-white/80 text-lg md:text-xl mb-12 font-light">
          Mengundang Anda untuk hadir dalam acara pernikahan kami
        </div>

        <button
          onClick={() => setCurrentScreen("profiles")}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold rounded transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  </div>
  );
};
