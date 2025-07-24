import React from 'react';

const CompoundWordDefinition = () => {
  return (
    <div className="font-sans p-5 leading-relaxed">



       <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-4xl font-extrabold text-red-600">
    Compound Words
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />

      {/* Section: Definition */}
      <div className="bg-purple-50 p-5 rounded-lg mb-6">
        <h2 className="text-purple-600 text-3xl font-bold mb-2">Understanding Compound Words </h2>
        <p>
          A <strong>compound word</strong> is formed when two or more words are joined together to create a new word 
          with a different meaning. These words can be written in different ways depending on the type.
        </p>
      </div>

      {/* Section: Types of Compound Words */}
      <div className="bg-blue-50 p-5 rounded-lg mb-6">
        <h2 className="text-purple-600 text-3xl font-bold mb-3">Types of Compound Words</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Closed Compound Words</strong> – Words are written together with no space.<br />
            <em>Example:</em> toothpaste, bedroom, notebook
          </li>
          <li>
            <strong>Hyphenated Compound Words</strong> – Words are connected by a hyphen.<br />
            <em>Example:</em> mother-in-law, part-time, well-known
          </li>
          <li>
            <strong>Open Compound Words</strong> – Words are written separately but act as one concept.<br />
            <em>Example:</em> ice cream, high school, post office
          </li>
        </ol>
      </div>

      {/* Section: Examples */}
      <div className="bg-green-50 p-5 rounded-lg mb-6">
        <h2 className="text-purple-600 text-3xl font-bold mb-3">More Examples</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Closed:</strong> football, keyboard, sunset</li>
          <li><strong>Hyphenated:</strong> sister-in-law, check-in, twenty-one</li>
          <li><strong>Open:</strong> living room, full moon, real estate</li>
        </ul>
      </div>

      {/* Section: Mini Quiz */}
      <div className="bg-yellow-100 p-5 rounded-lg mb-6">
        <h2 className="text-purple-600 text-3xl font-bold mb-3">Mini Quiz</h2>
        <p className="font-semibold mb-2">Which type of compound word are the following?</p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>sunflower</li>
          <li>runner-up</li>
          <li>coffee table</li>
          <li>mother-in-law</li>
          <li>basketball</li>
        </ol>
        <p className="italic mt-3">Try to answer before checking below!</p>
      </div>

      {/* Answers */}
      <div className="bg-gray-100 p-5 rounded-lg">
        <h3 className="text-purple-600 text-3xl font-bold mb-2">Quiz Answers:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>sunflower:</strong> Closed</li>
          <li><strong>runner-up:</strong> Hyphenated</li>
          <li><strong>coffee table:</strong> Open</li>
          <li><strong>mother-in-law:</strong> Hyphenated</li>
          <li><strong>basketball:</strong> Closed</li>
        </ul>
      </div>

      <p className="mt-6 italic">
        Compound words are all around us! Recognizing them helps improve vocabulary and understanding of how English works.
      </p>
    </div>
  );
};

export default CompoundWordDefinition;
