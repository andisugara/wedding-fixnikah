import React, { useState } from "react";
import type { Message } from "../types";
import ProfileImg from "../assets/images/profile.jpg";

export const MessagesSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: "Sarah & Family",
      message:
        "Selamat untuk kalian berdua! Semoga menjadi keluarga yang sakinah mawaddah warahmah. Bahagia selalu!",
      time: "2 jam yang lalu",
    },
    {
      id: 2,
      name: "Ahmad",
      message:
        "Congratulations! Wishing you both a lifetime of happiness and love.",
      time: "5 jam yang lalu",
    },
  ]);

  const [newMessage, setNewMessage] = useState({ name: "", message: "" });

  const addMessage = () => {
    if (newMessage.name && newMessage.message) {
      setMessages([
        {
          id: messages.length + 1,
          name: newMessage.name,
          message: newMessage.message,
          time: "Baru saja",
        },
        ...messages,
      ]);
      setNewMessage({ name: "", message: "" });
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
              onClick={addMessage}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
            >
              Kirim Ucapan
            </button>
          </div>
        </div>

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
        </div>
      </div>
    </div>
  );
};
