import React from "react";
import type { LoveStoryItem } from "../types";

interface LoveStorySectionProps {
  loveStory: LoveStoryItem[];
}

export const LoveStorySection: React.FC<LoveStorySectionProps> = ({ loveStory }) => {
  if (!loveStory || loveStory.length === 0) return null;
  
  return (
  <div className="bg-black py-16 px-4 md:px-8">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
        Our Love Story
      </h2>
      <div className="space-y-8">
        {loveStory.map((story, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                {story.title}
              </h3>
              <p className="text-red-600 text-lg font-semibold mb-4">
                {story.date}
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                {story.story}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};
