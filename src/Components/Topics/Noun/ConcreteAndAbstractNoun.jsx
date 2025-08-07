

'use client';

import React, { useState } from 'react';

export default function ConcreteAndAbstractNoun() {
  const [showAnswers, setShowAnswers] = useState(false);

  const sentences = [
    {
      text: "I felt pain when dentist took my tooth out.",
      concrete: ["dentist", "tooth"],
      abstract: ["pain"],
    },
    {
      text: "I fell in love with that little child.",
      concrete: ["child"],
      abstract: ["love"],
    },
    {
      text: "After dinner, Holly went out for walk.",
      concrete: ["dinner", "Holly"],
      abstract: [],
    },
    {
      text: "My mom will pick me time from school every Monday.",
      concrete: ["mom", "school", "Monday"],
      abstract: [],
    },
    {
      text: "Puppy jumped on the table and ate cake.",
      concrete: ["Puppy", "table", "cake"],
      abstract: [],
    },
    {
      text: "Sarah's childhood was traumatic.",
      concrete: ["Sarah"],
      abstract: ["childhood"],
    },
    {
      text: "I have full trust on my child's nanny.",
      concrete: ["nanny"],
      abstract: ["trust"],
    },
    {
      text: "She is potting plants in the garden.",
      concrete: ["plants", "garden"],
      abstract: [],
    },
    {
      text: "That child is very intelligent.",
      concrete: ["child"],
      abstract: ["intelligent"],
    },
    {
      text: "He is loyal friend.",
      concrete: [],
      abstract: ["loyal"],
    },
  ];

  const formatSentence = ({ text, concrete, abstract }) => {
    let words = text.split(/(\s+)/); // preserve spacing
    return words.map((word, idx) => {
      const clean = word.replace(/[.,]/g, '').toLowerCase();

      if (concrete.some(c => c.toLowerCase() === clean)) {
        return (
          <u key={idx} className="text-black font-medium underline decoration-2">{word}</u>
        );
      }
      if (abstract.some(a => a.toLowerCase() === clean)) {
        return (
          <span key={idx} className="px-1 py-0.5 border rounded-full border-gray-400 mx-0.5 inline-block">
            {word}
          </span>
        );
      }
      return word;
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 font-sans">
      <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
   Concreate and Abstract Noun
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  


      {/* Definition Section */}
      <div className="bg-purple-50 p-6 rounded-lg shadow mb-6">
        <p className="text-lg font-semibold mb-2">
          <strong className="text-purple-600">Understanding Concrete and Abstract Nouns</strong>
        </p>
        <div className="mb-4">
          <p className="text-gray-700">
            Nouns are of two types: <strong>Concrete</strong> and <strong>Abstract</strong>.
          </p>

          <p className="text-gray-700">
            <strong>Concrete Nouns</strong> are the nouns that we can observe with our senses. We can see, touch, hear, smell, or taste them.
          </p>
          <p className="text-gray-700">
            <strong>Abstract Nouns</strong> are nouns that represent ideas, emotions, or concepts that cannot be touched or seen. They are things we experience mentally or emotionally.
          </p>

          <div>
            <strong>Examples:</strong>
            <p>
              The <u>dog</u> jumped over <u>fence</u>. (Concrete Nouns: dog, fence)
            </p>
            <p>
              My mom's <span className="border rounded-full px-1">Birthday</span> is in <span className="border rounded-full px-1">Summer</span>. (Abstract Nouns: Birthday, Summer)
            </p>
          </div>
        </div>
      </div>

      <hr className="my-6" />

      <p className="font-semibold mb-2">
        Read the sentences below and underline the <span className="underline">Concrete Nouns</span> and circle the <span className="border rounded-full px-1">Abstract Nouns</span>.
      </p>

      <ol className="list-decimal pl-6 space-y-2 text-gray-900">
        {sentences.map((s, idx) => (
          <li key={idx}>{s.text}</li>
        ))}
      </ol>

      <button
        onClick={() => setShowAnswers(!showAnswers)}
        className="mt-6 px-5 py-2 text-white bg-purple-600 rounded transition"
      >
        {showAnswers ? 'Hide Answers' : 'Show Answers'}
      </button>

      {showAnswers && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Answer Key</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-900">
            {sentences.map((s, idx) => (
              <li key={idx}>{formatSentence(s)}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
