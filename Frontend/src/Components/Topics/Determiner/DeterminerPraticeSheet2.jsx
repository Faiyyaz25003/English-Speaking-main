'use client';

import { useState } from 'react';

export default function DeterminersPracticeSheet2() {
  const [showAnswers, setShowAnswers] = useState(false);

  const questions = [
    'Could you bring me _______________ books I left in the garden?',
    '_______________ sun rises from the east.',
    'The doctor advised me to eat _______________ apple every morning.',
    "There aren't _______________ students in the library.",
    "I haven't got _______________ pictures in my bedroom.",
    'She gave a cookie to _______________ child.',
    "I've got to solve _______________ math problems before I go to sleep.",
    '(With a bowl of cherries on your lap) _______________ cherries are delicious!',
    "My mother doesn't drink _______________ coffee.",
    'I always keep _______________ money in my wallet for emergencies.',
  ];

  const answers = [
    'those',
    'the',
    'an',
    'any',
    'any',
    'each',
    'all',
    'these',
    'any',
    'some',
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-4xl font-extrabold text-red-600">
   Determiners Practice Sheet 2
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" /> 
    
      <p className="mb-6 text-lg">Pick the correct determiner for each sentence</p>

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
              <li key={index}>
                <span className="font-bold text-black">{a}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
