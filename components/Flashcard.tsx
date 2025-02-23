"use client"
import React, { useState } from 'react';

const Flashcard = ({ word, translation }: { word: string, translation: string }) => {
  const [flipped, setFlipped] = useState(false);

  const playAudio = async () => {
    try {
      // Generate the Google Translate TTS URL
      const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=tr&client=tw-ob&q=${encodeURIComponent(word)}`;

      // Create a new audio element
      const audio = new Audio(audioUrl);
      audio.crossOrigin = "anonymous"; // Ensures proper loading

      // Load and play the audio properly
      audio.oncanplaythrough = () => {
        audio.play().catch(error => console.error("Playback error:", error));
      };

      audio.load(); // Ensure it's loaded before playing
    } catch (error) {
      console.error("Audio playback failed:", error);
    }
  };

  return (
    <div 
      className="w-64 h-40 border rounded shadow-lg flex flex-col items-center justify-center cursor-pointer transition-transform transform hover:scale-105 p-4"
      onClick={() => setFlipped(!flipped)}
    >
      {flipped ? (
        <div className="text-lg text-gray-700">{translation}</div>
      ) : (
        <div className="text-2xl font-semibold">{word}</div>
      )}
      <button 
        className="mt-2 text-blue-500 underline text-sm"
        onClick={(e) => { e.stopPropagation(); playAudio(); }}
      >
        🔊 Listen
      </button>
    </div>
  );
};

export default Flashcard;
