import React from 'react'

const DeterminerDefinition = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-gray-900">
      
     <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-4xl font-extrabold text-red-600">
    Determiner
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" /> 
      
      {/* Definition Section */}
      <div className="bg-purple-50 p-6 rounded-lg shadow mb-6">
        <p className="text-lg font-semibold mb-2">
          <strong className="text-purple-600 font-bold text-3xl">Understanding Determiners</strong>
        </p>
        <div className="mb-4">
          <p className="text-gray-700">
            A <strong>determiner</strong> is a word that introduces a noun and provides more information about the noun it precedes. Determiners help specify which noun is being talked about and can provide information such as quantity, ownership, or specificity.
          </p>
          <p className="text-gray-700">
            Determiners are important because they clarify or limit the meaning of the noun. Without determiners, a noun can be too vague or general. For example, instead of saying "book," we say "<strong>the book</strong>" or "<strong>my book</strong>" to specify which book we are referring to.
          </p>
          <p className="text-gray-700">
            There are several types of determiners:
          </p>
          <ul className="list-disc pl-6 text-sm space-y-2">
            <li><strong>Articles:</strong> The words <strong>the</strong> (definite article) and <strong>a/an</strong> (indefinite article) are the most common determiners.</li>
            <li><strong>Possessive Determiners:</strong> These indicate ownership. Examples: <strong>my</strong>, <strong>your</strong>, <strong>his</strong>, <strong>her</strong>, <strong>our</strong>, <strong>their</strong>.</li>
            <li><strong>Demonstrative Determiners:</strong> These point to specific things. Examples: <strong>this</strong>, <strong>that</strong>, <strong>these</strong>, <strong>those</strong>.</li>
            <li><strong>Quantifiers:</strong> These show how much or how many. Examples: <strong>some</strong>, <strong>many</strong>, <strong>few</strong>, <strong>all</strong>, <strong>several</strong>.</li>
            <li><strong>Interrogative Determiners:</strong> These are used to ask questions. Examples: <strong>which</strong>, <strong>what</strong>, <strong>whose</strong>.</li>
          </ul>
          <p className="text-gray-700">
            Determiners are usually placed before the noun they modify. For example:
          </p>
          <ul className="list-disc pl-6 text-sm space-y-2">
            <li><strong>the</strong> book</li>
            <li><strong>a</strong> cat</li>
            <li><strong>some</strong> apples</li>
          </ul>
          <p className="text-gray-700">
            Note that determiners are always followed by nouns, and they are necessary for the sentence to make sense.
          </p>
        </div>
      </div>

      <hr className="my-6" />

      {/* Example Sentences */}
      <h2 className="text-purple-600 font-bold text-3xl mb-4">Examples of Determiners</h2>
      <p className="text-gray-700">
        Here are some example sentences showing how determiners are used:
      </p>
      <ul className="list-disc pl-6 text-sm space-y-2 mb-6">
        <li><strong>The</strong> cat is on the roof. (Determiner: <strong>The</strong>, modifies the noun <strong>cat</strong>)</li>
        <li><strong>A</strong> dog is barking outside. (Determiner: <strong>A</strong>, modifies the noun <strong>dog</strong>)</li>
        <li><strong>My</strong> phone is ringing. (Determiner: <strong>My</strong>, modifies the noun <strong>phone</strong>)</li>
        <li><strong>This</strong> chair is comfortable. (Determiner: <strong>This</strong>, modifies the noun <strong>chair</strong>)</li>
        <li><strong>Some</strong> people like to walk in the park. (Determiner: <strong>Some</strong>, modifies the noun <strong>people</strong>)</li>
      </ul>
      
      <p className="text-gray-700">
        As you can see, determiners are essential for making nouns specific or definite in meaning, and they help us describe or limit the noun in context.
      </p>
    </div>
  )
}

export default DeterminerDefinition
