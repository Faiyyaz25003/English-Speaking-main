'use client';

import { useState } from 'react';

export default function SpeechPraticeSheet1() {
  const [showAnswers, setShowAnswers] = useState(false);

  const questions = [
    'Peter said, "I have got a toothache".',
    'Annie said, "I am very busy now".',
    '"Give me a cup of water," Mark told her.',
    'Jessica said, "I am going to college."',
    'She said to me, "Thank you"',
    'Steven said, "Ashley must go tomorrow".',
    'Emily says, "My father is a teacher."',
  ];

  const answers = [
    'Peter said that he had got a toothache.',
    'Annie said that she was very busy then.',
    'Mark asked her to give him a cup of water.',
    'Jessica said that she was going to college.',
    'She thanked me.',
    'Steven said that Ashley would have to go the following day.',
    'Emily says that her father is a teacher.',
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
     
      <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
  Direct and Indirect Speech: Practice Sheet 1
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  
      

      <p className="font-semibold text-lg mb-6">
        Turn these sentences with direct speech into those with indirect speech:
      </p>

      <ol className="list-decimal pl-6 space-y-4 text-lg">
        {questions.map((q, idx) => (
          <li key={idx}>
            {q}
            <div className="mt-2 border-b border-gray-400 w-full"></div>
          </li>
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
          <ol className="list-decimal pl-6 space-y-2 text-lg text-gray-800">
            {answers.map((a, idx) => (
              <li key={idx}>{a}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
