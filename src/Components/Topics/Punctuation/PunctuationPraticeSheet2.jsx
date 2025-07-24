import { useState } from 'react';

export default function PunctuationPracticeSheet2() {
  const [showAnswers, setShowAnswers] = useState(false);

  const questions = [
    "joe kevin harry jerry are all brothers.",
    "there were cars trucks buses bicycles on the busy road.",
    "was it raining outside",
    "we are planning to go dubai this summer",
    "sara sophie and andrew are siblings",
    "when will go shopping with daddy"
  ];

  const answers = [
    "Joe, Kevin, Harry, Jerry are all brothers.",
    "There were cars, trucks, buses, bicycles on the busy road.",
    "Was it raining outside?",
    "We are planning to go Dubai this summer.",
    "Sara, Sophie and Andrew are siblings.",
    "When will go shopping with daddy?"
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 font-sans">
      <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
  Punctuation Practice Sheet 2
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  
      <p className="font-semibold mb-6">
        Rewrite the sentences by putting in the question mark, full stops and commas.
      </p>

      {questions.map((q, index) => (
        <div key={index} className="mb-4">
          <p className="text-gray-800">{q}</p>
          <hr className="my-2 border-gray-300" />
        </div>
      ))}

      <button
        onClick={() => setShowAnswers(!showAnswers)}
        className="text-white bg-purple-600 px-4 py-2 rounded transition"
      >
        {showAnswers ? "Hide Answers" : "Show Answers"}
      </button>

      {showAnswers && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-3">Answer Key</h2>
          {answers.map((a, index) => (
            <p key={index} className="mb-2 underline text-gray-900">{a}</p>
          ))}
        </div>
      )}
    </div>
  );
}
