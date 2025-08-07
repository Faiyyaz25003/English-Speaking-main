
'use client';
import { useState } from 'react';

export default function TenseAndForm() {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="p-6 md:p-12 bg-white text-black min-h-screen text-[17px]">
     

       <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
Verbs Sheet 2: Tenses & Forms
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  
      
      <p className="mb-6">Learn all forms of English verbs, including all common tenses, conditionals and the gerund. Browse this website for more information.</p>

      {/* Table */}
      <table className="w-full border border-gray-300 mb-10 text-[17px]">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border text-xl font-bold text-purple-600">Tense/Form</th>
            <th className="p-2 border text-xl font-bold text-purple-600">Examples</th>
          </tr>
        </thead>
        <tbody>
          {/* Present Tenses */}
          <tr><td className="p-2 border text-xl font-bold text-purple-600" colSpan={2}>Present Tenses in English</td></tr>
          <tr><td className="p-2 border">Present Simple Tense</td><td className="p-2 border">He smokes cigars</td></tr>
          <tr><td className="p-2 border">Present Continuous Tense</td><td className="p-2 border">He is smoking a cigar right now</td></tr>

          {/* Past Tenses */}
          <tr><td className="p-2 border text-xl font-bold text-purple-600" colSpan={2}>Past Tenses in English</td></tr>
          <tr><td className="p-2 border">Past Simple Tense</td><td className="p-2 border">I visited London in 2005.</td></tr>
          <tr><td className="p-2 border">Past Continuous Tense</td><td className="p-2 border">I was reading a magazine when he arrived.</td></tr>

          {/* Perfect Tenses */}
          <tr><td className="p-2 border text-xl font-bold text-purple-600" colSpan={2}>Perfect Tenses in English</td></tr>
          <tr><td className="p-2 border">Present Perfect Tense</td><td className="p-2 border">She has lived here since 2001.</td></tr>
          <tr><td className="p-2 border">Present Perfect Continuous</td><td className="p-2 border">He has been coming to this club for decades.</td></tr>
          <tr><td className="p-2 border">Past Perfect</td><td className="p-2 border">We had met this couple a few times before they decided to get married.</td></tr>
          <tr><td className="p-2 border">Past Perfect Continuous</td><td className="p-2 border">She had been watching him for some time when they realized that they knew each other.</td></tr>
          <tr><td className="p-2 border">Future Perfect</td><td className="p-2 border">They will have crossed the border by the time you get this message.</td></tr>
          <tr><td className="p-2 border">Future Perfect Continuous</td><td className="p-2 border">By the end of this year, you will have been living here for a decade.</td></tr>

          {/* Future Tenses */}
          <tr><td className="p-2 border text-xl font-bold text-purple-600" colSpan={2}>Future Tenses in English</td></tr>
          <tr><td className="p-2 border">Simple Future Tense</td><td className="p-2 border">We will go to Barcelona next month.</td></tr>
          <tr><td className="p-2 border">Future Continuous Tense</td><td className="p-2 border">I will be visiting Berlin next week.</td></tr>

          {/* Conditional Tenses */}
          <tr><td className="p-2 border text-xl font-bold text-purple-600" colSpan={2}>Conditional Forms in English</td></tr>
          <tr><td className="p-2 border">Zero conditional</td><td className="p-2 border">If temperature rises, ice melts</td></tr>
          <tr><td className="p-2 border">Type 1 conditional</td><td className="p-2 border">If we're late, she will be very upset.</td></tr>
          <tr><td className="p-2 border">Type 2 conditional</td><td className="p-2 border">If she was in Japan she would be sleeping now.</td></tr>
          <tr><td className="p-2 border">Type 3 conditional</td><td className="p-2 border">She would have visited me if she had had time.</td></tr>
          <tr><td className="p-2 border">Mixed conditional</td><td className="p-2 border">I would be playing tennis if I hadn't broken my arm.</td></tr>

          {/* ING Forms */}
          <tr><td className="p-2 border text-xl font-bold text-purple-600" colSpan={2}>The -ing forms in English</td></tr>
          <tr><td className="p-2 border">Gerund</td><td className="p-2 border">I enjoy traveling.</td></tr>
          <tr><td className="p-2 border">Present participle</td><td className="p-2 border">She goes swimming every day</td></tr>
        </tbody>
      </table>

      {/* Practice Questions */}
      <div className="mb-8 text-[17px]">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">Practice:</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>When Stephen _______________ (arrive) home, Jennifer _______________ (watch) television.</li>
          <li>I _______________ (prepare) dinner when the telephone _______________ (ring).</li>
          <li>What _______________ (you do) when the postman _______________ (arrive)?</li>
          <li>Kimberly _______________ (learn) to drive when she _______________ (work) in London.</li>
          <li>Where _______________ (you sit) when the show _______________ (begin)?</li>
          <li>I _______________ (visit) Athens while I _______________ (tour) Greece.</li>
          <li>It was when he _______________ (cross) the street that John _______________ (fall).</li>
          <li>What _______________ (you see) while you _______________ (wait) for the bus?</li>
          <li>Where _______________ (you go) when your car _______________ (break) down?</li>
          <li>Annie _______________ (meet) Josh when she _______________ (walk) in the park.</li>
        </ol>
      </div>

      {/* Show Answer Button */}
      <button
        onClick={() => setShowAnswers(!showAnswers)}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition mb-4"
      >
        {showAnswers ? 'Hide Answer Key' : 'Show Answer Key'}
      </button>

      {/* Answer Key (Visible only if showAnswers = true) */}
      {showAnswers && (
        <div className="text-[17px]">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Answer Key</h2>
          <ol className="list-decimal space-y-1 pl-6">
            <li>arrived - was watching</li>
            <li>was preparing - rang</li>
            <li>were you doing - arrived</li>
            <li>learnt/learned - was working</li>
            <li>were you sitting - began</li>
            <li>visited - was touring</li>
            <li>was crossing - fell</li>
            <li>did you see - you were waiting</li>
            <li>were you going - broke down</li>
            <li>met - was walking</li>
          </ol>
        </div>
      )}
    </div>
  );
}
