'use client';
import React, { useState } from 'react';

export default function AdverbsPracticeSheet2() {
  const [showAnswers, setShowAnswers] = useState(false);

  const questions = [
    "It seems like he's always in a hurry. I wonder why he always walks so ________________ (quick/quickly).",
    "Library is my favorite place to study. It's always ________________ (quiet/quietly).",
    "Jessica has ________________ (happy/happily) to help us out with this project.",
    "Emily sings ________________ (beautiful/beautifully). She's been a member of church choir she was seven years old.",
    "This family speaks Dutch very ________________ (good/well). They lived in Amsterdam for two years.",
    "Our neighbors always play ________________ (loud/loudly) music on the weekends. It's so annoying.",
    "Make sure you're careful ________________ (careful/carefully) in the hallway. The floors may still be wet.",
    "Dan is very smart, but he is not a very ________________ (good/well) student.",
    "He reacted ________________ (angry/angrily) to the news. I have never seen him so upset.",
    "We didn't ________________ (complete/completely) understand the teacher's instructions. Most of us did not finish the assignment.",
  ];

  const answers = [
    "quickly", "quiet", "happily", "beautifully", "well",
    "loud", "careful", "good", "angrily", "completely"
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-2xl">🌟</span>
        <h1 className="text-3xl font-extrabold text-red-600">
          Adverbs Practice Sheet 2
        </h1>
      </div>
      <hr className="border-t-4 border-purple-300 mb-8" />

      <p className="mb-6 text-gray-600 text-center">
        Complete the sentence by inserting an <strong>adjective</strong> or <strong>adverb</strong>.
      </p>

      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i}>
            <label className="block text-gray-700 mb-1">Q{i + 1}. {q}</label>

            {/* Show answer only when button clicked */}
            {showAnswers && (
              <p className="text-green-600 font-medium mt-2">
                Correct answer: {answers[i]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => setShowAnswers(!showAnswers)}
          className="px-6 py-2 bg-purple-600 text-white rounded"
        >
          {showAnswers ? 'Hide Answers' : 'Show Answers'}
        </button>
      </div>
    </div>
  );
}
