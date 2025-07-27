'use client';

import { useState } from 'react';

export default function DeterminersPracticeSheet1() {
  const [showAnswers, setShowAnswers] = useState(false);

  const questions = [
    'I would like _______________ coffee.',
    'Do you have _______________ money?',
    'You can take _______________ bus: they all go in that direction.',
    'We have _______________ new interesting books to read.',
    'Would you like _______________ desert?',
    "There aren't _______________ people in the hall.",
    'Do you have _______________ trips planned this month?',
    "I will accept _______________ job offer that I'll receive.",
    '_______________ day I will find a new hobby.',
    'Her baby can be born _______________ day now.',
  ];

  const answers = [
    'some',
    'any',
    'any',
    'some',
    'any',
    'any',
    'any',
    'any',
    'some',
    'any',
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
    

      <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-4xl font-extrabold text-red-600">
   Determiners Practice Sheet 1
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" /> 
      
      <p className="mb-6 text-lg">Pick the right indefinite determiners (some or any)</p>

      <ol className="list-decimal pl-6 space-y-4 text-lg">
        {questions.map((q, index) => (
          <li key={index}>{q}</li>
        ))}
      </ol>

      <button
        onClick={() => setShowAnswers(!showAnswers)}
        className="mt-8 px-4 py-2 border rounded text-white bg-purple-600"
      >
        {showAnswers ? 'Hide Answers' : 'Show Answers'}
      </button>

      {showAnswers && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Answer Key</h2>
          <ol className="list-decimal pl-6 space-y-2 text-lg">
            {answers.map((a, index) => (
              <li key={index} className="text-black">
                <span className="font-bold text-black">{a}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
