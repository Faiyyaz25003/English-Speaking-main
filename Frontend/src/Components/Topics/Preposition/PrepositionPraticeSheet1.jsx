'use client';

import { useState } from 'react';

const questions = [
  { id: 1, text: "There is street light", options: ["outside", "off"], answer: "outside" },
  { id: 2, text: "Keep the dog", options: ["by", "on"], answer: "on" },
  { id: 3, text: "The bird flew", options: ["through", "over"], answer: "over" },
  { id: 4, text: "They took a walk", options: ["up", "under"], answer: "up" },
  { id: 5, text: "The vase is placed", options: ["over", "on"], answer: "on" },
  { id: 6, text: "The car is parked", options: ["on", "beside"], answer: "beside" },
  { id: 7, text: "The dog is asleep", options: ["under", "on"], answer: "on" },
  { id: 8, text: "She is sitting", options: ["near", "off"], answer: "near" },
  { id: 9, text: "We are going to play football", options: ["outside", "inside"], answer: "outside" },
  { id: 10, text: "Once", options: ["on", "upon"], answer: "upon" },
];

export default function PrepositionPracticeSheet1() {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">

      <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
  Preposition Pratice Sheet 1
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  
      
      <p className="mb-6"><strong>Choose the best preposition for each sentence and underline it.</strong></p>

      <ul className="space-y-4">
        {questions.map((q, index) => (
          <li key={q.id} className="text-lg">
            {index + 1}. {q.text}{" "}
            {q.options.map((opt, i) => (
              <span key={i}>
                <strong className="text-blue-700">{opt}</strong>
                {i < q.options.length - 1 ? " – " : ""}
              </span>
            ))}
            {showAnswers && (
              <div className="text-green-600 mt-1">
                ✅ Answer: <u>{q.answer}</u>
              </div>
            )}
          </li>
        ))}
      </ul>

      <button
        className="mt-6 px-4 py-2 text-white bg-purple-600 font-semibold rounded"
        onClick={() => setShowAnswers(!showAnswers)}
      >
        {showAnswers ? 'Hide Answers' : 'Show Answers'}
      </button>
    </div>
  );
}
