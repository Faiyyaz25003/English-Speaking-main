
'use client';

import { useState } from 'react';

export default function SpecialPluralNounSheet() {
  const [showAnswers, setShowAnswers] = useState(false);

  const data = [
    { question: 'Mrs. Nawaz has three ____________________________. (child)', answer: 'children' },
    { question: 'A flock of ____________________ just flew over the bridge. (goose)', answer: 'geese' },
    { question: 'Two ____________________ ran through the hole into the wall. (mouse)', answer: 'mice' },
    { question: 'Please cut the pizza slice into two equal ____________________. (half)', answer: 'halves' },
    { question: 'The doctor asked me to clean my ____________________ before sleeping. (tooth)', answer: 'teeth' },
    { question: 'The ____________________ at the school were very tired. (woman)', answer: 'women' },
    { question: 'Store the ____________________ at a safe place in the kitchen. (knife)', answer: 'knives' },
    { question: 'Those ____________________ in the queue were feeling angry. (person)', answer: 'people' },
    { question: 'Father likes to eat ____________________ of bread for dinner. (loaf)', answer: 'loaves' },
    { question: 'The ____________________ were making bricks. (man)', answer: 'men' },
    { question: 'I saw a pack of ____________________ in the jungle. (wolf)', answer: 'wolves' },
    { question: 'The farmer had a dozen ____________________. (sheep)', answer: 'sheep' },
    { question: 'There were many ____________________ in the forest. (deer)', answer: 'deer' },
  ];

  const Under = ({ children }) => (
    <span className="underline font-semibold">{children}</span>
  );

  const Blank = ({ width = 'w-64' }) => (
    <span className={`inline-block border-b border-gray-400 align-middle ${width}`} />
  );

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-gray-900">
       <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
   Special Plural Noun
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  

      {/* Definition Section */}
      <div className="bg-purple-50 p-6 rounded-lg shadow mb-6">
        <p className="text-lg font-semibold mb-2">
          <strong className="text-purple-600">Understanding Special Plural Nouns</strong>
        </p>
        <div className="mb-4">
          <p className="text-gray-700">
            Some nouns do not follow the regular rule of adding <strong>-s</strong> or <strong>-es</strong> to form their plural. These nouns are called <strong>irregular plural nouns</strong>. Irregular plural nouns change in unique ways, and it’s important to learn them individually.
          </p>
          <p className="text-gray-700">
            Examples of common irregular plural nouns include:
          </p>
          <ul className="list-disc pl-6 text-sm space-y-2">
            <li><strong>child</strong> → <strong>children</strong></li>
            <li><strong>man</strong> → <strong>men</strong></li>
            <li><strong>foot</strong> → <strong>feet</strong></li>
            <li><strong>tooth</strong> → <strong>teeth</strong></li>
            <li><strong>mouse</strong> → <strong>mice</strong></li>
          </ul>
          <p className="text-gray-700">
            Some irregular nouns do not change at all in the plural form, such as:
          </p>
          <ul className="list-disc pl-6 text-sm space-y-2">
            <li><strong>sheep</strong> → <strong>sheep</strong></li>
            <li><strong>deer</strong> → <strong>deer</strong></li>
          </ul>
          <p className="text-gray-700">
            In some cases, an entirely new word is used to indicate the plural form, such as:
          </p>
          <ul className="list-disc pl-6 text-sm space-y-2">
            <li><strong>half</strong> → <strong>halves</strong></li>
            <li><strong>knife</strong> → <strong>knives</strong></li>
            <li><strong>loaf</strong> → <strong>loaves</strong></li>
          </ul>
          <p className="text-gray-700">
            Remember, irregular plural nouns don’t follow the usual patterns and need to be memorized, as there’s no fixed rule to apply.
          </p>
        </div>
      </div>

      <hr className="my-6" />

      {/* Instructions Section */}
      <p className="font-semibold mb-1">Some nouns do not follow the rule.</p>
      <p className="mb-4">
        Adding –s or –es to a noun does not work to make the noun a plural noun.
        <br />
        <br />
        <strong>Read the sentence below and write the plural of the nouns in parentheses.</strong>
      </p>

      {/* Questions */}
      <ol className="space-y-3 list-decimal list-inside mb-6">
        {data.map((item, index) => (
          <li key={index} className="flex flex-wrap gap-2">
            <span>{item.question.replace(/_+/, '')}</span>
            <Blank width="w-52" />
            <span>({item.question.match(/\(([^)]+)\)/)?.[1]})</span>
          </li>
        ))}
      </ol>

      {/* Toggle Button */}
      <button
        onClick={() => setShowAnswers(!showAnswers)}
        className="mt-6 px-4 py-2 bg-purple-600 text-white rounded  transition"
      >
        {showAnswers ? 'Hide Answers' : 'Show Answers'}
      </button>

      {/* Answer Key */}
      {showAnswers && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Answer Key</h2>
          <ol className="space-y-2 list-decimal list-inside">
            {data.map((item, index) => (
              <li key={index}>
                {item.question
                  .replace(/_+/, ' ')
                  .replace(/\s*\([^)]+\)/, '')}{' '}
                <Under>{item.answer}</Under>.
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
