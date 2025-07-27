import React from 'react';

const PunctuationDefinition = () => {
  return (
    <div className="font-sans p-5 leading-relaxed">
      
       <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
  Punctuation
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  

      {/* Section: Introduction */}
      <div className="bg-red-50 p-5 rounded-lg mb-6">
        <h2 className="text-purple-600 text-3xl font-bold mb-2">Understanding Punctuation</h2>
        <p className="mb-4">
          <strong>Punctuation</strong> refers to the marks used in writing that help clarify meaning,
          indicate pauses, and separate ideas or elements within sentences. Punctuation makes written
          language clear and easier to understand.
        </p>
        <h3 className="text-lg font-semibold mb-2">Why is Punctuation Important?</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>It helps convey the correct meaning of a sentence.</li>
          <li>It indicates pauses, stops, or emphasis.</li>
          <li>It separates ideas and organizes thoughts clearly.</li>
        </ul>
      </div>

      {/* Section: Common Punctuation Marks */}
      <div className="bg-blue-50 p-5 rounded-lg mb-6">
        <h2 className="text-purple-600 text-3xl font-bold mb-3">Common Punctuation Marks</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Period (.)</strong> – Used to end a statement.<br />
            <em>Example:</em> She loves to read.
          </li>
          <li>
            <strong>Comma (,)</strong> – Used to separate items or clauses.<br />
            <em>Example:</em> I bought apples, oranges, and bananas.
          </li>
          <li>
            <strong>Question Mark (?)</strong> – Used at the end of a question.<br />
            <em>Example:</em> Are you coming to the party?
          </li>
          <li>
            <strong>Exclamation Mark (!)</strong> – Shows excitement or emphasis.<br />
            <em>Example:</em> Watch out!
          </li>
          <li>
            <strong>Colon (:)</strong> – Introduces a list or explanation.<br />
            <em>Example:</em> She brought three things: a pen, a notebook, and a phone.
          </li>
          <li>
            <strong>Semicolon (;)</strong> – Connects closely related ideas.<br />
            <em>Example:</em> I wanted to go; however, I was too tired.
          </li>
          <li>
            <strong>Apostrophe (’)</strong> – Shows possession or contraction.<br />
            <em>Example:</em> It's John's bike.
          </li>
          <li>
            <strong>Quotation Marks (" ")</strong> – Used to show direct speech or quotations.<br />
            <em>Example:</em> He said, "Let's go now."
          </li>
        </ol>
      </div>

      {/* Section: Examples */}
      <div className="bg-green-50 p-5 rounded-lg mb-6">
        <h2 className="text-purple-600 text-2xl font-semibold mb-3">Examples in Sentences</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Correct: I love pizza, pasta, and salad.</li>
          <li>Correct: Did you finish your homework?</li>
          <li>Incorrect: I like cake but not ice cream (missing punctuation).</li>
          <li>Corrected: I like cake, but not ice cream.</li>
        </ul>
        <p className="mt-3">
          Punctuation can completely change the meaning of a sentence. For example:<br />
          <strong>Let’s eat, Grandma!</strong> vs <strong>Let’s eat Grandma!</strong>
        </p>
      </div>
    </div>
  );
};

export default PunctuationDefinition;
