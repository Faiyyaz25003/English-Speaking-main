
'use client';
import { useState } from 'react';

export default function PluralNouns() {
  const [showAnswers, setShowAnswers] = useState(false);

  /* -------------------- DATA -------------------- */
  // Section 1: pick the correct word from 2 choices shown in ()
  const sec1 = [
    { q: 'My father drives a (truck, trucks)', a: 'truck' },
    { q: 'His truck has sixteen (wheels, wheel)', a: 'wheels' },
    { q: 'Dad drives the truck to a (dock, docks)', a: 'dock' },
    { q: 'Several (ship, ships) came into the dock today.', a: 'ships' },
    { q: 'Dad loaded many (barrels, barrel) into his truck.', a: 'barrels' },
  ];

  // Section 2: write plural form from singular in ()
  const sec2 = [
    { base: 'story', a: 'stories', full: 'Lara reads some stories.' },
    { base: 'family', a: 'families', full: 'Each story was about animal families.' },
    { base: 'baby', a: 'babies', full: 'She learned about animal babies.' },
    { base: 'puppy', a: 'puppies', full: 'Baby dogs are called puppies.' },
    { base: 'bunny', a: 'bunnies', full: 'Baby rabbits are called bunnies.' },
  ];

  // Section 3: irregular plurals
  const sec3 = [
    { base: 'child', a: 'children', full: 'The children went to the farm.' },
    { base: 'man', a: 'men', full: 'Some men worked in the field.' },
    { base: 'goose', a: 'geese', full: 'I fed some geese.' },
    { base: 'mouse', a: 'mice', full: 'Field mice ran across the road.' },
    { base: 'tooth', a: 'teeth', full: "The farmer checked the horse's teeth." },
  ];

  /* -------------------- HELPERS -------------------- */
  const Under = ({ children }) => (
    <span className="underline font-semibold">{children}</span>
  );

  const Blank = ({ width = 'w-64' }) => (
    <span className={`inline-block border-b border-gray-400 align-middle ${width}`} />
  );

  /* -------------------- RENDER -------------------- */
  return (
    <div className="max-w-3xl mx-auto p-6 font-sans text-gray-900">

      
      <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
  Plural Nouns 
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  
      {/* Definition Section */}
      <div className="bg-purple-50 p-6 rounded-lg shadow mb-6">
        <p className="text-lg font-semibold mb-2">
          <strong className="text-purple-600">Understanding Plural Nouns</strong>
        </p>
        <div className="mb-4">
          <p className="text-gray-700">
            A <strong>plural noun</strong> refers to more than one person, animal, thing, or concept. In English, nouns are typically made plural by adding <strong>-s</strong> or <strong>-es</strong> to the singular form of the word.
          </p>
          <p className="text-gray-700">
            Plural nouns are important because they help us specify that we are talking about more than one item or individual. For example, when we say <u>cats</u> instead of <u>cat</u>, we are indicating that we mean more than one cat.
          </p>
          <p className="text-gray-700">
            <strong>Regular plural nouns</strong> are the most common. They typically follow the rule of adding <strong>-s</strong> to the singular form of the noun, such as:
          </p>
          <ul className="list-disc pl-6 text-sm space-y-2">
            <li><strong>cat</strong> → <strong>cats</strong></li>
            <li><strong>dog</strong> → <strong>dogs</strong></li>
            <li><strong>book</strong> → <strong>books</strong></li>
          </ul>
          <p className="text-gray-700">
            <strong>Plural nouns ending in -s, -x, -z, -ch, or -sh</strong> require an additional <strong>-es</strong> at the end of the word:
          </p>
          <ul className="list-disc pl-6 text-sm space-y-2">
            <li><strong>box</strong> → <strong>boxes</strong></li>
            <li><strong>class</strong> → <strong>classes</strong></li>
            <li><strong>watch</strong> → <strong>watches</strong></li>
          </ul>
          <ul className="list-disc pl-6 text-sm space-y-2">
            <li><strong>child</strong> → <strong>children</strong></li>
            <li><strong>man</strong> → <strong>men</strong></li>
            <li><strong>foot</strong> → <strong>feet</strong></li>
          </ul>
        </div>
      </div>

      <hr className="my-6" />

      {/* Section 1 (Questions) */}
      <p className="font-semibold mb-2">Write the noun that completes each sentence correctly.</p>
      <ol className="list-decimal ml-6 space-y-2 mb-8">
        {sec1.map((item, i) => (
          <li key={i} className="flex flex-wrap gap-2">
            <span>{item.q}</span>
            <Blank />
          </li>
        ))}
      </ol>

      {/* Section 2 (Questions) */}
      <p className="font-semibold mb-2">
        Use the plural form of each noun in () to complete each sentence.
      </p>
      <ol className="list-decimal ml-6 space-y-2 mb-8">
        {sec2.map((item, i) => (
          <li key={i} className="flex flex-wrap gap-2">
            <span>
              {i === 0 && 'Lara reads some' }
              {i === 1 && 'Each story was about animal' }
              {i === 2 && 'She learned about animal' }
              {i === 3 && 'Baby dogs are called' }
              {i === 4 && 'Baby rabbits are called' }
            </span>
            <Blank width="w-40" />
            <span>({item.base})</span>
          </li>
        ))}
      </ol>

      {/* Section 3 (Questions) */}
      <p className="font-semibold mb-2">
        Use the plural form of the noun in () to complete each sentence.
      </p>
      <ol className="list-decimal ml-6 space-y-2 mb-8">
        {sec3.map((item, i) => (
          <li key={i} className="flex flex-wrap gap-2">
            <span>
              {i === 0 && 'The' }
              {i === 1 && 'Some' }
              {i === 2 && 'I fed some' }
              {i === 3 && 'Field' }
              {i === 4 && "The farmer checked the horse's" }
            </span>
            <Blank width="w-40" />
            <span>({item.base})</span>
          </li>
        ))}
      </ol>

      {/* Toggle Button */}
      <button
        onClick={() => setShowAnswers(!showAnswers)}
        className="px-4 py-2 text-white bg-purple-600 rounded transition"
      >
        {showAnswers ? 'Hide Answers' : 'Show Answers'}
      </button>

      {/* -------------------- ANSWER KEY -------------------- */}
      {showAnswers && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Answer Key</h2>

          {/* Section 1 Answers */}
          <p className="font-semibold mb-2">Write the noun that completes each sentence correctly.</p>
          <ol className="list-decimal ml-6 space-y-1 mb-8">
            {sec1.map((item, i) => (
              <li key={i}>
                {item.q.replace(/\s*\([^)]*\)/, '')}{' '}
                <Under>{item.a}</Under> .
              </li>
            ))}
          </ol>

          {/* Section 2 Answers */}
          <p className="font-semibold mb-2">
            Use the plural form of each noun in () to complete each sentence.
          </p>
          <ol className="list-decimal ml-6 space-y-1 mb-8">
            {sec2.map((item, i) => (
              <li key={i}>
                {item.full.split(item.a).map((seg, idx, arr) => (
                  idx < arr.length - 1 ? (
                    <span key={idx}>
                      {seg}
                      <Under>{item.a}</Under>
                    </span>
                  ) : seg
                ))}
              </li>
            ))}
          </ol>

          {/* Section 3 Answers */}
          <p className="font-semibold mb-2">
            Use the plural form of the noun in () to complete each sentence.
          </p>
          <ol className="list-decimal ml-6 space-y-1">
            {sec3.map((item, i) => (
              <li key={i}>
                {item.full.split(item.a).map((seg, idx, arr) => (
                  idx < arr.length - 1 ? (
                    <span key={idx}>
                      {seg}
                      <Under>{item.a}</Under>
                    </span>
                  ) : seg
                ))}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
