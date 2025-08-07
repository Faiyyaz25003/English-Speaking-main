import React from 'react'

const AdverbDefinition = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-gray-900">
      <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-4xl font-extrabold text-red-600">
    Adverb
  </h1>
</div>
<hr className="border-t-4 border-purple-300 mb-8" />

      {/* Definition Section */}
      <div className="bg-purple-50 p-6 rounded-lg shadow mb-6">
        <p className="text-lg font-semibold mb-2">
          <strong className="text-3xl font-bold text-purple-600">Understanding Adverbs</strong>
        </p>
        <div className="mb-4 text-gray-700">
          <p>
            An <strong>adverb</strong> is a word that modifies or describes a verb, adjective, or another adverb. Adverbs provide more information about how, when, where, or to what extent something happens.
          </p>
          <p>
            Adverbs can answer questions like:
          </p>
          <ul className="list-disc pl-6 text-sm space-y-2">
            <li><strong>How?</strong> (e.g., quickly, slowly, carefully)</li>
            <li><strong>When?</strong> (e.g., now, later, always)</li>
            <li><strong>Where?</strong> (e.g., here, there, everywhere)</li>
            <li><strong>To what extent?</strong> (e.g., very, too, almost)</li>
          </ul>

          <p className="mt-4">
            Most adverbs are formed by adding <strong>-ly</strong> to an adjective. For example:
          </p>
          <ul className="list-disc pl-6 text-sm space-y-2">
            <li><strong>quick</strong> → <strong>quickly</strong></li>
            <li><strong>slow</strong> → <strong>slowly</strong></li>
            <li><strong>happy</strong> → <strong>happily</strong></li>
          </ul>

          <p className="mt-4">
            However, not all adverbs end in <strong>-ly</strong>. Some adverbs do not follow this rule, such as:
          </p>
          <ul className="list-disc pl-6 text-sm space-y-2">
            <li><strong>well</strong>, <strong>fast</strong>, <strong>hard</strong>, <strong>late</strong></li>
          </ul>

          <p className="mt-4">
            Adverbs can also modify adjectives and other adverbs. For example:
          </p>
          <ul className="list-disc pl-6 text-sm space-y-2">
            <li><strong>She is very tall.</strong> (Adverb <strong>very</strong> modifies the adjective <strong>tall</strong>)</li>
            <li><strong>He runs extremely fast.</strong> (Adverb <strong>extremely</strong> modifies the adverb <strong>fast</strong>)</li>
          </ul>
        </div>
      </div>

      <hr className="my-6" />

      {/* Example Sentences */}
      <h2 className="text-3xl font-bold text-purple-600 mb-4">Examples of Adverbs</h2>
      <p className="text-gray-700">
        Here are some example sentences showing how adverbs are used:
      </p>
      <ul className="list-disc pl-6 text-sm space-y-2 mb-6 text-gray-700">
        <li><strong>She sings beautifully</strong>. (Adverb: <strong>beautifully</strong>, modifies the verb <strong>sings</strong>)</li>
        <li><strong>He runs fast</strong>. (Adverb: <strong>fast</strong>, modifies the verb <strong>runs</strong>)</li>
        <li><strong>They arrived late</strong>. (Adverb: <strong>late</strong>, modifies the verb <strong>arrived</strong>)</li>
        <li><strong>She is incredibly smart</strong>. (Adverb: <strong>incredibly</strong>, modifies the adjective <strong>smart</strong>)</li>
        <li><strong>He speaks English quite fluently</strong>. (Adverb: <strong>quite</strong>, modifies the adverb <strong>fluently</strong>)</li>
      </ul>

      <p className="text-gray-700">
        As you can see, adverbs modify verbs, adjectives, or other adverbs, providing additional details about the action, quality, or degree.
      </p>
    </div>
  )
}

export default AdverbDefinition
