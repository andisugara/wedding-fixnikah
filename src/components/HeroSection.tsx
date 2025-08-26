import React from "react";
import { Play, Info, Volume2, VolumeX } from "lucide-react";
import type { WeddingDetails } from "../types";

interface HeroSectionProps {
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  setShowModal: (show: boolean) => void;
  setActiveSection: (section: string | null) => void;
  weddingDetails: WeddingDetails | null;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  isMuted,
  setIsMuted,
  setShowModal,
  setActiveSection,
  weddingDetails,
}) => {
  if (!weddingDetails) return null;
  
  return (
  <div className="relative h-screen">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&h=1080&fit=crop)`,
          filter: "brightness(0.4)",
        }}
      ></div>
    </div>

    <div className="relative z-20 flex items-center h-full px-4 md:px-8">
      <div className="max-w-2xl">
        <div className="mb-4">
          <span className="bg-red-600 text-white px-3 py-1 text-sm font-bold rounded-sm">
            N
          </span>
          <span className="text-white/80 ml-3 text-sm font-light tracking-wider">
            WEDDING SERIES
          </span>
        </div>

        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {weddingDetails.groom} <br />
          <span className="text-red-600">&</span> {weddingDetails.bride}
        </h1>

        <div className="flex items-center space-x-4 mb-6 text-sm">
          <span className="text-green-400 font-bold">99% Match</span>
          <span className="text-white/80">2025</span>
          <span className="border border-white/50 text-white/80 px-2 py-1 text-xs rounded">
            HD
          </span>
          <span className="text-white/80">Wedding Special</span>
        </div>

        <p className="text-white/90 text-lg mb-8 max-w-lg leading-relaxed font-light">
          Dimulai dari sebuah pertemuan sederhana, cinta mereka tumbuh perlahan,
          melintasi musim dan waktu. Kini, mereka berdiri di ambang janji suci,
          siap melangkah ke panggung kehidupan bersama.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => setShowModal(true)}
            className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded flex items-center space-x-2 transition-all duration-300 font-bold text-lg"
          >
            <Play size={20} />
            <span>Play</span>
          </button>

          <button
            onClick={() => setActiveSection("story")}
            className="bg-gray-600/70 hover:bg-gray-500/70 text-white px-8 py-3 rounded flex items-center space-x-2 transition-all duration-300 font-bold text-lg"
          >
            <Info size={20} />
            <span>More Info</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-24 right-4 md:right-8">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/20"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </div>
  </div>
  );
};
