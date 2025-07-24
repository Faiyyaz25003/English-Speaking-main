// pages/index.js
import { useState } from "react";

const sentences = [
  "They're going to visit their grandmother over the weekend.",
  "The knight wore armor and rode through the quiet night.",
  "She knew the answer and handed in her paper to the teacher.",
  "We walked across the bridge to see the view from the top.",
  "He bought two apples and placed them on the table too.",
  "The plane flew over the mountains before landing.",
  "You should write your name at the top of the page.",
  "He read the whole book while sitting beside the lake.",
  "I knew the road was rough, but I drove through it anyway.",
  "Please be quiet while I read aloud to the class.",
];

const answerKey = [
  { homophones: ["They're", "their"], prepositions: ["over"] },
  { homophones: ["knight", "night"], prepositions: ["through"] },
  { homophones: ["knew"], prepositions: ["to"] },
  { homophones: [], prepositions: ["across", "to", "from"] },
  { homophones: ["two", "too"], prepositions: ["on"] },
  { homophones: [], prepositions: ["over", "before"] },
  { homophones: ["write"], prepositions: ["at", "of"] },
  { homophones: ["read"], prepositions: ["while", "beside"] },
  { homophones: ["knew", "through"], prepositions: [] },
  { homophones: ["read", "aloud"], prepositions: ["to"] },
];

export default function MixPracticeSheet1() {
  const [showAnswers, setShowAnswers] = useState(false);

  const renderSentence = (sentence, index) => {
    const words = sentence.split(/(\W+)/); // Split keeping punctuation
    if (!showAnswers) return sentence;

    return words.map((word, i) => {
      const cleanWord = word.replace(/[.,!"']/g, "");

      if (answerKey[index].homophones.includes(cleanWord)) {
        return (
          <strong key={i} className="text-purple-700 font-bold mx-1">
            {word}
          </strong>
        );
      }

      if (answerKey[index].prepositions.includes(cleanWord)) {
        return (
          <span key={i} className="underline text-blue-700 mx-1">
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
    Homophones and Prepositions Practice 1
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  


      <p className="font-semibold mb-6">
        <strong>Bold</strong> = Homophone, <u>Underlined</u> = Preposition
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
        className="mt-6  bg-purple-600 text-white font-semibold px-5 py-2 rounded transition"
      >
        {showAnswers ? "Hide Answers" : "Show Answers"}
      </button>

      {showAnswers && (
        <div className="mt-10">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Answer Key</h2>
          <ol className="list-decimal pl-5 space-y-3 text-base">
            {answerKey.map((item, i) => (
              <li key={i}>
                <span className="font-semibold">Homophones:</span>{" "}
                {item.homophones.join(", ") || "None"} <br />
                <span className="font-semibold">Prepositions:</span>{" "}
                {item.prepositions.join(", ") || "None"}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
