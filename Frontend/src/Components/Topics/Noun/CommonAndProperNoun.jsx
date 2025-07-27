
'use client';

import { useState } from 'react';

export default function CommonProperNoun() {
  const [showAnswers, setShowAnswers] = useState(false);

  const nouns = [
    { word: 'june', answer: 'June' },
    { word: 'month', answer: 'common noun' },
    { word: 'day', answer: 'common noun' },
    { word: 'wednesday', answer: 'Wednesday' },
    { word: 'holiday', answer: 'common noun' },
    { word: 'christmas', answer: 'Christmas' },
    { word: 'cereal', answer: 'common noun' },
    { word: 'kellogs', answer: 'Kellogs' },
    { word: 'dr. aartz', answer: 'Dr. Aartz' },
    { word: 'policeman', answer: 'common noun' },
    { word: 'city', answer: 'common noun' },
    { word: 'new york', answer: 'New York' },
    { word: 'street', answer: 'common noun' },
    { word: 'main street', answer: 'Main Street' },
    { word: 'pizza hut', answer: 'Pizza Hut' },
    { word: 'restaurant', answer: 'common noun' },
    { word: 'joseph', answer: 'Joseph' },
    { word: 'creek', answer: 'common noun' },
    { word: 'pig', answer: 'common noun' },
    { word: 'mickey mouse', answer: 'Mickey Mouse' },
  ];

  const sentenceExample = {
    text: 'Joe is going theme park with her mother next Sunday.',
    proper: ['Joe', 'Sunday'],
    common: ['theme park', 'mother'],
  };

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans text-gray-800">
    
      <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
   Commom and Proper Noun
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  

      <div className="bg-purple-50 p-6 rounded-lg shadow mb-6">
        <p className="text-lg font-semibold mb-2">
          <strong className=" text-2xl text-purple-600">Understanding Common and Proper Nouns</strong>
        </p>
        <div className="mb-4">
          <p className="text-gray-700">
            A <strong>Noun</strong> is a word that represents a person, place, thing, or idea. Nouns are divided into two main categories: <strong>Common Nouns</strong> and <strong>Proper Nouns</strong>.
          </p>
          <ul className="list-disc pl-6 text-sm space-y-2">
            <li>
              <strong>Common Nouns</strong> are general names for things, people, or places. For example:
              <ul className="list-inside list-circle text-gray-600">
                <li>city, day, animal, car, restaurant</li>
              </ul>
            </li>
            <li>
              <strong>Proper Nouns</strong> refer to specific names of people, places, or things. They are always capitalized, no matter where they appear in a sentence. For example:
              <ul className="list-inside list-circle text-gray-600">
                <li>Paris, Monday, Eiffel Tower, John</li>
              </ul>
            </li>
          </ul>
        </div>
        <p className="text-gray-700">
          Regardless of where they appear in a sentence, <strong>Proper Nouns</strong> always start with a capital letter. This is a key distinction between common and proper nouns. Below is an example:
        </p>
        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
          <p className="font-medium text-gray-800">
            <strong>Example:</strong><br />
            <span className="text-blue-700">Common Noun:</span> The <u>park</u> is beautiful.<br />
            <span className="text-blue-700">Proper Noun:</span> <u>Central Park</u> is beautiful.
          </p>
        </div>
      </div>

      <p className="text-lg font-semibold mb-4">
        📝 Identify the noun type. If it is a proper noun, capitalize it correctly:
      </p>

      <div className="bg-white p-6 rounded-lg shadow mb-8 border border-gray-200">
        <ol className="list-decimal pl-5 space-y-3">
          {nouns.map((item, idx) => (
            <li key={idx} className="flex items-center justify-between">
              <span className="capitalize font-medium">{item.word}</span>
              <span className="border-b border-dashed w-2/3 h-6 inline-block" />
            </li>
          ))}
        </ol>
      </div>

      <div className="mb-6 p-4 bg-yellow-50 rounded-lg shadow border border-yellow-300">
        <p className="font-semibold mb-1">
          ✍️ Write a sentence using <span className="text-blue-600">one Proper Noun</span> and <span className="text-green-600">one Common Noun</span>:
        </p>
        <div className="border-t border-b py-4 text-gray-500 italic">Your answer here...</div>
      </div>

      <div className="flex justify-center">
        <button
          className="mt-4 px-6 py-2 bg-gradient-to-rtext-white bg-purple-600 rounded-full font-semibold shadow duration-300"
          onClick={() => setShowAnswers(!showAnswers)}
        >
          {showAnswers ? '🙈 Hide Answers' : '👀 Show Answers'}
        </button>
      </div>

      {showAnswers && (
        <div className="mt-10 bg-blue-50 p-6 rounded-xl border border-blue-200 shadow">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">✅ Answer Key</h2>

          <ol className="list-decimal pl-5 space-y-2 text-base">
            {nouns.map((item, idx) => (
              <li key={idx}>
                <span className="capitalize font-medium">{item.word}</span> -{' '}
                <span className={item.answer === 'common noun' ? 'text-gray-700' : 'text-blue-700 font-semibold'}>
                  {item.answer}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
            <p className="mb-2">
              <strong>Example Sentence:</strong><br />
              <span className="italic">
                <u>{sentenceExample.proper[0]}</u> is going <u>{sentenceExample.common[0]}</u> with her <u>{sentenceExample.common[1]}</u> next <u>{sentenceExample.proper[1]}</u>.
              </span>
            </p>
            <p className="mt-2">
              <strong className="text-green-700">Common Nouns:</strong> {sentenceExample.common.join(', ')}<br />
              <strong className="text-blue-700">Proper Nouns:</strong> {sentenceExample.proper.join(', ')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
