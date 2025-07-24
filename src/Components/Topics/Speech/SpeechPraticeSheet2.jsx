import React from 'react';

export default function SpeechPraticeSheet2() {
  const verbTenses = [
    ["Present", "Past"],
    ["Present perfect", "Past Perfect"],
    ["Past", "Past Perfect"],
    ["Past perfect", "No change"],
    ["Future (shall, will)", "Secondary future (should, would)"],
    ["Future perfect (will have)", "Secondary future perfect (would have)"],
    ["Conditional", "No change"],
  ];

  const pronouns = [
    ["I", "he, she"],
    ["me", "him, her"],
    ["my", "his, her, the"],
    ["mine", "his, hers"],
    ["we", "they"],
    ["us", "them"],
    ["our", "their, the"],
    ["ours", "theirs"],
    ["you", "they, them"],
    ["you", "their, the"],
    ["yours", "theirs"],
    ["this", "that, the"],
    ["these", "those, the"],
  ];

  const adverbs = [
    ["here", "there"],
    ["now, at the present time", "then, at the time"],
    ["present", "existing, current"],
    ["today", "that day, at the time"],
    ["tomorrow", "the day after, the next day"],
    ["yesterday", "the day before, the previous day"],
    ["ago", "before, earlier"],
  ];

  return (
    <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
     <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
  Direct and Indirect Speech: Practice Sheet 2
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  
      <p className="mb-6">
        When it comes to turning direct speech into indirect you should keep in mind the sequence of tenses, as well as pronouns, adverbs and other parts of the sentence that's being modified.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl text-purple-600 font-semibold mb-2">For example:</h2>
        <p><strong>Direct:</strong> The election is being held today.</p>
        <p><strong>Indirect:</strong> The Secretary of the Election Committee confirmed that the election was being held that day [or on a specific date].</p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-purple-600 mb-2">Verb Tenses</h2>
        <table className="w-full border border-gray-400 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Direct Speech</th>
              <th className="border px-4 py-2">Indirect Speech</th>
            </tr>
          </thead>
          <tbody>
            {verbTenses.map(([direct, indirect], idx) => (
              <tr key={idx}>
                <td className="border px-4 py-2">{direct}</td>
                <td className="border px-4 py-2">{indirect}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-purple-600 mb-2">Pronouns</h2>
        <table className="w-full border border-gray-400 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Direct Speech</th>
              <th className="border px-4 py-2">Indirect Speech</th>
            </tr>
          </thead>
          <tbody>
            {pronouns.map(([direct, indirect], idx) => (
              <tr key={idx}>
                <td className="border px-4 py-2">{direct}</td>
                <td className="border px-4 py-2">{indirect}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-purple-600 mb-2">Adverbs and Adjectives</h2>
        <table className="w-full border border-gray-400 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Direct Speech</th>
              <th className="border px-4 py-2">Indirect Speech</th>
            </tr>
          </thead>
          <tbody>
            {adverbs.map(([direct, indirect], idx) => (
              <tr key={idx}>
                <td className="border px-4 py-2">{direct}</td>
                <td className="border px-4 py-2">{indirect}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
