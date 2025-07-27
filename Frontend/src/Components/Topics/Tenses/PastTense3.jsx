import { useState } from 'react';

export default function PastTense3() {
  // State to store the user's answers
  const [answers, setAnswers] = useState({
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
    answer6: '',
    answer7: '',
  });

  // State to track whether the answer key is shown
  const [showAnswers, setShowAnswers] = useState(false);

  // Correct answers for validation
  const correctAnswers = {
    answer1: 'spent',
    answer2: 'put',
    answer3: 'picked',
    answer4: 'crawled',
    answer5: 'threw',
    answer6: 'shook',
    answer7: 'stuck',
  };

  // Function to handle input change and update the answers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  // Function to toggle the answer key visibility
  const toggleAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  return (
    <div className="max-w-xl mx-auto p-6 font-sans">
       <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-2xl font-extrabold text-red-600">
          Past and Present Tense Practice Sheet 3
        </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />

      <p className="text-center text-lg mb-8 text-gray-800">
        Complete the sentence by adding the past tense of the word given in bold. Rewrite sentences on the empty lines below:
      </p>

      <form>
        {/* Question 1 */}
        <div className="mb-5">
          <label className="block">
            1. I ____________ the morning in the park. <strong>spend</strong>
          </label>
        </div>

        {/* Question 2 */}
        <div className="mb-5">
          <label className="block">
            2. We ____________ candles on his birthday cake. <strong>put</strong>
          </label>
        </div>

        {/* Question 3 */}
        <div className="mb-5">
          <label className="block">
            3. Sandy ____________ flowers from the garden. <strong>pick</strong>
          </label>
        </div>

        {/* Question 4 */}
        <div className="mb-5">
          <label className="block">
            4. The bug ____________ under the rug. <strong>crawl</strong>
          </label>
        </div>

        {/* Question 5 */}
        <div className="mb-5">
          <label className="block">
            5. She ____________ a stone at the window. <strong>throw</strong>
          </label>
        </div>

        {/* Question 6 */}
        <div className="mb-5">
          <label className="block">
            6. They ____________ hands when they met. <strong>shake</strong>
          </label>
        </div>

        {/* Question 7 */}
        <div className="mb-5">
          <label className="block">
            7. We ____________ paper together with glue. <strong>stick</strong>
          </label>
        </div>
      </form>

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
            <li>1. I <strong>spent</strong> the morning in the park.</li>
            <li>2. We <strong>put</strong> candles on his birthday cake.</li>
            <li>3. Sandy <strong>picked</strong> flowers from the garden.</li>
            <li>4. The bug <strong>crawled</strong> under the rug.</li>
            <li>5. She <strong>threw</strong> a stone at the window.</li>
            <li>6. They <strong>shook</strong> hands when they met.</li>
            <li>7. We <strong>stuck</strong> paper together with glue.</li>
          </ul>
        </div>
      )}
    </div>
  );
}
