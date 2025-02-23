import React from 'react';
import AlphabetCard from '../../components/AlphabetCard';

const alphabet = ['A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'Ğ', 'H', 'I', 'İ', 'J', 'K', 'L', 'M', 'N', 'O', 'Ö', 'P', 'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'Y', 'Z'];

const AlphabetPage = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-6">Learn the Turkish Alphabet</h1>
      <div className="grid grid-cols-5 gap-4">
        {alphabet.map((letter) => (
          <AlphabetCard key={letter} letter={letter} />
        ))}
      </div>
    </div>
  );
};

export default AlphabetPage;
