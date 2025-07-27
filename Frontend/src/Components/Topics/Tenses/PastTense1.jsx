import { useState } from "react";

// Data for practice
const practiceData = [
  {
    sentence: "Gabby the Gorilla dropped the ice cream on the floor.",
    verb: "dropped",
    answer: "past",
  },
  {
    sentence: "The weatherman said that he sun is shining brightly today.",
    verb: "is shining",
    answer: "present",
  },
  {
    sentence: "Granddad dug a hole in the garden.",
    verb: "dug",
    answer: "past",
  },
  {
    sentence: "Sammy rode a horse for the first time yesterday.",
    verb: "rode",
    answer: "past",
  },
];

// Tense words for transformation (past or present tense)
const tenseWords = [
  { base: "draw", answer: "drew" },
  { base: "fly", answer: "flew" },
  { base: "come", answer: "came" },
  { base: "hid", answer: "hide" },
  { base: "drink", answer: "drank" },
  { base: "do", answer: "did" },
  { base: "wear", answer: "wore" },
  { base: "put", answer: "put" },
  { base: "bite", answer: "bit" },
  { base: "give", answer: "gave" },
  { base: "break", answer: "broke" },
  { base: "fall", answer: "fell" },
];

export default function PastTense1() {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <main
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: 20,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      
       <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
          Past and Present Tense Practice Sheet 1
        </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />

      {/* Section 1: Identifying Past or Present Tense */}
      <section>
        <h3>
          Write whether the underlined verb is telling us about the past or
          present.
        </h3>
        <ol>
          {practiceData.map(({ sentence, verb, answer }, i) => (
            <li key={i} style={{ marginBottom: 10 }}>
              {sentence.split(verb).map((part, idx, arr) => (
                <span key={idx}>
                  {part}
                  {idx < arr.length - 1 && (
                    <u style={{ cursor: "default", color: "#1976d2" }}>{verb}</u>
                  )}
                </span>
              ))}{" "}
              <input
                type="text"
                disabled
                value={showAnswers ? answer : ""}
                placeholder="__________"
                style={{
                  borderBottom: "1px solid #ccc",
                  width: 70,
                  fontWeight: "bold",
                  fontSize: "1em",
                  marginLeft: 10,
                }}
              />
            </li>
          ))}
        </ol>
      </section>

      {/* Section 2: Present or Past Tense Transformations */}
      <section>
        <h3>Write the missing present or past tense.</h3>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          {[0, 1, 2].map((colIndex) => (
            <div key={colIndex} style={{ flex: 1, padding: "0 10px" }}>
              {tenseWords
                .slice(colIndex * 4, colIndex * 4 + 4)
                .map(({ base, answer }, i) => (
                  <p key={i} style={{ fontSize: "1.1em", marginBottom: 15 }}>
                    <b>{showAnswers ? answer : "________"}</b> {base}
                  </p>
                ))}
            </div>
          ))}
        </div>
      </section>

      {/* Show/Hide Answers Button */}
      <button
        onClick={() => setShowAnswers((prev) => !prev)} className="text-white bg-purple-600"
        style={{
          marginTop: 30,
          padding: "10px 20px",
          fontSize: 16,
          color: "white",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
        }}
      >
        {showAnswers ? "Hide Answers" : "Show Answers"}
      </button>
    </main>
  );
}
