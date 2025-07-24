import { useState } from 'react';

export default function PastTense2() {
  // State to track whether the answer key is shown
  const [showAnswers, setShowAnswers] = useState(false);

  // Function to toggle the answer key visibility
  const toggleAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  return (
    <div className="max-w-xl mx-auto p-6 font-sans">
       <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-2xl font-extrabold text-red-600">
          Past and Present Tense Practice Sheet 4
        </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />

      <p className="text-center text-lg mb-8 text-gray-800">
        Use the most suitable past tense to fill each blank.
      </p>

      <div className="mb-5">
        <div className="flex justify-center mb-3">
          <span className="font-semibold text-gray-700">came</span>
          <span className="mx-4 font-semibold text-gray-700">gave</span>
          <span className="mx-4 font-semibold text-gray-700">hid</span>
          <span className="mx-4 font-semibold text-gray-700">knocked</span>
          <span className="mx-4 font-semibold text-gray-700">ran</span>
        </div>

        {/* Questions */}
        <p>
          1. Someone <span className="underline">___________</span> at the door.
        </p>
        <p>
          2. The dog <span className="underline">___________</span> after the cat.
        </p>
        <p>
          3. The principle <span className="underline">___________</span> him the prize.
        </p>
        <p>
          4. The fox <span className="underline">___________</span> behind the bushes.
        </p>
        <p>
          5. My uncle <span className="underline">___________</span> from Islamabad.
        </p>
      </div>

      {/* Button to toggle answers */}
      <button
        onClick={toggleAnswers}
        className="py-3 px-6 bg-purple-600 text-white rounded-md cursor-pointer block mx-auto text-lg"
      >
        {showAnswers ? 'Hide Answers' : 'Show Answers'}
      </button>

      {/* Show answers if toggle is on */}
      {showAnswers && (
        <div className="mt-6 bg-gray-100 p-6 rounded-md">
          <h2 className="text-center text-xl font-bold mb-4">Answer Key</h2>
          <ul className="list-none p-0 m-0 text-lg">
            <li>1. Someone <strong>knocked</strong> at the door.</li>
            <li>2. The dog <strong>ran</strong> after the cat.</li>
            <li>3. The principle <strong>gave</strong> him the prize.</li>
            <li>4. The fox <strong>hid</strong> behind the bushes.</li>
            <li>5. My uncle <strong>came</strong> from Islamabad.</li>
          </ul>
        </div>
      )}
    </div>
  );
}
