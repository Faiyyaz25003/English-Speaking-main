'use client';

import React, { useState } from 'react';

export default function PronounsPracticeSheet2() {
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  const pronouns = ["we", "It", "they", "he", "she", "you", "I"];

  const questions = [
    "The bird sat on branch. _________________ had a worm in it's beak.",
    "John was not happy. _________________ had a bad cold.",
    "Peter and Sue were excited. _________________ were going to the circus.",
    "My marks are not good. _________________ did not study very hard.",
    "Linda is a good student. _________________ does her home work.",
    "John, do _________________ play the guitar?",
    "My brother and I play football. _________________ play in the school team."
  ];

  const answers = [
    "The bird sat on branch. It had a worm in it's beak.",
    "John was not happy. He had a bad cold.",
    "Peter and Sue were excited. They were going to the circus.",
    "My marks are not good. I did not study very hard.",
    "Linda is a good student. She does her home work.",
    "John, do you play the guitar?",
    "My brother and I play football. We play in the school team."
  ];

  const highlightPronoun = (sentence, pronoun) => {
    const regex = new RegExp(`\\b(${pronoun})\\b`, 'gi');
    return sentence.split(regex).map((part, idx) =>
      part.toLowerCase() === pronoun.toLowerCase() ? (
        <strong key={idx} className="underline">{part}</strong>
      ) : (
        part
      )
    );
  };

  const highlightedAnswers = [
    highlightPronoun(answers[0], 'It'),
    highlightPronoun(answers[1], 'He'),
    highlightPronoun(answers[2], 'They'),
    highlightPronoun(answers[3], 'I'),
    highlightPronoun(answers[4], 'She'),
    highlightPronoun(answers[5], 'you'),
    highlightPronoun(answers[6], 'We')
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
       <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
  Pronouns Practice Sheet 2
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  
      <p className="font-semibold mb-4">Add pronoun to complete the sentences.</p>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {pronouns.map((p, idx) => (
          <div
            key={idx}
            className="w-16 h-16 flex items-center justify-center border border-gray-400 rounded-full shadow text-center font-semibold"
          >
            {p}
          </div>
        ))}
      </div>

      <ol className="list-decimal pl-5 space-y-2 mb-6">
        {questions.map((q, idx) => (
          <li key={idx}>{q}</li>
        ))}
      </ol>

      <button
        onClick={() => setShowAnswerKey(!showAnswerKey)}
        className="mt-4 px-5 py-2 text-white bg-purple-600 rounded transition"
      >
        {showAnswerKey ? 'Hide Answers' : 'Show Answers'}
      </button>

      {showAnswerKey && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Answer Key</h2>
          <ol className="list-decimal pl-5 space-y-2">
            {highlightedAnswers.map((a, idx) => (
              <li key={idx}>{a}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}