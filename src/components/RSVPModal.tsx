import React, { useState } from "react";
import { X } from "lucide-react";
import type { RSVPData } from "../types";

interface RSVPModalProps {
  showRSVP: boolean;
  setShowRSVP: (show: boolean) => void;
}

export const RSVPModal: React.FC<RSVPModalProps> = ({
  showRSVP,
  setShowRSVP,
}) => {
  const [rsvpData, setRsvpData] = useState<RSVPData>({
    name: "",
    email: "",
    phone: "",
    attendance: "Hadir",
    guests: "1",
    message: "",
  });

  const handleSubmit = () => {
    if (rsvpData.name && rsvpData.email) {
      alert(
        `Terima kasih ${rsvpData.name}! Konfirmasi kehadiran Anda telah diterima.`
      );
      setShowRSVP(false);
      setRsvpData({
        name: "",
        email: "",
        phone: "",
        attendance: "Hadir",
        guests: "1",
        message: "",
      });
    }
  };

  return showRSVP ? (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            Konfirmasi Kehadiran
          </h2>
          <button
            onClick={() => setShowRSVP(false)}
            className="text-white hover:text-gray-300 cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-white mb-2 font-semibold">
              Nama Lengkap *
            </label>
            <input
              type="text"
              value={rsvpData.name}
              onChange={(e) =>
                setRsvpData({ ...rsvpData, name: e.target.value })
              }
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2 font-semibold">
              Email *
            </label>
            <input
              type="email"
              value={rsvpData.email}
              onChange={(e) =>
                setRsvpData({ ...rsvpData, email: e.target.value })
              }
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2 font-semibold">
              Nomor Telepon
            </label>
            <input
              type="tel"
              value={rsvpData.phone}
              onChange={(e) =>
                setRsvpData({ ...rsvpData, phone: e.target.value })
              }
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <div>
            <label className="block text-white mb-2 font-semibold">
              Konfirmasi Kehadiran *
            </label>
            <select
              value={rsvpData.attendance}
              onChange={(e) =>
                setRsvpData({ ...rsvpData, attendance: e.target.value })
              }
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Tidak Hadir</option>
              <option value="Mungkin Hadir">Mungkin Hadir</option>
            </select>
          </div>

          <div>
            <label className="block text-white mb-2 font-semibold">
              Jumlah Tamu *
            </label>
            <select
              value={rsvpData.guests}
              onChange={(e) =>
                setRsvpData({ ...rsvpData, guests: e.target.value })
              }
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="1">1 Orang</option>
              <option value="2">2 Orang</option>
              <option value="3">3 Orang</option>
              <option value="4">4 Orang</option>
              <option value="5+">5+ Orang</option>
            </select>
          </div>

          <div>
            <label className="block text-white mb-2 font-semibold">
              Pesan untuk Pengantin
            </label>
            <textarea
              value={rsvpData.message}
              onChange={(e) =>
                setRsvpData({ ...rsvpData, message: e.target.value })
              }
              rows={4}
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            Konfirmasi Kehadiran
          </button>
        </div>
      </div>
    </div>
  ) : null;
};
