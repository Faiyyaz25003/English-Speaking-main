import React from 'react'

const PrepositionDefination = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
  Preposition
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  

      <div style={{
        backgroundColor: '#f9f1ff',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '20px'
      }}>
        <strong className="text-3xl font-bold text-purple-600">Understanding Preposition</strong>
        <p>
          A <strong>preposition</strong> is a word that shows the relationship between a noun or pronoun 
          and other words in a sentence. It often tells us about direction, place, time, or introduces an object.
        </p>

        <h3>Types of Prepositions:</h3>
        <ol>
          <li><strong>Prepositions of Place:</strong> in, on, under, over, between, behind<br />Example: The book is <em>on</em> the table.</li>
          <li><strong>Prepositions of Time:</strong> at, on, in, before, after<br />Example: We will meet <em>at</em> 5 PM.</li>
          <li><strong>Prepositions of Direction/Movement:</strong> to, into, onto, out of, from<br />Example: She went <em>into</em> the room.</li>
        </ol>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-purple-600 mb-4">Examples</h2>
        <ul>
          <li><strong>Place:</strong> The cat is <em>under</em> the bed.</li>
          <li><strong>Time:</strong> He arrived <em>after</em> the meeting.</li>
          <li><strong>Direction:</strong> She walked <em>to</em> the park.</li>
        </ul>

        <p>
          Prepositions help connect ideas and provide clarity about time, location, and movement in sentences.
        </p>
      </div>
    </div>
  )
}

export default PrepositionDefination
