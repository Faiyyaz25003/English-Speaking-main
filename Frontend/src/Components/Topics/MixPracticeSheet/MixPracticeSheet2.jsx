// pages/index.js
import { useState } from "react";

const sentences = [
  "My waiter brought a bottle of cold water.",
  "The blind dog was found near the wooden bridge.",
  "Large tigers and powerful cats are found in Asia.",
  "I saw a fox with a long bushy tail.",
  "The weather was windy but pleasant.",
  "The blind dog was found near the wooden bridge.",
  "Tigers are large, powerful, striped cats found in Asia.",
  "Our football team wore blue shirts.",
  `"Do not walk on the wet floor!" shouted the grumpy caretaker.`,
  "Mark played with his plastic train.",
];

const answerKey = [
  { nouns: ["waiter", "bottle", "water"], adjectives: ["cold"] },
  { nouns: ["dog", "bridge"], adjectives: ["blind", "wooden"] },
  { nouns: ["tigers", "cats", "Asia"], adjectives: ["Large", "powerful"] },
  { nouns: ["fox", "tail"], adjectives: ["long", "bushy"] },
  { nouns: ["weather"], adjectives: ["windy", "pleasant"] },
  { nouns: ["dog", "bridge"], adjectives: ["blind", "wooden"] },
  { nouns: ["Tigers", "cats", "Asia"], adjectives: ["large", "powerful", "striped"] },
  { nouns: ["football team", "shirts"], adjectives: ["blue"] },
  { nouns: ["floor", "caretaker"], adjectives: ["wet", "grumpy"] },
  { nouns: ["Mark", "train"], adjectives: ["plastic"] },
];

export default function MixPracticeSheet2() {
  const [showAnswers, setShowAnswers] = useState(false);

  const renderSentence = (sentence, index) => {
    const words = sentence.split(/(\W+)/); // Split but keep punctuation

    if (!showAnswers) return sentence;

    return words.map((word, i) => {
      const cleanWord = word.replace(/[.,!"']/g, "");

      if (answerKey[index].nouns.includes(cleanWord)) {
        return (
          <span
            key={i}
            className="inline-block mx-1 px-2 py-0.5 border-2 border-black rounded-full"
          >
            {word}
          </span>
        );
      }

      if (answerKey[index].adjectives.includes(cleanWord)) {
        return (
          <span key={i} className="inline-block mx-1 underline">
            {word}
          </span>
        );
      }

      return word;
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">

      <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
     Nouns and Adjectives Practice Sheet 2
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  
      <p className="font-semibold mb-6">
        Circle the nouns and underline the adjectives.
      </p>

      <ol className="list-decimal pl-5 space-y-3">
        {sentences.map((sentence, i) => (
          <li key={i} className="text-base">
            {renderSentence(sentence, i)}
          </li>
        ))}
      </ol>

      <button
        onClick={() => setShowAnswers(!showAnswers)}
        className="mt-6 text-white bg-purple-600 font-semibold px-5 py-2 rounded transition"
      >
        {showAnswers ? "Hide Answers" : "Show Answers"}
      </button>

      {showAnswers && (
        <div className="mt-10">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Answer Key</h2>
          <ol className="list-decimal pl-5 space-y-3 text-base">
            {answerKey.map((item, i) => (
              <li key={i}>
                <span className="font-semibold">Nouns:</span>{" "}
                {item.nouns.join(", ")} <br />
                <span className="font-semibold">Adjectives:</span>{" "}
                {item.adjectives.join(", ")}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
