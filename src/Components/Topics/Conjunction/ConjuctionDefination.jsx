import React from 'react'

const ConjunctionDefinition = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-gray-900">
     <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-4xl font-extrabold text-red-600">
   Conjuction
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" /> 
      
      {/* Definition Section */}
      <div className="bg-purple-50 p-6 rounded-lg shadow mb-6">
        <p className="text-lg font-semibold mb-2">
          <strong className="text-purple-600 font-bold text-3xl">Understanding Conjunctions</strong>
        </p>
        <div className="mb-4">
          <p className="text-gray-700">
            A <strong>conjunction</strong> is a word that connects words, phrases, or clauses in a sentence. Conjunctions are used to join ideas and create more complex and meaningful sentences.
          </p>
          <p className="text-gray-700">
            There are three main types of conjunctions:
          </p>
          <ul className="list-disc pl-6 text-sm space-y-2">
            <li><strong>Coordinating Conjunctions:</strong> These join equal elements, such as words, phrases, or independent clauses. Examples: <strong>and</strong>, <strong>but</strong>, <strong>or</strong>, <strong>nor</strong>, <strong>for</strong>, <strong>so</strong>, <strong>yet</strong>.</li>
            <li><strong>Subordinating Conjunctions:</strong> These connect an independent clause to a dependent clause, making one part of the sentence dependent on another. Examples: <strong>because</strong>, <strong>although</strong>, <strong>if</strong>, <strong>unless</strong>, <strong>since</strong>, <strong>while</strong>.</li>
            <li><strong>Correlative Conjunctions:</strong> These work in pairs to join equal elements. Examples: <strong>either...or</strong>, <strong>neither...nor</strong>, <strong>not only...but also</strong>, <strong>both...and</strong>.</li>
          </ul>
          <p className="text-gray-700">
            Conjunctions are important because they help to make the sentence flow more smoothly by linking related ideas and creating a clear relationship between them.
          </p>
        </div>
      </div>

      <hr className="my-6" />

      {/* Example Sentences */}
      <h2 className="text-purple-600 font-bold text-3xl mb-4">Examples of Conjunctions</h2>
      <p className="text-gray-700">
        Here are some example sentences showing how conjunctions are used to connect words, phrases, or clauses:
      </p>
      <ul className="list-disc pl-6 text-sm space-y-2 mb-6">
        <li><strong>I want to go to the park</strong> <strong>and</strong> <strong>play with my friends</strong>. (Conjunction: <strong>and</strong>, connects two actions)</li>
        <li><strong>She studied hard</strong>, <strong>but</strong> <strong>she didn’t pass the exam</strong>. (Conjunction: <strong>but</strong>, connects two contrasting ideas)</li>
        <li><strong>You can have tea</strong> <strong>or</strong> <strong>coffee</strong>. (Conjunction: <strong>or</strong>, gives a choice between two options)</li>
        <li><strong>He left early</strong> <strong>because</strong> <strong>he had an appointment</strong>. (Conjunction: <strong>because</strong>, explains the reason)</li>
        <li><strong>Not only</strong> <strong>did she sing</strong>, <strong>but also</strong> <strong>she danced</strong>. (Conjunction: <strong>not only...but also</strong>, adds an additional idea)</li>
      </ul>
      
      <p className="text-gray-700">
        As you can see, conjunctions connect different parts of a sentence, helping to combine ideas and make the sentence more cohesive and clear.
      </p>
    </div>
  )
}

export default ConjunctionDefinition
