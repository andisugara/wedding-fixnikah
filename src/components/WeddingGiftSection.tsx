import React, { useState } from "react";
import { Gift, Copy, Check } from "lucide-react";
import { weddingDetails } from "../data/weddingData";

export const WeddingGiftSection: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="bg-black py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
          Wedding Gift
        </h2>
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
          <div className="flex justify-center mb-6">
            <Gift className="text-red-600" size={48} />
          </div>
          <p className="text-white/90 text-lg mb-6">
            Kehadiran dan doa Anda adalah hadiah terbaik untuk kami. Namun jika
            Anda ingin memberikan sesuatu, kami akan sangat berterima kasih
            untuk kontribusi melalui:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-white text-xl font-bold mb-4">
                Bank Transfer
              </h3>
              <div className="text-left space-y-3">
                <div>
                  <p className="text-white/70 text-sm">Bank Name</p>
                  <div className="flex justify-between items-center">
                    <p className="text-white font-medium">BCA</p>
                    <button
                      onClick={() => copyToClipboard("1234567890", "bca")}
                      className="text-red-600 hover:text-red-400"
                    >
                      {copied === "bca" ? (
                        <Check size={16} />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-white/70 text-sm">Account Number</p>
                  <div className="flex justify-between items-center">
                    <p className="text-white font-medium">123 456 7890</p>
                    <button
                      onClick={() =>
                        copyToClipboard("1234567890", "bca-account")
                      }
                      className="text-red-600 hover:text-red-400"
                    >
                      {copied === "bca-account" ? (
                        <Check size={16} />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-white/70 text-sm">Account Name</p>
                  <p className="text-white font-medium">
                    {weddingDetails.groom} & {weddingDetails.bride}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-white text-xl font-bold mb-4">E-Wallet</h3>
              <div className="text-left space-y-3">
                <div>
                  <p className="text-white/70 text-sm">Gopay</p>
                  <div className="flex justify-between items-center">
                    <p className="text-white font-medium">0812 3456 7890</p>
                    <button
                      onClick={() => copyToClipboard("081234567890", "gopay")}
                      className="text-red-600 hover:text-red-400"
                    >
                      {copied === "gopay" ? (
                        <Check size={16} />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-white/70 text-sm">OVO</p>
                  <div className="flex justify-between items-center">
                    <p className="text-white font-medium">0812 3456 7890</p>
                    <button
                      onClick={() => copyToClipboard("081234567890", "ovo")}
                      className="text-red-600 hover:text-red-400"
                    >
                      {copied === "ovo" ? (
                        <Check size={16} />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-white/70 text-sm">Dana</p>
                  <div className="flex justify-between items-center">
                    <p className="text-white font-medium">0812 3456 7890</p>
                    <button
                      onClick={() => copyToClipboard("081234567890", "dana")}
                      className="text-red-600 hover:text-red-400"
                    >
                      {copied === "dana" ? (
                        <Check size={16} />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-white/70 text-sm">
            *Untuk hadiah fisik, silakan hubungi panitia atau langsung bawa pada
            hari H
          </p>
        </div>
      </div>
    </div>
  );
};
