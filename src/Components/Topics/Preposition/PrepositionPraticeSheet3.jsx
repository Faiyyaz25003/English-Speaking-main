'use client';

import { useState } from 'react';

const section1 = [
  {
    id: 1,
    sentence: "Sammy jumped ________________ the window.",
    options: ["at", "through"],
    answer: "through",
  },
  {
    id: 2,
    sentence: "I keep my suitcase ________________ the bed.",
    options: ["onto", "under"],
    answer: "under",
  },
  {
    id: 3,
    sentence: "They found the missing ball ________________ the couch.",
    options: ["behind", "among"],
    answer: "behind",
  },
  {
    id: 4,
    sentence: "We put the ladder ________________ the walls.",
    options: ["down", "against"],
    answer: "against",
  },
];

const section2 = [
  {
    id: 1,
    sentence: "I spent the morning ________________ the park.",
    answer: "in",
  },
  {
    id: 2,
    sentence: "The red box is ________________ to the green box.",
    answer: "next",
  },
  {
    id: 3,
    sentence: "Tim tied a bandage ________________ his injured arm.",
    answer: "around",
  },
  {
    id: 4,
    sentence: "Sam's best friend lives ________________ the road.",
    answer: "across",
  },
  {
    id: 5,
    sentence: "Jenny picked flowers ________________ the garden.",
    answer: "from",
  },
];

export default function PrepositionPracticeSheet3() {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
       <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
  Preposition Pratice Sheet 3
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  

      <p className="mb-4 font-semibold">Fill in the blanks with the correct preposition.</p>
      <ol className="list-decimal list-inside space-y-5 mb-8">
        {section1.map((q) => (
          <li key={q.id}>
            <div>
              {q.sentence}{" "}
              <span className="text-blue-600 font-medium">({q.options.join(" - ")})</span>
            </div>
            {showAnswers && (
              <div className="text-green-600 mt-1">
                ✅ Answer: <u>{q.answer}</u>
              </div>
            )}
          </li>
        ))}
      </ol>

      <p className="mb-2 font-semibold">Complete each sentence using a suitable preposition.</p>
      <div className="mb-6 text-blue-700 font-medium">
        from, next, around, across, in
      </div>

      <ol start={1} className="list-decimal list-inside space-y-5 mb-8">
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
        className="px-5 py-2 text-white bg-purple-600 font-semibold rounded"
      >
        {showAnswers ? "Hide Answers" : "Show Answers"}
      </button>
    </div>
  );
}
