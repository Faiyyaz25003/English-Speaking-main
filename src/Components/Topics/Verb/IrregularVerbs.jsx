
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const irregularVerbs = [
  { infinitive: 'arise', pastSimple: 'arose', pastParticiple: 'arisen' },
  { infinitive: 'awake', pastSimple: 'awoke', pastParticiple: 'awoken' },
  { infinitive: 'bear', pastSimple: 'bore', pastParticiple: 'borne' },
  { infinitive: 'beat', pastSimple: 'beat', pastParticiple: 'beaten' },
  { infinitive: 'become', pastSimple: 'became', pastParticiple: 'become' },
  { infinitive: 'begin', pastSimple: 'began', pastParticiple: 'begun' },
  { infinitive: 'bend', pastSimple: 'bent', pastParticiple: 'bent' },
  { infinitive: 'beset', pastSimple: 'beset', pastParticiple: 'beset' },
  { infinitive: 'bet', pastSimple: 'bet', pastParticiple: 'bet' },
  { infinitive: 'bid', pastSimple: 'bid', pastParticiple: 'bid' },
  { infinitive: 'bind', pastSimple: 'bound', pastParticiple: 'bound' },
  { infinitive: 'bite', pastSimple: 'bit', pastParticiple: 'bitten' },
  { infinitive: 'bleed', pastSimple: 'bled', pastParticiple: 'bled' },
  { infinitive: 'blow', pastSimple: 'blew', pastParticiple: 'blown' },
  { infinitive: 'break', pastSimple: 'broke', pastParticiple: 'broken' },
  { infinitive: 'breed', pastSimple: 'bred', pastParticiple: 'bred' },
  { infinitive: 'bring', pastSimple: 'brought', pastParticiple: 'brought' },
  { infinitive: 'broadcast', pastSimple: 'broadcast', pastParticiple: 'broadcast' },
  { infinitive: 'build', pastSimple: 'built', pastParticiple: 'built' },
  { infinitive: 'burn', pastSimple: 'burnt', pastParticiple: 'burnt' },
  { infinitive: 'burst', pastSimple: 'burst', pastParticiple: 'burst' },
  { infinitive: 'buy', pastSimple: 'bought', pastParticiple: 'bought' },
  { infinitive: 'cast', pastSimple: 'cast', pastParticiple: 'cast' },
  { infinitive: 'catch', pastSimple: 'caught', pastParticiple: 'caught' },
  { infinitive: 'choose', pastSimple: 'chose', pastParticiple: 'chosen' },
  { infinitive: 'cling', pastSimple: 'clung', pastParticiple: 'clung' },
  { infinitive: 'come', pastSimple: 'came', pastParticiple: 'come' },
  { infinitive: 'cost', pastSimple: 'cost', pastParticiple: 'cost' },
  { infinitive: 'creep', pastSimple: 'crept', pastParticiple: 'crept' },
  { infinitive: 'cut', pastSimple: 'cut', pastParticiple: 'cut' },
  { infinitive: 'deal', pastSimple: 'dealt', pastParticiple: 'dealt' },
  { infinitive: 'dig', pastSimple: 'dug', pastParticiple: 'dug' },
  { infinitive: 'do', pastSimple: 'did', pastParticiple: 'done' },
  { infinitive: 'draw', pastSimple: 'drew', pastParticiple: 'drawn' },
  { infinitive: 'dream', pastSimple: 'dreamt', pastParticiple: 'dreamt' },
  { infinitive: 'drink', pastSimple: 'drank', pastParticiple: 'drunk' },
  { infinitive: 'drive', pastSimple: 'drove', pastParticiple: 'driven' },
  { infinitive: 'eat', pastSimple: 'ate', pastParticiple: 'eaten' },
  { infinitive: 'fall', pastSimple: 'fell', pastParticiple: 'fallen' },
  { infinitive: 'feed', pastSimple: 'fed', pastParticiple: 'fed' },
  { infinitive: 'feel', pastSimple: 'felt', pastParticiple: 'felt' },
  { infinitive: 'fight', pastSimple: 'fought', pastParticiple: 'fought' },
  { infinitive: 'find', pastSimple: 'found', pastParticiple: 'found' },
  { infinitive: 'fly', pastSimple: 'flew', pastParticiple: 'flown' },
  { infinitive: 'forbid', pastSimple: 'forbade', pastParticiple: 'forbidden' },
  { infinitive: 'forget', pastSimple: 'forgot', pastParticiple: 'forgotten' },
  { infinitive: 'forgive', pastSimple: 'forgave', pastParticiple: 'forgiven' },
  { infinitive: 'freeze', pastSimple: 'froze', pastParticiple: 'frozen' },
  { infinitive: 'get', pastSimple: 'got', pastParticiple: 'gotten' },
  { infinitive: 'give', pastSimple: 'gave', pastParticiple: 'given' },
  { infinitive: 'go', pastSimple: 'went', pastParticiple: 'gone' },
  { infinitive: 'grow', pastSimple: 'grew', pastParticiple: 'grown' },
  { infinitive: 'hang', pastSimple: 'hung', pastParticiple: 'hung' },
  { infinitive: 'have', pastSimple: 'had', pastParticiple: 'had' },
  { infinitive: 'hear', pastSimple: 'heard', pastParticiple: 'heard' },
  { infinitive: 'hide', pastSimple: 'hid', pastParticiple: 'hidden' },
  { infinitive: 'hit', pastSimple: 'hit', pastParticiple: 'hit' },
  { infinitive: 'hold', pastSimple: 'held', pastParticiple: 'held' },
  { infinitive: 'hurt', pastSimple: 'hurt', pastParticiple: 'hurt' },
  { infinitive: 'keep', pastSimple: 'kept', pastParticiple: 'kept' },
  { infinitive: 'know', pastSimple: 'knew', pastParticiple: 'known' },
  { infinitive: 'lay', pastSimple: 'laid', pastParticiple: 'laid' },
  { infinitive: 'lead', pastSimple: 'led', pastParticiple: 'led' },
  { infinitive: 'leave', pastSimple: 'left', pastParticiple: 'left' },
  { infinitive: 'lend', pastSimple: 'lent', pastParticiple: 'lent' },
  { infinitive: 'let', pastSimple: 'let', pastParticiple: 'let' },
  { infinitive: 'lie', pastSimple: 'lay', pastParticiple: 'lain' },
  { infinitive: 'lose', pastSimple: 'lost', pastParticiple: 'lost' },
  { infinitive: 'make', pastSimple: 'made', pastParticiple: 'made' },
  { infinitive: 'mean', pastSimple: 'meant', pastParticiple: 'meant' },
  { infinitive: 'meet', pastSimple: 'met', pastParticiple: 'met' },
  { infinitive: 'pay', pastSimple: 'paid', pastParticiple: 'paid' },
  { infinitive: 'put', pastSimple: 'put', pastParticiple: 'put' },
  { infinitive: 'read', pastSimple: 'read', pastParticiple: 'read' },
  { infinitive: 'ride', pastSimple: 'rode', pastParticiple: 'ridden' },
  { infinitive: 'ring', pastSimple: 'rang', pastParticiple: 'rung' },
  { infinitive: 'rise', pastSimple: 'rose', pastParticiple: 'risen' },
  { infinitive: 'run', pastSimple: 'ran', pastParticiple: 'run' },
  { infinitive: 'say', pastSimple: 'said', pastParticiple: 'said' },
  { infinitive: 'see', pastSimple: 'saw', pastParticiple: 'seen' },
  { infinitive: 'sell', pastSimple: 'sold', pastParticiple: 'sold' },
  { infinitive: 'send', pastSimple: 'sent', pastParticiple: 'sent' },
  { infinitive: 'set', pastSimple: 'set', pastParticiple: 'set' },
  { infinitive: 'shake', pastSimple: 'shook', pastParticiple: 'shaken' },
  { infinitive: 'shine', pastSimple: 'shone', pastParticiple: 'shone' },
  { infinitive: 'shoot', pastSimple: 'shot', pastParticiple: 'shot' },
  { infinitive: 'show', pastSimple: 'showed', pastParticiple: 'shown' },
  { infinitive: 'shut', pastSimple: 'shut', pastParticiple: 'shut' },
  { infinitive: 'sing', pastSimple: 'sang', pastParticiple: 'sung' },
  { infinitive: 'sink', pastSimple: 'sank', pastParticiple: 'sunk' },
  { infinitive: 'sit', pastSimple: 'sat', pastParticiple: 'sat' },
  { infinitive: 'sleep', pastSimple: 'slept', pastParticiple: 'slept' },
  { infinitive: 'speak', pastSimple: 'spoke', pastParticiple: 'spoken' },
  { infinitive: 'spend', pastSimple: 'spent', pastParticiple: 'spent' },
  { infinitive: 'spin', pastSimple: 'spun', pastParticiple: 'spun' },
  { infinitive: 'split', pastSimple: 'split', pastParticiple: 'split' },
  { infinitive: 'spread', pastSimple: 'spread', pastParticiple: 'spread' },
  { infinitive: 'stand', pastSimple: 'stood', pastParticiple: 'stood' },
  { infinitive: 'steal', pastSimple: 'stole', pastParticiple: 'stolen' },
  { infinitive: 'stick', pastSimple: 'stuck', pastParticiple: 'stuck' },
  { infinitive: 'sting', pastSimple: 'stung', pastParticiple: 'stung' },
  { infinitive: 'strike', pastSimple: 'struck', pastParticiple: 'struck' },
  { infinitive: 'swear', pastSimple: 'swore', pastParticiple: 'sworn' },
  { infinitive: 'sweep', pastSimple: 'swept', pastParticiple: 'swept' },
  { infinitive: 'swim', pastSimple: 'swam', pastParticiple: 'swum' },
  { infinitive: 'swing', pastSimple: 'swung', pastParticiple: 'swung' },
  { infinitive: 'take', pastSimple: 'took', pastParticiple: 'taken' },
  { infinitive: 'teach', pastSimple: 'taught', pastParticiple: 'taught' },
  { infinitive: 'tear', pastSimple: 'tore', pastParticiple: 'torn' },
  { infinitive: 'tell', pastSimple: 'told', pastParticiple: 'told' },
  { infinitive: 'think', pastSimple: 'thought', pastParticiple: 'thought' },
  { infinitive: 'throw', pastSimple: 'threw', pastParticiple: 'thrown' },
  { infinitive: 'understand', pastSimple: 'understood', pastParticiple: 'understood' },
  { infinitive: 'wake', pastSimple: 'woke', pastParticiple: 'woken' },
  { infinitive: 'wear', pastSimple: 'wore', pastParticiple: 'worn' },
  { infinitive: 'win', pastSimple: 'won', pastParticiple: 'won' },
  { infinitive: 'write', pastSimple: 'wrote', pastParticiple: 'written' }
];

export default function IrregularVerbs() {
  const [sortBy, setSortBy] = useState('infinitive');
  const [sortOrder, setSortOrder] = useState('asc');

  const sortedVerbs = [...irregularVerbs].sort((a, b) => {
    const aVal = a[sortBy];
    const bVal = b[sortBy];
    return sortOrder === 'asc'
      ? aVal.localeCompare(bVal)
      : bVal.localeCompare(aVal);
  });

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-[17px]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            
             <div className="flex items-center space-x-2 mb-4">
  <span className="text-2xl">🌟</span>
  <h1 className="text-3xl font-extrabold text-red-600">
         Irregular Verbs Table
              </h1>
              <p className="text-lg text-red-600">English irregular verbs reference</p>
</div>
      <hr className="border-t-4 border-purple-300 mb-8" />

            
          </div>

          {/* Verb Table */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    {['infinitive', 'pastSimple', 'pastParticiple'].map((col) => (
                      <th
                        key={col}
                        onClick={() => handleSort(col)}
                        className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center">
                          {col === 'infinitive' && 'Verb (infinitive)'}
                          {col === 'pastSimple' && 'Past simple form'}
                          {col === 'pastParticiple' && 'Past participle'}
                          {sortBy === col &&
                            (sortOrder === 'asc' ? (
                              <ChevronUp className="w-4 h-4 ml-1" />
                            ) : (
                              <ChevronDown className="w-4 h-4 ml-1" />
                            ))}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sortedVerbs.map((verb, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">
                        {verb.infinitive}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                        {verb.pastSimple}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                        {verb.pastParticiple}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
