'use client';
import React from 'react';

export default function FeelingsSheet() {
  const adjectives = [
    "Rundown", "Defeated", "Glorious", "Sad", "Confused", "Good", "Scary", "Cooperative", "Grateful", "Selfish",
    "Courageous", "Grieving", "Silly", "Cowardly", "Gutsy", "Splendid", "Crabby", "Gutless", "Successful", "Creepy",
    "Happy", "Tedious", "Cross", "Healthy", "Tense", "Cruel", "Heinous", "Terrible", "Dangerous", "Helpful", "Thankful",
    "Defeated", "Helpless", "Thoughtful", "Defiant", "Hilarious", "Thoughtless", "Delightful", "Homeless", "Tired",
    "Depressed", "Hungry", "Troubled", "Determined", "Hurt", "Upset", "Disgusted", "Immoral", "Weak", "Disturbed",
    "Indignant", "Weary", "Eager", "Irate", "Wicked", "Elated", "Itchy", "Worried", "Embarrassed", "Jealous", "Zany",
    "Enchanting", "Jolly", "Zealous"
  ];

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 text-gray-800">
      <div className="max-w-5xl mx-auto">

        {/* 🌟 Common and Proper Nouns Practice heading */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl">🌟</span>
          <h1 className="text-3xl font-extrabold text-red-600">Adjectives Sheet 4: Related to Feelins and Emotion</h1>
        </div>
        <hr className="border-t-4 border-purple-300 mb-8" />

       
        {/* Adjective List */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 list-disc pl-6">
          {adjectives.map((adj, idx) => (
            <li key={idx}>{adj}</li>
          ))}
        </div>
      </div>
    </div>
  );
}
