// pages/index.js

import { useState } from 'react';

export default function PastTense2() {
  // State to toggle the visibility of the answers
  const [showAnswers, setShowAnswers] = useState(false);

  // Function to handle the button click
  const toggleAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  return (
    <div style={{ padding: '20px' }}>
       <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
          Past and Present Tense Practice Sheet 2
        </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />


      <div style={{ margin: '20px 0' }}>
        <p><strong>Fill in the blanks below with one of the 15 irregular past tense verbs in the box:</strong></p>
        <div>
          <p>
            ate, drank, made, met, saw, went, came, got, did, gave, took, ran, swam, read, rode
          </p>
        </div>

        {/* Question Section */}
        <ol>
          <li>He ___________ his homework before he went to school.</li>
          <li>It was cold so we ___________ some hot chocolate.</li>
          <li>I ___________ a sandcastle when I went to the beach.</li>
          <li>It was a hot day so she ___________ in the lake yesterday.</li>
          <li>His car had a flat tire so he ___________ the bus to work.</li>
          <li>I ___________ a horse last summer when I went to my uncle's farm.</li>
          <li>I was late for class so I ___________ to school.</li>
          <li>I ___________ two hamburgers so I am full.</li>
          <li>I ___________ a good book before I went to bed.</li>
          <li>She ___________ a lion went she sent to the zoo.</li>
          <li>A letter ___________ in the mail today.</li>
          <li>They ___________ for hiking yesterday.</li>
          <li>I ___________ my brother a game for his birthday.</li>
          <li>She ___________ a good report card so her mom was happy.</li>
          <li>I ___________ my friends when we went to the park.</li>
        </ol>

        {/* Button to show answers */}
        <button onClick={toggleAnswers} className="bg-purple-600 text-white" style={{ padding: '10px 20px', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {showAnswers ? 'Hide Answers' : 'Show Answers'}
        </button>

        {/* Show answers if the button is clicked */}
        {showAnswers && (
          <div style={{ marginTop: '20px' }}>
            <h3>Answer Key</h3>
            <ol>
              <li>He <strong>did</strong> his homework before he went to school.</li>
              <li>It was cold so we <strong>drank</strong> some hot chocolate.</li>
              <li>I <strong>made</strong> a sandcastle when I went to the beach.</li>
              <li>It was a hot day so she <strong>swam</strong> in the lake yesterday.</li>
              <li>His car had a flat tire so he <strong>took</strong> the bus to work.</li>
              <li>I <strong>rode</strong> a horse last summer when I went to my uncle's farm.</li>
              <li>I was late for class so I <strong>ran</strong> to school.</li>
              <li>I <strong>ate</strong> two hamburgers so I am full.</li>
              <li>I <strong>read</strong> a good book before I went to bed.</li>
              <li>She <strong>saw</strong> a lion when she went to the zoo.</li>
              <li>A letter <strong>came</strong> in the mail today.</li>
              <li>They <strong>went</strong> for hiking yesterday.</li>
              <li>I <strong>gave</strong> my brother a game for his birthday.</li>
              <li>She <strong>got</strong> a good report card so her mom was happy.</li>
              <li>I <strong>met</strong> my friends when we went to the park.</li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
