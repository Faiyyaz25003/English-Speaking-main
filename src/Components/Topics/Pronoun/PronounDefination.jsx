import React from 'react'

const PronounDefinition = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-gray-900">
        <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
 Pronoun
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  
      
      {/* Definition Section */}
      <div className="bg-purple-50 p-6 rounded-lg shadow mb-6">
        <p className="text-lg font-semibold mb-2">
          <strong className="text-3xl font-bold text-purple-600">Understanding Pronouns</strong>
        </p>
        <div className="mb-4">
          <p className="text-gray-700">
            A <strong>pronoun</strong> is a word that takes the place of a noun in a sentence. Pronouns help avoid repetition and make sentences more concise and easy to read.
          </p>
          <p className="text-gray-700">
            Pronouns can refer to people, animals, things, or ideas, and they replace specific nouns. For example, instead of saying "<strong>John</strong> went to the store," you can use the pronoun "<strong>he</strong> went to the store."
          </p>
          <p className="text-gray-700">
            Pronouns can be classified into different types:
          </p>
          <ul className="list-disc pl-6 text-sm space-y-2">
            <li><strong>Personal Pronouns:</strong> These refer to specific people or things. Examples: <strong>he</strong>, <strong>she</strong>, <strong>it</strong>, <strong>they</strong>.</li>
            <li><strong>Possessive Pronouns:</strong> These show ownership. Examples: <strong>his</strong>, <strong>hers</strong>, <strong>theirs</strong>.</li>
            <li><strong>Reflexive Pronouns:</strong> These refer back to the subject of the sentence. Examples: <strong>myself</strong>, <strong>yourself</strong>, <strong>themselves</strong>.</li>
            <li><strong>Demonstrative Pronouns:</strong> These point to specific things. Examples: <strong>this</strong>, <strong>that</strong>, <strong>these</strong>, <strong>those</strong>.</li>
            <li><strong>Interrogative Pronouns:</strong> These are used to ask questions. Examples: <strong>who</strong>, <strong>what</strong>, <strong>which</strong>.</li>
          </ul>
          <p className="text-gray-700">
            Pronouns must agree with the noun they replace in terms of number, gender, and person. For example, "<strong>he</strong>" replaces a singular masculine noun, and "<strong>they</strong>" replaces a plural noun.
          </p>
        </div>
      </div>

      {/* Example Sentences */}
      <h2 className="text-3xl font-semibold text-purple-600 mb-4">Examples of Pronouns</h2>
      <p className="text-gray-700">
        Here are some example sentences showing how pronouns replace nouns:
      </p>
      <ul className="list-disc pl-6 text-sm space-y-2 mb-6">
        <li><strong>John</strong> went to the store. <strong>He</strong> bought some apples. (Pronoun: <strong>He</strong>)</li>
        <li><strong>The dog</strong> chased the ball. <strong>It</strong> ran fast. (Pronoun: <strong>It</strong>)</li>
        <li><strong>Mary</strong> is going to the party. <strong>She</strong> is excited. (Pronoun: <strong>She</strong>)</li>
        <li><strong>The children</strong> played in the park. <strong>They</strong> had fun. (Pronoun: <strong>They</strong>)</li>
      </ul>
      
      <p className="text-gray-700">
        As you can see, pronouns make the sentences shorter and avoid repetition by replacing specific nouns.
      </p>
    </div>
  )
}

export default PronounDefinition
