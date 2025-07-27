import { useState } from 'react';

export default function Home() {
  const [showAnswers, setShowAnswers] = useState(false);

  const toggleAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  return (
    <div className="container mx-auto p-4 font-sans">
      <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
          Past and Present Tense Practice Sheet 5
        </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />


      {/* Past Tense Practice Sheet 3 */}
      <div className="sheet mt-8">
        <h2 className="text-xl font-semibold mb-4">Complete each sentence by changing the given verbs in bold into past tense.</h2>
        <ol className="list-decimal pl-8">
          <li>Paper is <span className="inline"> _______ </span> from trees. <span className="font-bold text-red-500">make</span></li>
          <li>Sara <span className="inline"> _______ </span> all the peanuts! <span className="font-bold text-red-500">eat</span></li>
          <li>Last night I forgot to <span className="inline"> _______ </span> my diary in my bag. <span className="font-bold text-red-500">put</span></li>
          <li>My best friend <span className="inline">_______ </span> me wash my dad's car. <span className="font-bold text-red-500">help</span></li>
          <li>The cricketer <span className="inline"> _______ </span> the ball for six runs. <span className="font-bold text-red-500">hit</span></li>
        </ol>
      </div>

      {/* Passage to fill in */}
      <div className="sheet mt-8">
        <h2 className="text-xl font-semibold mb-4">Write this passage in past tense:</h2>
        <p className="mb-4">
          It <span className="inline">_______</span> a cold, dark night as I{' '}
          <span className="inline"> _______ </span> through the forest. I{' '}
          <span className="inline"> _______ </span> if I{' '}
          <span className="inline"> _______ </span> I{' '}
          <span className="inline"> _______ </span> fall asleep. I{' '}
          <span className="inline"> _______ </span> to find my way home. I{' '}
          <span className="inline"> _______ </span> the sounds of footsteps. I{' '}
          <span className="inline"> _______ </span> frightened and then{' '}
          <span className="inline"> _______ </span> my way. Suddenly someone{' '}
          <span className="inline"> _______ </span> me, I{' '}
          <span className="inline"> _______ </span> it{' '}
          <span className="inline"> _______ </span> a dream.
        </p>
      </div>

      {/* Show/Hide answers button */}
      <button
        className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-red-700 mx-auto block"
        onClick={toggleAnswers}
      >
        {showAnswers ? 'Hide Answers' : 'Show Answers'}
      </button>

      {/* Answer Key Section */}
      {showAnswers && (
        <div className="answers mt-8 p-4 bg-gray-100 border border-gray-300 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Answer Key:</h2>
          <h3 className="mb-4">Complete each sentence by changing the given verbs in bold into past tense.</h3>
          <ol className="list-decimal pl-8">
            <li>Paper is <strong>made</strong> from trees.</li>
            <li>Sara <strong>ate</strong> all the peanuts!</li>
            <li>Last night I forgot to <strong>put</strong> my diary in my bag.</li>
            <li>My best friend <strong>helped</strong> me wash my dad's car.</li>
            <li>The cricketer <strong>hit</strong> the ball for six runs.</li>
          </ol>

          <h3 className="mt-4 mb-2">Write this passage in past tense:</h3>
          <p className="mb-4">
            It <strong>was</strong> a cold, dark night as I <strong>ran</strong> through the forest. I{' '}
            <strong>knew</strong> if I <strong>stopped</strong> I <strong>would</strong> fall asleep. I{' '}
            <strong>wanted</strong> to find my way home. I <strong>heard</strong> the sounds of footsteps. I{' '}
            <strong>felt</strong> frightened and then <strong>lost</strong> my way. Suddenly someone{' '}
            <strong>shook</strong> me, I <strong>realized</strong> it <strong>was</strong> a dream.
          </p>
        </div>
      )}
    </div>
  );
}
