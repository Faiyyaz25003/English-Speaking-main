
import React from 'react'

const AdjectiveDefinition = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-gray-900">
      
      {/* Title Section Matching the Image */}
      <div className="flex items-center space-x-2 mb-4">
        <span className="md:text-3xl sm:text-2xl">🌟</span>
        <h1 className="md:text-3xl sm:text-2xl font-extrabold text-red-600">Adjective</h1>
      </div>
      <hr className="border-t-4 border-purple-300 mb-8" />

      
      {/* Definition Section */}
      <div className="bg-purple-50 p-6 rounded-lg shadow mb-6">
        <p className="text-lg font-semibold mb-2">
          <strong className="md:text-3xl sm:text-2xl font-bold text-purple-600">Understanding Adjective</strong>
        </p>
        <div className="mb-4">
          <p className="text-gray-700">
            An <strong>adjective</strong> is a word that describes or modifies a noun or pronoun. It provides more information about the noun, answering questions like "What kind?", "Which one?", "How many?", and "How much?".
          </p>
          <p className="text-gray-700">
            Adjectives help us to be more specific and descriptive. For example, instead of saying "<strong>dog</strong>", we can say "<strong>big dog</strong>" or "<strong>black dog</strong>" to give more information.
          </p>
          <p className="text-gray-700">
            Adjectives can describe things such as:
          </p>
          <ul className="list-disc pl-6 text-sm space-y-2">
            <li><strong>Size:</strong> big, small, large, tiny</li>
            <li><strong>Color:</strong> red, blue, green, yellow</li>
            <li><strong>Shape:</strong> round, square, oval</li>
            <li><strong>Condition/Quality:</strong> clean, dirty, bright, old</li>
            <li><strong>Quantity:</strong> few, many, several, all</li>
          </ul>
          <p className="text-gray-700">
            In a sentence, adjectives usually come before the noun they modify. For example, in the sentence "<strong>The red apple</strong> is on the table," the adjective <strong>red</strong> describes the noun <strong>apple</strong>.
          </p>
          <p className="text-gray-700">
            Sometimes, adjectives can come after a linking verb (like "is," "are," "was," etc.). For example, in the sentence "<strong>The apple is red</strong>," the adjective <strong>red</strong> comes after the verb <strong>is</strong> and describes the noun <strong>apple</strong>.
          </p>
        </div>
      </div>

      <hr className="my-6" />

      {/* Example Sentences */}
      <h2 className="md:text-3xl sm:text-3xl font-bold text-purple-600 mb-4">Examples of Adjectives</h2>
      <p className="text-gray-700">
        Here are some example sentences showing how adjectives are used to describe nouns:
      </p>
      <ul className="list-disc pl-6 text-sm space-y-2 mb-6">
        <li><strong>The small cat</strong> sat on the window. (Adjective: <strong>small</strong>)</li>
        <li><strong>The green shirt</strong> is mine. (Adjective: <strong>green</strong>)</li>
        <li><strong>The tall building</strong> is new. (Adjective: <strong>tall</strong>)</li>
        <li><strong>The beautiful garden</strong> attracts many visitors. (Adjective: <strong>beautiful</strong>)</li>
        <li><strong>The three books</strong> are on the shelf. (Adjective: <strong>three</strong>)</li>
      </ul>
      
      <p className="text-gray-700">
        As you can see, adjectives make the sentences more descriptive and give more detail about the nouns.
      </p>
    </div>
  )
}

export default AdjectiveDefinition
