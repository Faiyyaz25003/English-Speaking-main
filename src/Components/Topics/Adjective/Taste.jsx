import React, { useState } from 'react';

export default function Taste() {
  const [showAnswers, setShowAnswers] = useState(false);

  const adjectives = [
    "Bitter", "Spicy", "Bland", "Minty", "Sweet", "Delicious",
    "Pickled", "Tangy", "Fruity", "Salty", "Tasty", "Gingery",
    "Sour", "Yummy", "Vanilla-flavoured"
  ];

  const answers = {
    1: "Sour",
    2: "Sweet",
    3: "Spicy",
    4: "Salty",
    5: "Yummy / Tasty / Delicious"
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 text-gray-800">
      <div className="max-w-3xl mx-auto">
   
        <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-[22px] font-extrabold text-red-600">
    Adjectives Sheet 3: Person, personality, attitude, behavior
  </h1>
</div>
<hr className="border-t-4 border-purple-300 mb-8" />

        <ul className="grid grid-cols-2 gap-2 mb-8 list-disc pl-6">
          {adjectives.map((adj, idx) => (
            <li key={idx}>{adj}</li>
          ))}
        </ul>

        <h2 className="font-semibold text-lg mb-2">Practice. Insert the correct adjective:</h2>
        <div className="space-y-4 mb-6">
          <p>1. Lemons are ________________</p>
          <p>2. I don't mind having a dessert as long as it's not too ________________</p>
          <p>3. I like Mexican and Thai cuisine the most, since both of them can be very ________________</p>
          <p>4. I prefer ________________ snacks, like crackers, tex mex and peanuts.</p>
          <p>5. That food was so ________________! We should go to that restaurant again.</p>
        </div>

        <button
          onClick={() => setShowAnswers(!showAnswers)}
          className="px-4 py-2 bg-purple-600 text-sm border rounded"
        >
          {showAnswers ? 'Hide Answers' : 'Show Answers'}
        </button>

        {showAnswers && (
          <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-xl bg-purple-600 mb-2">Answer Key</h3>
            <ul className="list-decimal pl-6 space-y-1">
              {Object.entries(answers).map(([key, value]) => (
                <li key={key}>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
  </div>
  );
}
