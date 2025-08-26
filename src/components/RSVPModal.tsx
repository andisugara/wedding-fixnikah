import React, { useState } from "react";
import { X } from "lucide-react";
import type { RSVPData } from "../types";
import { useRSVP } from "../hooks/useSupabase";

interface RSVPModalProps {
  showRSVP: boolean;
  setShowRSVP: (show: boolean) => void;
}

export const RSVPModal: React.FC<RSVPModalProps> = ({
  showRSVP,
  setShowRSVP,
}) => {
  const { submitRSVP, loading, error, hasSubmitted } = useRSVP();
  const [rsvpData, setRsvpData] = useState<RSVPData>({
    name: "",
    email: "",
    phone: "",
    attendance: "Hadir",
    guests: "1",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    if (rsvpData.name && rsvpData.email) {
      const result = await submitRSVP(rsvpData);
      if (result) {
        setSuccess(true);
        setTimeout(() => {
          setShowRSVP(false);
          setSuccess(false);
          setRsvpData({
            name: "",
            email: "",
            phone: "",
            attendance: "Hadir",
            guests: "1",
            message: "",
          });
        }, 3000);
      }
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

        {success ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Terima Kasih!</h3>
            <p className="text-white/80">
              Konfirmasi kehadiran Anda telah kami terima.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {error && (
              <div className="bg-red-500/20 text-red-500 p-3 rounded-lg text-sm mb-4">
                {error}
              </div>
            )}
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
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={
                loading || hasSubmitted || !rsvpData.name || !rsvpData.email
              }
            >
              {loading ? "Mengirim..." : "Konfirmasi Kehadiran"}
            </button>
          </div>
        )}
      </div>
    </div>
  ) : null;
};
