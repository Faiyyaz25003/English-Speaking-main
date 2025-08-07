import { useState } from 'react';

const questions = [
  { id: 1, left: "water", right: "melon", answer: "watermelon" },
  { id: 2, left: "match", right: "stick", answer: "matchstick" },
  { id: 3, left: "egg", right: "cup", answer: "eggcup" },
  { id: 4, left: "head", right: "ache", answer: "headache" },
  { id: 5, left: "dish", right: "washer", answer: "dishwasher" },
  { id: 6, left: "tooth", right: "ache", answer: "toothache" },
  { id: 7, left: "bed", right: "room", answer: "bedroom" },
  { id: 8, left: "paper", right: "clip", answer: "paperclip" },
  { id: 9, left: "key", right: "hole", answer: "keyhole" },
  { id: 10, left: "foot", right: "ball", answer: "football" },
  { id: 11, left: "air", right: "plane", answer: "airplane" },
  { id: 12, left: "grand", right: "mother", answer: "grandmother" },
  { id: 13, left: "for", right: "get", answer: "forget" },
  { id: 14, left: "under", right: "ground", answer: "underground" },
];

const CompoundWordsPracticeSheet1 = () => {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">

      <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-4xl font-extrabold text-red-600">
    Compound Words Practice Sheet 1
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" /> 
      
      <p className="mb-6 text-gray-700">
        Match each word in the first column with one in the second to make a compound word.
      </p>

      <div className="space-y-4">
        {questions.map((q, i) => (
          <div key={q.id} className="flex justify-between border-b pb-2">
            <span>{i + 1}. {q.left}</span>
            <span className="mx-2">+ {q.right}</span>
            <span className="font-semibold text-right min-w-[150px]">
              {showAnswers ? q.answer : "________________"}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowAnswers(!showAnswers)}
        className="mt-6 px-4 py-2 bg-purple-600 text-white rounde transition"
      >
        {showAnswers ? "Hide Answers" : "Show Answers"}
      </button>
    </div>
  );
};

export default CompoundWordsPracticeSheet1;
