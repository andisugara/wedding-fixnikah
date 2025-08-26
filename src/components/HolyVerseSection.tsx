import React from "react";
import { weddingDetails } from "../data/weddingData";

export const HolyVerseSection: React.FC = () => (
  <div className="bg-gray-900 py-16 px-4 md:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">
        Ayat Suci
      </h2>
      <div className="bg-black/50 rounded-lg p-8 md:p-12 border border-gray-700">
        <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6 font-light italic">
          "{weddingDetails.holyVerse}"
        </p>
        <p className="text-red-600 font-bold text-lg">
          {weddingDetails.holyVerseRef}
        </p>
      </div>
    </div>
  </div>
);
