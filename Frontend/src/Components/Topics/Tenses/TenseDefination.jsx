import React from 'react'

const TenseDefinition = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-gray-900">
      

      <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
  Tense
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  

      {/* Definition Section */}
      <div className="bg-purple-50 p-6 rounded-lg shadow mb-6">
        <p className="text-3xl font-bold mb-2 text-purple-600"> Understanding Tense </p>
        <p className="text-gray-700 mb-2">
          A <strong>tense</strong> shows the time of an action — present, past, or future — using verb forms. English has three main tenses, each with four aspects: simple, continuous, perfect, and perfect continuous.
        </p>

        {/* Present Tense */}
        <p className="font-semibold text-gray-800 mt-4">1. Present Tense:</p>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li><strong>Simple:</strong> She reads a book.</li>
          <li><strong>Continuous:</strong> She is reading.</li>
          <li><strong>Perfect:</strong> She has read it.</li>
          <li><strong>Perfect Continuous:</strong> She has been reading.</li>
        </ul>

        {/* Past Tense */}
        <p className="font-semibold text-gray-800 mt-4">2. Past Tense:</p>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li><strong>Simple:</strong> She read the book.</li>
          <li><strong>Continuous:</strong> She was reading.</li>
          <li><strong>Perfect:</strong> She had read it.</li>
          <li><strong>Perfect Continuous:</strong> She had been reading.</li>
        </ul>

        {/* Future Tense */}
        <p className="font-semibold text-gray-800 mt-4">3. Future Tense:</p>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li><strong>Simple:</strong> She will read.</li>
          <li><strong>Continuous:</strong> She will be reading.</li>
          <li><strong>Perfect:</strong> She will have read.</li>
          <li><strong>Perfect Continuous:</strong> She will have been reading.</li>
        </ul>
      </div>

      <hr className="my-6" />

      {/* Examples */}
      <h2 className="text-3xl font-bold  text-purple-600 mb-4">Examples</h2>
      <ul className="list-disc pl-6 text-sm space-y-1 text-gray-700 mb-6">
        <li><strong>Present:</strong> I walk to school every day.</li>
        <li><strong>Past:</strong> I walked to school yesterday.</li>
        <li><strong>Future:</strong> I will walk to school tomorrow.</li>
      </ul>

      <p className="text-gray-700">
        Tenses help show when actions happen and how they relate to other events.
      </p>
    </div>
  )
}

export default TenseDefinition
