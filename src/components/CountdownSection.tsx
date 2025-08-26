import React from "react";
import { weddingDetails } from "../data/weddingData";

interface CountdownSectionProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export const CountdownSection: React.FC<CountdownSectionProps> = ({
  timeLeft,
}) => (
  <div className="bg-black py-16 px-4 md:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">
        Countdown to Our Big Day
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="bg-red-600 rounded-lg p-6 md:p-8">
            <div className="text-white text-3xl md:text-4xl font-bold">
              {value || 0}
            </div>
            <div className="text-white/80 text-sm md:text-base font-light capitalize">
              {unit}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
