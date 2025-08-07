import React from 'react'

const SpeechDefinition = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-gray-900">
     <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
 Speech
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  
      
      {/* Definition Section */}
      <div className="bg-purple-50 p-6 rounded-lg shadow mb-6">
        <p className="text-lg font-semibold mb-2">
          <strong className="text-3xl font-bold text-purple-600">What is a Part of Speech?</strong>
        </p>
        <div className="mb-4">
          <p className="text-gray-700">
            In grammar, the term <strong>part of speech</strong> refers to the categories of words based on their function within a sentence. There are eight main parts of speech in English, each serving a unique purpose.
          </p>
          <p className="text-gray-700">
            The eight main parts of speech are:
          </p>
          <ul className="list-disc pl-6 text-sm space-y-2">
            <li><strong>Noun:</strong> A word that names a person, place, thing, or idea. Example: <strong>dog</strong>, <strong>city</strong>, <strong>happiness</strong>.</li>
            <li><strong>Pronoun:</strong> A word that replaces a noun. Example: <strong>he</strong>, <strong>she</strong>, <strong>it</strong>.</li>
            <li><strong>Verb:</strong> A word that expresses action or being. Example: <strong>run</strong>, <strong>is</strong>, <strong>seem</strong>.</li>
            <li><strong>Adjective:</strong> A word that describes or modifies a noun. Example: <strong>beautiful</strong>, <strong>tall</strong>, <strong>green</strong>.</li>
            <li><strong>Adverb:</strong> A word that modifies a verb, adjective, or another adverb. Example: <strong>quickly</strong>, <strong>very</strong>, <strong>carefully</strong>.</li>
            <li><strong>Preposition:</strong> A word that shows the relationship between a noun or pronoun and another word. Example: <strong>on</strong>, <strong>in</strong>, <strong>under</strong>.</li>
            <li><strong>Conjunction:</strong> A word that connects words, phrases, or clauses. Example: <strong>and</strong>, <strong>but</strong>, <strong>or</strong>.</li>
            <li><strong>Interjection:</strong> A word or phrase that expresses strong emotion. Example: <strong>wow</strong>, <strong>ouch</strong>, <strong>hey</strong>.</li>
          </ul>
        </div>
      </div>

      <hr className="my-6" />

      {/* Example Sentences */}
      <h2 className="text-3xl font-bold text-purple-600 mb-4">Examples of Parts of Speech</h2>
      <p className="text-gray-700">
        Here are some example sentences that show how different parts of speech work together:
      </p>
      <ul className="list-disc pl-6 text-sm space-y-2 mb-6">
        <li><strong>She</strong> (pronoun) <strong>quickly</strong> (adverb) <strong>ran</strong> (verb) to the park. (The pronoun <strong>she</strong> is the subject, <strong>ran</strong> is the action verb, and <strong>quickly</strong> modifies how she ran.)</li>
        <li><strong>The</strong> (article) <strong>dog</strong> (noun) <strong>is</strong> (verb) <strong>happy</strong> (adjective). (The noun <strong>dog</strong> is described by the adjective <strong>happy</strong>, and <strong>is</strong> is the linking verb.)</li>
        <li><strong>I</strong> (pronoun) <strong>will</strong> (verb) <strong>buy</strong> (verb) <strong>a</strong> (article) <strong>car</strong> (noun) <strong>tomorrow</strong> (adverb). (The adverb <strong>tomorrow</strong> tells when the action will happen.)</li>
        <li><strong>She</strong> (pronoun) <strong>is</strong> (verb) <strong>more</strong> (adverb) <strong>intelligent</strong> (adjective) than <strong>him</strong> (pronoun). (The adjective <strong>intelligent</strong> is modified by the adverb <strong>more</strong>.)</li>
      </ul>
      
      <p className="text-gray-700">
        As you can see, different parts of speech work together to form meaningful sentences, each serving a specific role to clarify the meaning.
      </p>
    </div>
  )
}

export default SpeechDefinition
