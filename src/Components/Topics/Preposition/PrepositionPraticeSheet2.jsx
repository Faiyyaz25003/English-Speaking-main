'use client';

import { useState } from 'react';

const section1 = [
  {
    id: 1,
    sentence: "A little girl sat ________________ the tree.",
    options: ["across", "off", "under"],
    answer: "under",
  },
  {
    id: 2,
    sentence: "The boy was hiding ________________ the door.",
    options: ["about", "behind", "above"],
    answer: "behind",
  },
  {
    id: 3,
    sentence: "They all ran ________________ the farmer's wife.",
    options: ["after", "through", "into"],
    answer: "after",
  },
  {
    id: 4,
    sentence: "There is an apple ________________ the fruit basket.",
    options: ["over", "in", "before"],
    answer: "in",
  },
  {
    id: 5,
    sentence: "The man dived ________________ the pool.",
    options: ["across", "along", "into"],
    answer: "into",
  },
];

const section2 = [
  {
    id: 6,
    sentence: "The road goes ________________ the forest.",
    answer: "through",
  },
  {
    id: 7,
    sentence: "Your shoes are ________________ the bed.",
    answer: "under",
  },
  {
    id: 8,
    sentence: "The clever fox hid ________________ the bushes.",
    answer: "behind",
  },
  {
    id: 9,
    sentence: "The picture hung ________________ the fire place.",
    answer: "over",
  },
  {
    id: 10,
    sentence: "All the books were ________________ the shelf.",
    answer: "on",
  },
];

export default function PrepositionPracticeSheet2() {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
  Preposition Pratice Sheet 2
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  

      <p className="mb-4 font-semibold">
        Use the correct preposition from the given options to fill in the blanks:
      </p>

      <ol className="list-decimal list-inside space-y-4 mb-8">
        {section1.map((q) => (
          <li key={q.id}>
            <div>
              {q.sentence}{" "}
              <span className="text-blue-600">({q.options.join(", ")})</span>
            </div>
            {showAnswers && (
              <div className="text-green-600 mt-1">
                ✅ Answer: <u>{q.answer}</u>
              </div>
            )}
          </li>
        ))}
      </ol>

      <p className="mb-2 font-semibold">
        Choose the correct preposition to fill in the blanks:
      </p>
      <div className="mb-4 text-blue-700 font-medium">
        Word Bank: behind, under, over, on, through
      </div>

      <ol className="list-decimal list-inside space-y-4 mb-8">
        {section2.map((q) => (
          <li key={q.id}>
            <div>{q.sentence}</div>
            {showAnswers && (
              <div className="text-green-600 mt-1">
                ✅ Answer: <u>{q.answer}</u>
              </div>
            )}
          </li>
        ))}
      </ol>

      <button
        onClick={() => setShowAnswers(!showAnswers)}
        className="mt-4 px-4 py-2 text-white bg-purple-600 font-semibold rounded"
      >
        {showAnswers ? 'Hide Answers' : 'Show Answers'}
      </button>
    </div>
  );
}
