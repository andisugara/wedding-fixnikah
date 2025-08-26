import React from "react";
import type { Guest } from "../types";
import LoadingAudio from "../assets/sounds/loading.mp3";
import ProfileImg from "../assets/images/profile.jpg";

interface ProfileSelectionProps {
  guest: Guest | null;
  setCurrentScreen: (screen: string) => void;
}

export const ProfileSelection: React.FC<ProfileSelectionProps> = ({
  guest,
  setCurrentScreen,
}) => {
  // If no guest data is available, use default profile
  const profile = guest || {
    id: 0,
    name: "Guest",
    avatar: ProfileImg,
    isMain: true,
    from: "Wedding Couple",
    created_at: new Date().toISOString()
  };
  
  return (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-white text-5xl font-light mb-12">Who's watching?</h1>
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl">
        <div
          key={profile.id}
          className="text-center group cursor-pointer"
          onClick={() => {
            setCurrentScreen("loading");
            const audio = new Audio(LoadingAudio);
            audio.play();
            setTimeout(() => setCurrentScreen("main"), 4000);
          }}
        >
          <div className="w-32 h-32 mb-4 rounded-lg bg-gray-800 flex items-center justify-center text-6xl group-hover:ring-4 group-hover:ring-white ">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <p className="text-gray-400 text-lg group-hover:text-white ">
            {profile.name}
          </p>
        </div>
      </div>
      <button className="mt-16 text-gray-400 hover:text-white  border border-gray-400 hover:border-white px-6 py-3 text-lg">
        Undangan dari {profile.from}
      </button>
    </div>
  </div>
  );
};
