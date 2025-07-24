
'use client';

import React, { useState } from 'react';

export default function CollectiveNoun() {
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  const sentences = [
    { sentence: "Our scout troop enjoyed a lot at the bonfire last night.", word: "troop" },
    { sentence: "The crowd waited outside the store for Summer Sale.", word: "crowd" },
    { sentence: "My brother's football team won the match with Eagles.", word: "team" },
    { sentence: "Mrs. Lara's class went to hiking trip.", word: "class" },
    { sentence: "That pride of lions was roaming in the forest.", word: "pride" },
    { sentence: "The choir sang at the school function.", word: "choir" },
    { sentence: "Our family is known in the city.", word: "family" },
    { sentence: "Their company recycles used materials.", word: "company" },
    { sentence: "An colony of ants climbed the wall in my room.", word: "colony" },
    { sentence: "The jury did not agree to judgment.", word: "jury" },
  ];

  const highlightWord = (sentence, word) => {
    const parts = sentence.split(new RegExp(`\\b(${word})\\b`, 'i'));
    return parts.map((part, i) =>
      part.toLowerCase() === word.toLowerCase() ? (
        <strong key={i} className="underline">{part}</strong>
      ) : (
        part
      )
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans">
       <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
  Collective Noun
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  


      {/* Definition Section */}
      <div className="bg-purple-50 p-6 rounded-lg shadow mb-6">
        <p className="text-lg font-semibold mb-2">
          <strong className="text-purple-600">Understanding Collective Nouns</strong>
        </p>
        <div className="mb-4">
          <p className="text-gray-700">
            A <strong>Collective Noun</strong> refers to a word that represents a group of people, animals, or things considered as a single unit. It is a singular noun that denotes a collection of individuals or things.
          </p>
          <ul className="list-disc pl-6 text-sm space-y-2">
            <li>
              <strong>Examples:</strong> Team (a group of players), Family (a group of people related by blood), Herd (a group of animals), Class (a group of students)
            </li>
          </ul>
        </div>
        <p className="text-gray-700">
          Collective nouns are used to refer to groups as a whole. For instance, a "team" can refer to a group of players, but the noun itself is singular, even though it refers to multiple people.
        </p>
        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
          <p className="font-medium text-gray-800">
            <strong>Example:</strong><br />
            <span className="text-blue-700">Collective Noun:</span> The <u>team</u> won the championship.<br />
            <span className="text-blue-700">Common Noun:</span> The <u>players</u> celebrated their victory.
          </p>
        </div>
      </div>

      {/* Practice Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section */}
        <div className="md:w-full space-y-4">
          <p className="font-semibold">
            The subject of each sentence below is a collective noun. <u>Underline</u> the collective noun.
          </p>

          <ol className="list-decimal pl-5 space-y-1">
            {sentences.map(({ sentence }, idx) => (
              <li key={idx}>{sentence}</li>
            ))}
          </ol>

          <button
            onClick={() => setShowAnswerKey(!showAnswerKey)}
            className="mt-4 px-5 py-2 text-white bg-purple-600  rounded transition"
          >
            {showAnswerKey ? 'Hide Answer Key' : 'Show Answer Key'}
          </button>
        </div>
      </div>

      {/* Answer Key Section */}
      {showAnswerKey && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Answer Key</h2>
          <ol className="list-decimal pl-5 space-y-1">
            {sentences.map(({ sentence, word }, idx) => (
              <li key={idx}>{highlightWord(sentence, word)}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
