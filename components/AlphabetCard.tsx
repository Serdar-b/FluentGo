"use client"
import React from 'react';

const AlphabetCard = ({ letter }: { letter: string }) => {
  const playAudio = () => {
    const audio = new Audio(`/turkish/alphabet/${letter}.mp3`); // Playing from /public/audio/
    audio.play();
  };

  return (
    <div 
      className="p-4 m-2 border rounded text-center cursor-pointer hover:bg-gray-100"
      onClick={playAudio}
    >
      <span className="text-4xl font-bold">{letter}</span>
      <button 
        className="ml-2 text-blue-500 underline text-sm"
        onClick={(e) => { e.stopPropagation(); playAudio(); }}
      >
        🔊
      </button>
    </div>
  );
};

export default AlphabetCard;
