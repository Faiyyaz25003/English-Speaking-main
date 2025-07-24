'use client';

import { useState } from 'react';

export default function PunctuationPracticeSheet1() {
  const [showAnswers, setShowAnswers] = useState(false);

  const questions = [
    "gold iron silver and lead are all metals",
    "cyprus corsica malta and sicily are all islands",
    "how many days are there in a week",
    "did you seen any zebra at the zoo",
    "does she know how to make tea",
    "sam invited joe kin tim and jack to his party",
    "orange yellow green blue indigo and violet are rainbow colors",
  ];

  const answers = [
    "Gold, iron, silver and lead are all metals.",
    "Cyprus, Corsica, Malta and Sicily are all islands.",
    "How many days are there in a week?",
    "Did you see any zebra at the zoo?",
    "Does she know how to make tea?",
    "Sam invited Joe, Kin, Tim and Jack to his party.",
    "Orange, yellow, green, blue, indigo and violet are the rainbow colors.",
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      
       <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
  Punctuation Practice Sheet 1
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  

      <p className="mb-4">Punctuation marks help us to make sense of what we are reading.</p>

      <ul className="mb-6 space-y-2">
        <li>• <strong>A full stop</strong> tells us to stop.</li>
        <li>❓ <strong>A question mark</strong> tells us that a question is being asked.</li>
        <li>, <strong>A comma</strong> tells us to pause. It is used to separate items in a list.</li>
      </ul>

      <p className="font-semibold mb-4">
        Punctuate these sentences correctly. Put in capital letters, full stops, question marks and commas.
      </p>

      <div className="space-y-6 mb-8">
        {questions.map((q, idx) => (
          <div key={idx}>
            <p className="mb-1">{idx + 1}. {q}</p>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Write your corrected sentence here"
            />
          </div>
        ))}
      </div>

      <button
        className="px-4 py-2 roundedtext-white bg-purple-600 transition"
        onClick={() => setShowAnswers(!showAnswers)}
      >
        {showAnswers ? 'Hide Answers' : 'Show Answers'}
      </button>

      {showAnswers && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Answer Key</h2>
          <ol className="list-decimal pl-5 space-y-2 text-blue-800">
            {answers.map((ans, idx) => (
              <li key={idx}>{ans}</li>
            ))}
          </ol>
        </div>
      )}
    </main>
  );
}
