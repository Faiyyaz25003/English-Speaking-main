
'use client';
import React, { useState } from 'react';

const adverbs = [
  'slowly', 'carefully', 'beautifully', 'well', 'loudly',
  'carelessly', 'easily', 'excitedly', 'finally', 'suddenly', 'quickly', 'quietly'
];

const answers = [
  'quickly', 'excitedly', 'carelessly', 'finally', 'slowly',
  'easily', 'suddenly', 'loudly', 'well', 'beautifully'
];

const questions = [
  "Come here _________________. You have to see this!",
  "We knew that she had got the job when we saw her ________________ talking on the phone.",
  "He ________________ put the vase on the table. It fell to the floor.",
  "Sharon is throwing a party on Saturday. She ________________ finished her PhD.",
  "Let's walk ________________. I don't want to be the first one at the meeting.",
  "Alex ________________ put up the bookshelves. It was too difficult for me to do on my own.",
  "Everything happened so ________________. We had to move to California in less than a month.",
  "Why does he always have to talk so ________________? You can hear him in the next room!",
  "Although she speaks five languages, she did not do ________________ on the translation exam.",
  "I was so surprised. His new apartment was ________________ decorated."
];

export default function AdverbsPracticeSheet1() {
  const [showAnswers, setShowAnswers] = useState(false);
  const [userAnswers, setUserAnswers] = useState(Array(10).fill(''));

  const handleChange = (index, value) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = value;
    setUserAnswers(updatedAnswers);
  };

  return (
    <main className="p-6 max-w-4xl mx-auto text-gray-900">

      

       <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
    Adverbs Practice Sheet 1
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />


      <p className="mb-4">Adverbs are words that modify:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>a verb (He drove <strong>slowly</strong>.)</li>
        <li>an adjective (He drove a <strong>very</strong> fast car.)</li>
        <li>another adverb (She moved <strong>quite</strong> slowly down the aisle.)</li>
      </ul>

      <p className="mb-6">
        Adverbs often tell when, where, why, or how something happens. Many end in -ly,
        but some words like "friendly" or "lovely" are adjectives.
      </p>

      <p className="mb-2 font-semibold">Fill in the following adverbs:</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {adverbs.map((adv, idx) => (
          <span key={idx} className="bg-blue-100 px-3 py-1 rounded-full text-sm">{adv}</span>
        ))}
      </div>

      <div className="space-y-4">
        {questions.map((q, index) => (
          <div key={index}>
            <label className="block mb-1 font-medium">{index + 1}. {q.replace('_______________', '')}</label>
            <input
              type="text"
              value={userAnswers[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg"
              placeholder="Your answer"
            />
            {showAnswers && (
              <p className="text-green-600 mt-1">Correct answer: <strong>{answers[index]}</strong></p>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowAnswers(!showAnswers)}
        className="mt-6 bg-purple-600 text-white px-6 py-2 rounded "
      >
        {showAnswers ? 'Hide Answers' : 'Show Answers'}
      </button>
    </main>
  );
}
