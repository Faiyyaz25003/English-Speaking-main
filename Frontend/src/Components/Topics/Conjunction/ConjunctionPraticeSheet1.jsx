'use client';

import { useState } from 'react';

export default function ConjunctionsPracticeSheet1() {
  const [showAnswers, setShowAnswers] = useState(false);

  const questions = [
    'I wanted to buy chocolate. The store did not have any.',
    'James swims really well. His diving is impressive too.',
    'I bought an enormous cake. Matt and I shared it.',
    'John has a brother. He does not have a sister.',
    'We went to the toy shop. The shop was closed.',
    'Mr. Tim sat on his armchair. He fell fast asleep.',
    'Mark wanted an ice cream. He had no money.',
    'Sally fell down. She hurt her toe.',
  ];

  const answers = [
    'I wanted to buy chocolate **but** the store did not have any.',
    'James swims really well **and** his diving is impressive too.',
    'I bought an enormous cake **and** Matt and I shared it.',
    'John has a brother **but** he does not have a sister.',
    'We went to the toy shop **but** the shop was closed.',
    'Mr. Tim sat on his armchair **and** he fell fast asleep.',
    'Mark wanted an ice cream **but** he had no money.',
    'Sally fell down **and** she hurt her toe.',
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      
    <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-4xl font-extrabold text-red-600">
    Conjunctions Practice Sheet 1
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" /> 

      
      <p className="mb-6 text-lg font-medium">
        Join these short sentences together using the conjunction <strong>'and'</strong> or <strong>'but'</strong>.
      </p>

      <ol className="list-decimal pl-6 space-y-8 text-lg">
        {questions.map((q, index) => (
          <li key={index}>
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
          <ol className="list-decimal pl-6 space-y-2 text-lg">
            {answers.map((a, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: a.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
