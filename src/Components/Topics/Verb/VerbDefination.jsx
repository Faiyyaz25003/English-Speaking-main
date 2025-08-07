
import React from 'react';

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
      <div className="bg-purple-50 p-6 rounded-lg shadow mb-6 text-[17px]">
        <p className="text-lg font-semibold mb-2">
           <strong className="text-3xl font-bold text-purple-600">Understanding Verbs</strong>
               </p> 
        
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

      {/* Summary Section */}
      <div className="bg-yellow-50 p-4 rounded-lg shadow mb-6 text-[17px]">
        <h3 className="text-2xl font-semibold text-yellow-600 mb-2">Types of Verbs Summary</h3>
        {/* 1. Action Verbs */}
        <p className="text-2xl font-semibold text-purple-700 mt-4">1. Action Verbs</p>
        <p>These verbs express physical or mental actions. Example: <strong>run, jump, think, write</strong>.</p>

         <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>I can <strong>see</strong> the bird in the tree.</li>
          <li>She <strong>loves</strong> to read mystery novels.</li>
          <li>The cat <strong>purred</strong>.</li>
          <li>He <strong>runs</strong> every morning.</li>
          <li>They <strong>spoke</strong> in hushed tones.</li>
          <li>You <strong>write</strong> beautiful poetry.</li>

        </ul>
        

        {/* 2. Linking Verbs */}
        <p className="text-2xl font-semibold text-purple-700 mt-4">2. Linking Verbs</p>
        <p>They connect the subject with information about the subject. Example: <strong>is, are, was, seem, become</strong>.</p>

        <ul className="list-disc pl-6 space-y-2 mb-6">
  <li>She <strong>is</strong> a teacher.</li>
  <li>The cake <strong>smells</strong>.</li>
  <li>He <strong>seems</strong> upset about the news.</li>
  <li>The soup <strong>tastes</strong>.</li>
  <li>The flowers <strong>look</strong>.</li>
  <li>The book <strong>appears</strong> to be old.</li>
  <li>She <strong>became</strong> a successful lawyer.</li>
  <li>The sky <strong>grew</strong>.</li>
</ul>


        {/* 3. Auxiliary (Helping) Verbs */}
        <p className="text-2xl font-semibold text-purple-700 mt-4">3. Auxiliary (Helping) Verbs</p>
        <p>Used with main verbs to form tenses, voices, or moods. Example: <strong>is, are, was, were, has, have, do, does, did</strong>.</p>

        <ul className="list-disc pl-6 space-y-2 mb-6">
  <li>She <strong>can</strong> play the guitar.</li>
  <li>I <strong>have</strong> finished my homework.</li>
  <li>We <strong>will</strong> go to the park later.</li>
  <li>You <strong>must</strong> stop here.</li>
  <li>He <strong>should</strong>.</li>
  <li>They <strong>might</strong> come to the party.</li>
  <li>She <strong>does</strong> not like spinach.</li>
  <li>I <strong>did</strong> not hear the alarm.</li>
  <li>We <strong>are</strong> leaving soon.</li>
</ul>


        {/* 4. Modal Verbs */}
        <p className="text-2xl font-semibold text-purple-700 mt-4">4. Modal Verbs</p>
        <p>They express necessity, possibility, permission, or ability. Example: <strong>can, could, may, might, shall, should, will, would, must</strong>.</p>

        
        <ul className="list-disc pl-6 space-y-2 mb-6">
  <li>You <strong>must</strong> finish your work.</li>
  <li>She <strong>can</strong> solve difficult puzzles.</li>
  <li>They <strong>might</strong> arrive late.</li>
  <li>He <strong>should</strong> improve his diet.</li>
  <li>We <strong>would</strong> like to start now.</li>
  <li>You <strong>shall</strong> pass the exam.</li>
  <li>She <strong>could</strong> see the finish line.</li>
  <li>They <strong>may</strong> come to the meeting.</li>
</ul>

        {/* 5. Irregular Verbs */}
        <p className="text-2xl font-semibold text-purple-700 mt-4">5. Irregular Verbs</p>
        <p>These verbs do not follow the regular pattern of adding “-ed” for past forms. Example: <strong>go – went – gone, eat – ate – eaten</strong>.</p>

        
        <ul className="list-disc pl-6 space-y-2 mb-6">
  <li>I <strong>spoke</strong> to him yesterday.</li>
  <li>She <strong>woke</strong> up late this morning.</li>
  <li>He <strong>wore</strong> his new shoes.</li>
  <li>We <strong>ate</strong> at a new restaurant.</li>
  <li>They <strong>drank</strong> all the lemonade.</li>
  <li>You <strong>gave</strong> me the wrong directions.</li>
  <li>She <strong>saw</strong> a rare bird.</li>
  <li>He <strong>went</strong> to the store.</li>
</ul>

        {/* 6. Transitive Verbs */}
        <p className="text-2xl font-semibold text-purple-700 mt-4">6. Transitive Verbs</p>
        <p>They require an object to complete their meaning. Example: <strong>She reads a book</strong> (reads what? – a book).</p>

        
        <ul className="list-disc pl-6 space-y-2 mb-6">
  <li>She <strong>plays</strong> the violin gracefully.</li>
  <li>He <strong>reads</strong> the newspaper every morning.</li>
  <li>The teacher <strong>assigns</strong> homework daily.</li>
  <li>We <strong>admire</strong> the artist’s work.</li>
  <li>The chef <strong>tastes</strong> the dish before serving.</li>
</ul>

        {/* 7. Intransitive Verbs */}
        <p className="text-2xl font-semibold text-purple-700 mt-4">7. Intransitive Verbs</p>
        <p>They do not require a direct object. Example: <strong>He sleeps peacefully</strong>.</p>

        
        <ul className="list-disc pl-6 space-y-2 mb-6">
  <li>The baby  <strong> slept</strong>.</li>
  <li>Birds <strong>migrate </strong>as seasons change.</li>
  <li>He <strong>smiled</strong>.</li>
  <li>She <strong>jogged</strong> regularly at dawn.</li>
  <li>The sun <strong>sets</strong> in the west.</li>
</ul>

        {/* 8. Phrasal Verbs */}
        <p className="text-2xl font-semibold text-purple-700 mt-4">8. Phrasal Verbs</p>
        <p>These are phrases that include a verb and a preposition or adverb. Example: <strong>give up, look after, run out of</strong>.</p>

        
        <ul className="list-disc pl-6 space-y-2 mb-6">
  <li>He <strong>looked up</strong> the word in the dictionary.</li>
  <li>We <strong>ran into</strong> an old friend at the cafe.</li>
  <li>She <strong>turned off</strong> the lights before leaving.</li>
  <li>They <strong>brought up</strong> an interesting point during the meeting.</li>
  <li>I <strong>came across</strong> an old photo album in the attic.</li>
</ul>

        {/* 9. Finite Verbs */}
        <p className="text-2xl font-semibold text-purple-700 mt-4">9. Finite Verbs</p>
        <p>Verbs that change form according to the subject and tense. Example: <strong>She walks</strong>, <strong>They walk</strong>.</p>

        <ul className="list-disc pl-6 space-y-2 mb-6">
  <li>She <strong>writes</strong> letters to her pen pal.</li>
  <li>The children <strong>play</strong> in the park.</li>
  <li>He <strong>is</strong> going to the store now.</li>
  <li>We <strong>were</strong> watching the stars last night.</li>
  <li>They <strong>have</strong> completed their assignments.</li>
</ul>

        {/* 10. Non-finite Verbs */}
        <p className="text-2xl font-semibold text-purple-700 mt-4">10. Non-finite Verbs</p>
        <p>They do not show tense and do not change with subject. Types include: <strong>infinitives (to run)</strong>, <strong>gerunds (running)</strong>, <strong>participles (run, running)</strong>.</p>
    
        <ul className="list-disc pl-6 space-y-2 mb-6">
  <li><strong>To run</strong> in the marathon requires stamina. (Infinitive)</li>
  <li><strong>Running</strong> marathons is her hobby. (Gerund)</li>
  <li>The <strong>barking</strong> dog kept us awake. (Present participle)</li>
  <li><strong>Baked</strong> fresh, the bread smells wonderful. (Past participle)</li>
  <li>She had a suggestion <strong>to make</strong>. (Infinitive)</li>
</ul>

      </div>

      {/* Example Sentences */}
      <h2 className="text-3xl font-semibold text-purple-600 mb-4">Examples of Verbs</h2>
      <div className="text-[17px] text-gray-700">
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>The baby cried</strong> loudly. (Action Verb)</li>
          <li><strong>He is a doctor</strong>. (Linking Verb)</li>
          <li><strong>She has finished</strong> her work. (Helping Verb)</li>
          <li><strong>You must obey</strong> the rules. (Modal Verb)</li>
          <li><strong>They ate</strong> pizza last night. (Irregular Verb)</li>
          <li><strong>She made</strong> a cake. (Transitive Verb)</li>
          <li><strong>He sleeps</strong> well. (Intransitive Verb)</li>
          <li><strong>Please turn off</strong> the lights. (Phrasal Verb)</li>
          <li><strong>She writes</strong> daily. (Finite Verb)</li>
          <li><strong>To dance</strong> is her passion. (Non-finite Verb)</li>
        </ul>
      </div>
    </div>
  );
};

export default VerbDefinition;
