import React from "react";
import AlphabetCard from "../../components/AlphabetCard";
import BackButton from "../../components/BackButton"; // Import the Back Button

const alphabet = [
  "A",
  "B",
  "C",
  "Ç",
  "D",
  "E",
  "F",
  "G",
  "Ğ",
  "H",
  "I",
  "İ",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "Ö",
  "P",
  "R",
  "S",
  "Ş",
  "T",
  "U",
  "Ü",
  "V",
  "Y",
  "Z",
];

const AlphabetPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-950 text-white text-center p-6">
      {/* Back Button */}
      <div className="absolute top-5 left-5">
        <BackButton />
      </div>

      {/* Page Title */}
      <h1 className="text-5xl font-extrabold tracking-wide text-gray-300 mb-6">
        🔠 Learn the Turkish Alphabet
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-400 mb-10">
        Click on a letter to hear its pronunciation.
      </p>

      {/* Alphabet Grid */}
      <div className="grid grid-cols-5 gap-4 bg-gray-800 p-6 rounded-lg shadow-xl">
        {alphabet.map((letter) => (
          <AlphabetCard key={letter} letter={letter} />
        ))}
      </div>
    </div>
  );
};

export default AlphabetPage;
