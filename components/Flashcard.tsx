"use client";
import React, { useEffect, useState } from "react";

const Flashcard = ({
  word,
  translation,
}: {
  word: string;
  translation: string;
}) => {
  const [flipped, setFlipped] = useState(false);
  const [voices, setVoices] = useState<Array<SpeechSynthesisVoice>>();
  const language = "tr-TR";
  console.log("voices", voices);

  const availableVoices = voices?.filter(({ lang }) => lang === language);

  // console.log("availableVoices", availableVoices);

  useEffect(() => {
    const voices = window.speechSynthesis.getVoices();
    if (Array.isArray(voices) && voices.length > 0) {
      setVoices(voices);
      return;
    }
    if ("onvoiceschanged" in window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = () => {
        const voices = window.speechSynthesis.getVoices();
        setVoices(voices);
      };
    }
  }, []);

  const playAudio = async () => {
    console.log(word);
    let utterance = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(utterance);
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
        onClick={(e) => {
          console.log("Button clicked" + e);
          e.stopPropagation();
          playAudio();
        }}
      >
        🔊 Listen
      </button>
    </div>
  );
};

export default Flashcard;
