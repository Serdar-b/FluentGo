import React from "react";
import Flashcard from "../../components/Flashcard";
import BackButton from "../../components/BackButton";

const words = [
  { word: "Merhaba", translation: "Hello" },
  { word: "Teşekkürler", translation: "Thank you" },
  { word: "Evet", translation: "Yes" },
  { word: "Hayır", translation: "No" },
  { word: "Lütfen", translation: "Please" },
];

const FlashcardsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-950 text-white text-center p-6">
      {/* Back Button */}
      <div className="absolute top-5 left-5">
        <BackButton />
      </div>

      {/* Page Title */}
      <h1 className="text-5xl font-extrabold tracking-wide text-gray-300 mb-6">
        🃏 Learn 1000 Common Turkish Words
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-400 mb-10">
        Flip the cards to reveal translations and click 🔊 to hear the
        pronunciation.
      </p>

      {/* Flashcard Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-gray-800 p-6 rounded-lg shadow-xl">
        {words.map((item, index) => (
          <Flashcard
            key={index}
            word={item.word}
            translation={item.translation}
          />
        ))}
      </div>
    </div>
  );
};

export default FlashcardsPage;
