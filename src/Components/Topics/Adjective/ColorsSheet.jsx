

'use client';
import React, { useState } from 'react';

export default function ColorsSheet() {
  const [showAnswers, setShowAnswers] = useState(false);

  const adjectives = [
    "Azure", "Gray", "Pinkish", "Black", "Green", "Purple", "Blue", "Indigo", "Red", "Teal", "Bright", "Mauve",
    "Lavender", "Lilac", "Cream", "Beige", "Rosy", "Brown", "Light", "Scarlet", "Crimson", "Magenta", "Silver", "Dark",
    "Multicolored", "Turquoise", "Drab", "Mustard", "Violet", "Dull", "Orange", "White", "Gold", "Pink", "Yellow", "Ivory"
  ];

  const answers = {
    1: "Yellow, orange, gold",
    2: "Blue, white",
    3: "Black",
    4: "Cream, ivory",
    5: "Yellow, purple, green"
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 text-gray-800">
      <div className="max-w-4xl mx-auto">

        {/* 🌟 Common and Proper Nouns Practice heading */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl">🌟</span>
          <h1 className="text-3xl font-extrabold text-red-600">Common and Proper Nouns Practice</h1>
        </div>
        <hr className="border-t-4 border-purple-300 mb-8" />


        {/* Adjective List */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 mb-8 list-disc pl-6">
          {adjectives.map((adj, idx) => (
            <li key={idx}>{adj}</li>
          ))}
        </div>

        {/* Practice Section */}
        <h2 className="font-semibold text-lg mb-2">Practice</h2>
        <div className="space-y-4 mb-6">
          <p>1. In the fall, leaves turn ____________________, ____________________ and ____________________.</p>
          <p>2. The sky is ____________________ and the clouds are ____________________ - what a beautiful day.</p>
          <p>3. Little ____________________ dress is an eternal fashion classic.</p>
          <p>4. I like subtle colors, like beige, ____________________ and ____________________.</p>
          <p>5. At Mardi Gras, it's all about ____________________, ____________________ and ____________________.</p>
        </div>

        {/* Toggle Answer Button */}
        <button
          onClick={() => setShowAnswers(!showAnswers)}
          className="px-4 py-2 bg-purple-600 text-sm text-white rounded"
        >
          {showAnswers ? 'Hide Answers' : 'Show Answers'}
        </button>

        {/* Answer Section */}
        {showAnswers && (
          <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-xl text-blue-600 mb-2">Answer Key</h3>
            <ul className="list-decimal pl-6 space-y-1">
              {Object.entries(answers).map(([key, value]) => (
                <li key={key}>{value}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
