'use client';

import React, { useState } from 'react';

export default function PronounsPracticeSheet1() {
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  const questions = [
    "________ (I, They, He) are having trouble getting back to the library.",
    "What time was ________ (we, they, she) planning on leaving?",
    "Six of ________ (me, us, you) went to the store with Andy.",
    "Every Thursday, Jim goes for swimming with ________. (I, he, them)",
    "Sara wanted to watch movie with ________. (them, they, she)"
  ];

  const answers = [
    "They are having trouble getting back to the library.",
    "What time was she planning on leaving?",
    "Six of us went to the store with Andy.",
    "Every Thursday, Jim goes for swimming with them.",
    "Sara wanted to watch movie with them."
  ];

  const fillQuestions = [
    "Tom and I are going to the circus. ________ are meeting at three o'clock.",
    "The baby is crying loudly. ________ looks hungry.",
    "Your feet are very dirty. ________ must wash them.",
    "Peacock is a beautiful bird. ________ has colorful feathers.",
    "I have two kitten ________ have a puppy too."
  ];

  const fillAnswers = [
    "We are meeting at three o'clock.",
    "He looks hungry.",
    "You must wash them.",
    "It has colorful feathers.",
    "and have a puppy too."
  ];

  const highlightPronoun = (sentence, pronoun) => {
    const regex = new RegExp(`\\b(${pronoun})\\b`, 'gi');
    return sentence.split(regex).map((part, idx) =>
      part.toLowerCase() === pronoun.toLowerCase() ? (
        <strong key={idx} className="underline">{part}</strong>
      ) : (
        part
      )
    );
  };

  const highlightedAnswers = [
    highlightPronoun(answers[0], 'They'),
    highlightPronoun(answers[1], 'she'),
    highlightPronoun(answers[2], 'us'),
    highlightPronoun(answers[3], 'them'),
    highlightPronoun(answers[4], 'them')
  ];

  const highlightedFillAnswers = [
    highlightPronoun(fillAnswers[0], 'We'),
    highlightPronoun(fillAnswers[1], 'He'),
    highlightPronoun(fillAnswers[2], 'You'),
    highlightPronoun(fillAnswers[3], 'It'),
    highlightPronoun(fillAnswers[4], 'and')
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">

        <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
  Pronouns Practice Sheet 1
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  

      <p className="font-semibold mb-2">Select the correct pronoun that goes with the verb in each sentence.</p>
      <ol className="list-decimal pl-5 space-y-1 mb-6">
        {questions.map((q, idx) => (
          <li key={idx}>{q}</li>
        ))}
      </ol>

      <p className="font-semibold mb-2">Fill in the blanks with a suitable pronoun.</p>
      <ol className="list-decimal pl-5 space-y-1">
        {fillQuestions.map((q, idx) => (
          <li key={idx}>{q}</li>
        ))}
      </ol>

      <button
        onClick={() => setShowAnswerKey(!showAnswerKey)}
        className="mt-6 px-5 py-2 text-white bg-purple-600 rounded transition"
      >
        {showAnswerKey ? 'Hide Answers' : 'Show Answers'}
      </button>

      {showAnswerKey && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Answer Key</h2>
          <p className="font-semibold mb-2">Select the correct pronoun that goes with the verb in each sentence.</p>
          <ol className="list-decimal pl-5 space-y-1 mb-6">
            {highlightedAnswers.map((a, idx) => (
              <li key={idx}>{a}</li>
            ))}
          </ol>

          <p className="font-semibold mb-2">Fill in the blanks with a suitable pronoun.</p>
          <ol className="list-decimal pl-5 space-y-1">
            {highlightedFillAnswers.map((a, idx) => (
              <li key={idx}>{a}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}