import React from "react";
import type { WeddingDetails } from "../types";

interface ClosingStatementSectionProps {
  weddingDetails: WeddingDetails | null;
}

export const ClosingStatementSection: React.FC<ClosingStatementSectionProps> = ({ weddingDetails }) => {
  if (!weddingDetails) return null;
  
  return (
  <div className="relative py-16 px-4 md:px-8">
    <div className="absolute inset-0">
      <div className="absolute inset-0  z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1920&h=1080&fit=crop)`,
          filter: "brightness(0.3)",
        }}
      ></div>
    </div>
    <div className="max-w-4xl mx-auto text-center relative z-20">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
        Terima Kasih
      </h2>
      <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-12">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
        Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
        kami. Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
      </p>
      <div className="text-white">
        <p className="text-xl font-bold mb-4">
          {weddingDetails.groom} & {weddingDetails.bride}
        </p>
        <p className="text-white/80">
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang."
        </p>
        <p className="text-red-600 font-semibold mt-4">QS. Ar-Rum: 21</p>
      </div>
    </div>
  </div>
  );
};
