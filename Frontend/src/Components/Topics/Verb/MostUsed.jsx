
'use client';

import { useState } from 'react';

const verbs = [
  "be", "have", "do", "say", "go", "can", "get", "would", "make", "know", "will", "think", "take", "see", "come",
  "could", "want", "look", "use", "find", "give", "tell", "work", "may", "should", "call", "try", "ask", "need",
  "feel", "become", "leave", "keep", "let", "begin", "seem", "help", "talk", "turn", "start", "might", "show",
  "hear", "play", "run", "move", "like", "live", "believe", "hold", "bring", "happen", "must", "write", "provide",
  "sit", "stand", "lose", "pay", "meet", "include", "continue", "set", "learn", "lead", "understand", "watch",
  "follow", "stop", "create", "speak", "read", "allow", "add", "spend", "grow", "open", "walk", "win", "offer",
  "remember", "love", "consider", "appear", "buy", "wait", "serve", "die", "send", "expect", "build", "stay",
  "fall", "cut", "reach", "kill"
];

const practice = [
  {
    sentence: "I promise I ____________________ (call) you as soon as I have any news.",
    answer: "will call"
  },
  {
    sentence: "This time tomorrow Tom ____________________ (fly) over the Atlantic on his way to Boston.",
    answer: "will be flying"
  },
  {
    sentence: "Those bags look heavy. I ____________________ (carry) one of them for you.",
    answer: "will carry"
  },
  {
    sentence: "They are getting married on Saturday. All the guests ____________________ (wear) white.",
    answer: "will be wearing"
  },
  {
    sentence: "The following week they ____________________ (enjoy) the sun in the West Indies.",
    answer: "will be enjoying"
  },
  {
    sentence: "The sky is a bit cloudy. ____________________ (rain) do you think?",
    answer: "will it"
  },
  {
    sentence: "If you look at this map you ____________________ (see) where the islands are.",
    answer: "will see"
  },
  {
    sentence: "You should have no problem finding him. He ____________________ (carry) a guitar.",
    answer: "will be carrying"
  }
];

export default function MostUsed() {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <main className="p-6 bg-gray-100 min-h-screen text-[17px]">
      {/* Verb List */}
      <section className="mb-10">

        <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
  99 Common English Verbs
  </h1>
</div>
        <hr className="border-t-4 border-purple-300 mb-8" />  
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 bg-white p-6 rounded-lg shadow">
          {verbs.map((verb, index) => (
            <div key={index} className="text-gray-700 font-medium">
              {index + 1}. {verb}
            </div>
          ))}
        </div>
      </section>

      {/* Practice Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">Practice: Future Simple & Future Continuous</h2>
        <ol className="space-y-4">
          {practice.map((item, idx) => (
            <li key={idx} className="bg-white p-4 rounded shadow">
              <span className="font-medium">{idx + 1}. {item.sentence}</span>
              {showAnswers && (
                <div className="mt-2 text-blue-600 font-semibold">
                  Answer: {item.answer}
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Toggle Button */}
      <button
        onClick={() => setShowAnswers(!showAnswers)}
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        {showAnswers ? "Hide Answers" : "Show Answers"}
      </button>
    </main>
  );
}
