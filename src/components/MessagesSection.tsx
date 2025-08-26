import React, { useState } from "react";
import ProfileImg from "../assets/images/profile.jpg";
import { useMessages } from "../hooks/useSupabase";

export const MessagesSection: React.FC = () => {
  const { messages, loading, error, addMessage, hasSubmitted } = useMessages();
  const [newMessage, setNewMessage] = useState({ name: "", message: "" });

  const handleAddMessage = async () => {
    if (newMessage.name && newMessage.message) {
      const success = await addMessage(newMessage.name, newMessage.message);
      if (success) {
        setNewMessage({ name: "", message: "" });
      }
    }
  };

  return (
    <div className="bg-gray-900 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
          Ucapan & Doa
        </h2>

        <div className="bg-black/50 rounded-lg p-8 border border-gray-700 mb-8">
          <h3 className="text-white text-xl font-bold mb-6">Kirim Ucapan</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nama Anda"
              value={newMessage.name}
              onChange={(e) =>
                setNewMessage({ ...newMessage, name: e.target.value })
              }
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <textarea
              placeholder="Tulis ucapan dan doa untuk kami..."
              value={newMessage.message}
              onChange={(e) =>
                setNewMessage({ ...newMessage, message: e.target.value })
              }
              rows={4}
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              onClick={handleAddMessage}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={
                loading ||
                hasSubmitted ||
                !newMessage.name ||
                !newMessage.message
              }
            >
              {loading
                ? "Mengirim..."
                : hasSubmitted
                ? "Terima Kasih"
                : "Kirim Ucapan"}
            </button>
          </div>
        </div>

        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-black/50 rounded-lg p-6 border border-gray-700 flex items-start"
            >
              <div className="w-12 h-12 rounded overflow-hidden mr-4">
                <img
                  src={ProfileImg}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-white font-bold">{msg.name}</h4>
                  <span className="text-white/60 text-sm">{msg.time}</span>
                </div>
                <p className="text-white/90">{msg.message}</p>
              </div>
            </div>
          ))}

          {loading && (
            <div className="text-center py-8">
              <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
              <p className="text-white/60">Memuat pesan...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
