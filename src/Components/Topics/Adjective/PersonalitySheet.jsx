'use client';
import React from 'react';

export default function PersonalitySheet() {
  const adjectives = [
    "Kind", "Breathless", "Generous", "Sassy", "Busy", "Gifted", "Secretive", "Calm", "Helpful", "Capable", "Hesitant", "Shy",
    "Careless", "Innocent", "Sleepy", "Cautious", "Inquisitive", "Cheerful", "Insane", "Stingy", "Clever", "Jaunty", "Stupid", "Queer",
    "Common", "Super", "Complete", "Macho", "Swanky", "Concerned", "Manly", "Tame", "Crazy",
    "Modern", "Curious", "Terrific", "Dead", "Naughty", "Testy", "Deep", "Odd", "Uninterested", "Delightful", "Old", "Vague",
    "Determined", "Open", "Different", "Outstanding", "Vivacious", "Diligent", "Perky", "Wacky", "Energetic", "Poor", "Wandering",
    "Erratic", "Powerful", "Wild", "Evil", "Puzzled", "Exuberant", "Tacky", "Real", "Wrong"
  ];

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 text-gray-800">
      <div className="max-w-5xl mx-auto">

        {/* 🌟 Styled Heading */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl">🌟</span>
          <h1 className="text-3xl font-extrabold text-red-600"> Adjectives Sheet 3: Person, personality, attitude, behavior</h1>
        </div>
        <hr className="border-t-4 border-purple-300 mb-8" />

      

        {/* Adjective List */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 mb-8 list-disc pl-6">
          {adjectives.map((adj, idx) => (
            <li key={idx}>{adj}</li>
          ))}
        </div>
      </div>
    </div>
  );
}
