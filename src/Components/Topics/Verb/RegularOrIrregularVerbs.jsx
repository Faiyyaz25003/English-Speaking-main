'use client';
import React from 'react';
import { CheckCircle, Info, Sparkles } from 'lucide-react';

export default function Home() {
  const regularVerbs = [
    ['play', 'played', 'played'],
    ['work', 'worked', 'worked'],
    ['open', 'opened', 'opened'],
    ['walk', 'walked', 'walked'],
    ['talk', 'talked', 'talked'],
  ];

  const irregularVerbs = [
    ['go', 'went', 'gone'],
    ['eat', 'ate', 'eaten'],
    ['take', 'took', 'taken'],
    ['see', 'saw', 'seen'],
    ['come', 'came', 'come'],
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 p-4 sm:p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            English Verbs Guide
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Master the fundamentals of <span className="font-semibold text-purple-600">regular</span> and <span className="font-semibold text-blue-600">irregular</span> verbs in English grammar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Regular Verbs Section */}
          <section className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 md:p-8 border hover:border-blue-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg mr-4">
                  R
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Regular Verbs</h2>
              </div>

              <div className="mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600 text-gray-700">
                  <p>
                    <strong className="text-blue-700">Definition:</strong> Regular verbs form their past tense by adding <span className="font-bold bg-blue-100 px-2 py-1 rounded">-ed</span> or <span className="font-bold bg-blue-100 px-2 py-1 rounded">-d</span>.
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left border rounded-xl overflow-hidden">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="p-3 font-semibold">Base Verb</th>
                      <th className="p-3 font-semibold">Past Tense</th>
                      <th className="p-3 font-semibold">Past Participle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {regularVerbs.map(([base, past, part]) => (
                      <tr key={base} className="border-b hover:bg-blue-50 transition">
                        <td className="p-3 font-medium text-gray-800">{base}</td>
                        <td className="p-3 text-blue-600 font-semibold">{past}</td>
                        <td className="p-3 text-blue-600 font-semibold">{part}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm font-medium">
                <CheckCircle size={16} />
                Pattern: Base + ed = Past forms
              </div>
            </div>
          </section>

          {/* Irregular Verbs Section */}
          <section className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 md:p-8 border hover:border-purple-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg mr-4">
                  I
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Irregular Verbs</h2>
              </div>

              <div className="mb-6">
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600 text-gray-700">
                  <p>
                    <strong className="text-purple-700">Definition:</strong> Irregular verbs <span className="bg-purple-100 px-2 py-1 rounded font-semibold">do not follow the -ed rule</span> and change forms unpredictably.
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left border rounded-xl overflow-hidden">
                  <thead className="bg-purple-600 text-white">
                    <tr>
                      <th className="p-3 font-semibold">Base Verb</th>
                      <th className="p-3 font-semibold">Past Tense</th>
                      <th className="p-3 font-semibold">Past Participle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {irregularVerbs.map(([base, past, part]) => (
                      <tr key={base} className="border-b hover:bg-purple-50 transition">
                        <td className="p-3 font-medium text-gray-800">{base}</td>
                        <td className="p-3 text-purple-600 font-semibold">{past}</td>
                        <td className="p-3 text-purple-600 font-semibold">{part}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex items-center gap-2 p-3 bg-orange-50 border border-orange-200 rounded-xl text-orange-800 text-sm font-medium">
                <Info size={16} />
                Pattern: Unique change for each verb
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
