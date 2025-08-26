import React from "react";
import { Calendar, MapPin, Heart } from "lucide-react";
import type { WeddingDetails } from "../types";

interface EventSectionProps {
  weddingDetails: WeddingDetails | null;
}

export const EventSection: React.FC<EventSectionProps> = ({ weddingDetails }) => {
  if (!weddingDetails) return null;
  
  return (
  <div className="bg-gray-900 py-16 px-4 md:px-8">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
        Akad & Resepsi
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-black/50 rounded-lg p-8 border border-gray-700">
          <div className="flex items-center mb-6">
            <Calendar className="text-red-600 mr-4" size={32} />
            <h3 className="text-white text-2xl font-bold">Akad Nikah</h3>
          </div>
          <div className="space-y-4 text-white/90">
            <div>
              <p className="font-bold text-lg">{weddingDetails.akadDate}</p>
              <p className="text-red-600 font-semibold">
                {weddingDetails.akadTime}
              </p>
            </div>
            <div className="flex items-start">
              <MapPin
                className="text-red-600 mr-3 mt-1 flex-shrink-0"
                size={20}
              />
              <div>
                <p className="font-bold">{weddingDetails.venue}</p>
                <p className="text-white/70">{weddingDetails.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black/50 rounded-lg p-8 border border-gray-700">
          <div className="flex items-center mb-6">
            <Heart className="text-red-600 mr-4" size={32} />
            <h3 className="text-white text-2xl font-bold">Resepsi</h3>
          </div>
          <div className="space-y-4 text-white/90">
            <div>
              <p className="font-bold text-lg">
                {weddingDetails.receptionDate}
              </p>
              <p className="text-red-600 font-semibold">
                {weddingDetails.receptionTime}
              </p>
            </div>
            <div className="flex items-start">
              <MapPin
                className="text-red-600 mr-3 mt-1 flex-shrink-0"
                size={20}
              />
              <div>
                <p className="font-bold">{weddingDetails.venue}</p>
                <p className="text-white/70">{weddingDetails.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
