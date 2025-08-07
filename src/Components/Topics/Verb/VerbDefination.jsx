
import React from 'react'

const VerbDefinition = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-gray-900">
     <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-4xl font-extrabold text-red-600">
  Verb
  </h1>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />  
      
      {/* Definition Section */}
      <div className="bg-purple-50 p-6 rounded-lg shadow mb-6">
        <p className="text-lg font-semibold mb-2">
          <strong className="text-3xl font-bold text-purple-600">Understanding Verbs</strong>
        </p>
        <div className="mb-4 text-[17px]">
          <p className="text-gray-700">
            A <strong>verb</strong> is a word that expresses action or being. Verbs are one of the most important parts of a sentence as they tell us what the subject is doing or what is happening to the subject.
          </p>
          <p className="text-gray-700">
            There are two main types of verbs: <strong>action verbs</strong> and <strong>linking verbs</strong>.
          </p>
          <p className="text-gray-700">
            <strong>Action verbs</strong> show physical or mental action. They tell us what the subject of the sentence is doing. Examples include: <strong>run</strong>, <strong>eat</strong>, <strong>think</strong>, <strong>write</strong>.
          </p>
          <p className="text-gray-700">
            <strong>Linking verbs</strong> connect the subject of a sentence with a subject complement. They do not express action but describe the state or condition of the subject. Common linking verbs include: <strong>is</strong>, <strong>are</strong>, <strong>was</strong>, <strong>seem</strong>, <strong>become</strong>.
          </p>
          <p className="text-gray-700">
            Verbs also change their form based on <strong>tense</strong>, which indicates the time of action. For example, in the sentence "<strong>She runs</strong> every morning," the verb <strong>runs</strong> is in the present tense, while in the sentence "<strong>She ran</strong> yesterday," the verb <strong>ran</strong> is in the past tense.
          </p>
        </div>
      </div>

      <hr className="my-6" />

      {/* Example Sentences */}
      <h2 className="text-3xl font-semibold text-purple-600 mb-4">Examples of Verbs</h2>
      <div className="text-[17px] text-gray-700">
        <p>
          Here are some example sentences showing how verbs are used in sentences:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>The dog runs</strong> fast. (Action Verb: <strong>runs</strong>)</li>
          <li><strong>She is happy</strong>. (Linking Verb: <strong>is</strong>)</li>
          <li><strong>They are playing</strong> soccer. (Action Verb: <strong>playing</strong>)</li>
          <li><strong>The cake smells</strong> delicious. (Linking Verb: <strong>smells</strong>)</li>
          <li><strong>John writes</strong> a letter. (Action Verb: <strong>writes</strong>)</li>
        </ul>
      </div>
    </div>
  )
}

export default VerbDefinition
