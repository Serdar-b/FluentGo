import React from 'react';
import Flashcard from '../../components/Flashcard';

const words = [
  { word: 'Merhaba', translation: 'Hello' },
  { word: 'Teşekkürler', translation: 'Thank you' },
  { word: 'Evet', translation: 'Yes' },
  { word: 'Hayır', translation: 'No' },
  { word: 'Lütfen', translation: 'Please' },
  // ... 
];

const FlashcardsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Learn 1000 Common Turkish Words</h1>
      <div className="grid grid-cols-2 gap-4">
        {words.map((item, index) => (
          <Flashcard key={index} word={item.word} translation={item.translation} />
        ))}
      </div>
    </div>
  );
};

export default FlashcardsPage;
