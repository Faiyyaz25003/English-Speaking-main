import { useState } from "react";

export default function CompoundWordsPracticeSheet2() {
  const [showAnswers, setShowAnswers] = useState(false);

  const questions = [
    { words: ["light", "hot", "sun"], answer: "sunlight" },
    { words: ["cloth", "chair", "table"], answer: "tablecloth" },
    { words: ["bed", "sleep", "time"], answer: "bedtime" },
    { words: ["print", "finger", "home"], answer: "fingerprint" },
  ];

  return (
    <div className="min-h-screen bg-white py-10 px-5 md:px-20">
     <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-4xl font-extrabold text-red-600">
    Compound Words Practice Sheet 2
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" /> 
      <p className="mb-6 font-medium text-gray-700">
        <strong>Read</strong> the three words in each line. Join two words to form a compound word.
      </p>

      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <span className="font-semibold">{i + 1}. </span>
          {q.words.map((word, j) => (
            <span key={j} className="inline-block mr-4 text-gray-800">
              {word}
            </span>
          ))}
          <input
            type="text"
            className="border border-gray-300 px-3 py-1 rounded ml-2 w-48"
            placeholder="Your answer"
            defaultValue=""
          />
        </div>
      ))}

      <button
        onClick={() => setShowAnswers(!showAnswers)}
        className="mt-6 bg-purple-600 text-white px-4 py-2 rounded transition"
      >
        {showAnswers ? "Hide Answers" : "Show Answers"}
      </button>

      {showAnswers && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Answer Key</h2>
          <ol className="list-decimal ml-6 text-gray-800">
            {questions.map((q, i) => (
              <li key={i}>
                <strong className="underline">{q.answer}</strong>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
