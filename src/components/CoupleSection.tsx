import React from "react";
import type { WeddingDetails } from "../types";
import Groom from "../assets/images/groom.jpg";
import Bride from "../assets/images/bride.jpg";
import IntimateImg from "../assets/images/intimate.jpg";

interface CoupleSectionProps {
  weddingDetails: WeddingDetails | null;
}

export const CoupleSection: React.FC<CoupleSectionProps> = ({ weddingDetails }) => {
  if (!weddingDetails) return null;
  
  return (
  <div className="relative py-16 px-4 md:px-8">
    <div className="absolute inset-0">
      <div className="absolute inset-0  z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${IntimateImg})`,
          filter: "brightness(0.3)",
        }}
      ></div>
    </div>
    <div className="max-w-6xl mx-auto relative z-20">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
        Profil Calon Pengantin
      </h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="text-center">
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-red-600">
            <img
              src={Groom}
              alt="Groom"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
            {weddingDetails.groomFull}
          </h3>
          <p className="text-white/80 text-lg mb-4">
            Putra dari {weddingDetails.groomParents}
          </p>
          <div className="text-white/60 text-sm">
            Software Engineer yang passionate dalam teknologi dan photography.
            Hobi traveling dan mencoba makanan baru.
          </div>
        </div>

        <div className="text-center">
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-red-600">
            <img
              src={Bride}
              alt="Bride"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
            {weddingDetails.brideFull}
          </h3>
          <p className="text-white/80 text-lg mb-4">
            Putri dari {weddingDetails.brideParents}
          </p>
          <div className="text-white/60 text-sm">
            Guru yang berdedikasi dalam pendidikan anak. Suka memasak, membaca,
            dan menghabiskan waktu dengan keluarga.
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
