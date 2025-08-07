

'use client';
import React, { useState } from 'react';

export default function AdjectiveSheetTime() {
  const [showAnswers, setShowAnswers] = useState(false);

  const adjectives = [
    'Annual', 'Futuristic', 'Rapid', 'Historical', 'Regular', 'Daily',
    'Irregular', 'Short', 'Early', 'Late', 'Slow', 'Eternal', 'Fast', 'Ancient',
    'Modern', 'Speedy', 'First', 'Last', 'Old', 'Swift', 'Fleet', 'Old-fashioned',
    'Future', 'Quick', 'Young', 'Recent', 'New'
  ];

  const practice = [
    'My grandparents lived in a charming _____________________ house in the suburbs.',
    'This _____________________ building is all glass, steel and concrete.',
    "Get well soon! We're wishing you a _____________________ recovery!",
    'We were _____________________ to the party because of having been stuck in traffic for nearly an hour.',
    "We met _____________________ week, but it feels like we've known each other for ages.",
  ];

  const answers = ['Old', 'Modern', 'Speedy', 'Late', 'Last'];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      {/* 🌟 Common and Proper Nouns Practice heading */}
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-2xl">🌟</span>
        <h1 className="text-3xl font-extrabold text-red-600">Adjectives Sheet 5: Related to Time</h1>
      </div>
      <hr className="border-t-4 border-purple-300 mb-8" />

  

      {/* Adjective list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg mb-8">
        {adjectives.map((adj, index) => (
          <li key={index} className="list-disc list-inside">{adj}</li>
        ))}
      </div>

      {/* Practice Section */}
      <div className="bg-gray-100 p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-3">Practice:</h2>
        <ol className="list-decimal list-inside space-y-2">
          {practice.map((q, index) => (
            <li key={index}>{q}</li>
          ))}
        </ol>

        {/* Show Answer Button */}
        <button
          onClick={() => setShowAnswers(!showAnswers)}
          className="mt-6 px-4 py-2 bg-purple-600 text-white rounded transition"
        >
          {showAnswers ? 'Hide Answers' : 'Show Answers'}
        </button>

        {/* Answer Key */}
        {showAnswers && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">Answer Key</h2>
            <ol className="list-decimal list-inside text-lg space-y-1">
              {answers.map((ans, index) => (
                <li key={index}><strong>{ans}</strong></li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
