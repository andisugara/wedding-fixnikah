import React from "react";
import NikahFix from "../assets/images/nikahfix.png";
import ProfileImg from "../assets/images/profile.jpg";

interface NetflixHeaderProps {
  setActiveSection: (section: string | null) => void;
  setShowRSVP: (show: boolean) => void;
  setCurrentScreen: (screen: string) => void;
}

export const NetflixHeader: React.FC<NetflixHeaderProps> = ({
  setActiveSection,
  setShowRSVP,
  setCurrentScreen,
}) => (
  <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
    <div className="flex items-center justify-between px-4 md:px-8 py-4">
      <div className="flex items-center space-x-8">
        <div className="text-red-600 text-2xl md:text-3xl font-bold tracking-wide">
          <img
            src={NikahFix}
            alt="NikahFix Logo"
            className="w-32 md:w-32 h-auto"
          />
        </div>
        <nav className="hidden md:flex space-x-6 text-white text-sm font-medium">
          <button
            onClick={() => setActiveSection("holy-verse")}
            className="hover:text-gray-300 transition-colors"
          >
            Ayat Suci
          </button>
          <button
            onClick={() => setActiveSection("countdown")}
            className="hover:text-gray-300 transition-colors"
          >
            Countdown
          </button>
          <button
            onClick={() => setActiveSection("couple")}
            className="hover:text-gray-300 transition-colors"
          >
            Profil
          </button>
          <button
            onClick={() => setActiveSection("story")}
            className="hover:text-gray-300 transition-colors"
          >
            Love Story
          </button>
          <button
            onClick={() => setActiveSection("event")}
            className="hover:text-gray-300 transition-colors"
          >
            Acara
          </button>
          <button
            onClick={() => setActiveSection("gallery")}
            className="hover:text-gray-300 transition-colors"
          >
            Galeri
          </button>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => setShowRSVP(true)}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-medium rounded transition-colors cursor-pointer"
        >
          RSVP
        </button>
        <div
          className="w-8 h-8 bg-red-600 rounded overflow-hidden cursor-pointer hover:ring-2 hover:ring-white transition-all"
          onClick={() => setCurrentScreen("profiles")}
        >
          <img
            src={ProfileImg}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </header>
);
