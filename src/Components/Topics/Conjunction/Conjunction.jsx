'use client';
import { useState } from 'react';
import {
  Users,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import ConjunctionsPracticeSheet1 from './ConjunctionPraticeSheet1';
import ConjuctionDefination from './ConjuctionDefination';

const sheets = [
   {
    title: 'Conjunctions Definition',
    component: 'sheet1',
    description: 'Practice using conjunctions in sentences effectively',
    icon: Users,
    color: 'bg-purple-500',
    bgColor: 'bg-purple-50',
    progress: 0,
  },
  {
    title: 'Conjunctions Practice Sheet 1',
    component: 'sheet2',
    description: 'Practice using conjunctions in sentences effectively',
    icon: Users,
    color: 'bg-purple-500',
    bgColor: 'bg-purple-50',
    progress: 0,
  },
];

export default function Conjunction() {
  const [selectedSheet, setSelectedSheet] = useState(null);

  // ✅ Properly defined renderSheet function
  const renderSheet = () => {
    switch (selectedSheet) {
      case 'sheet1':
        return <ConjuctionDefination />;
      case 'sheet2':
        return <ConjunctionsPracticeSheet1 />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      {!selectedSheet ? (
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-4 rounded-2xl shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Conjunction
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master conjunctions with interactive practice sheets and engaging activities
            </p>
          </div>

          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-lg text-gray-600">
              <span className="text-yellow-500">⭐</span>
              <span>Choose a worksheet to begin your learning journey</span>
              <span className="text-yellow-500">⭐</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sheets.map((sheet, idx) => {
              const IconComponent = sheet.icon;
              return (
                <div
                  key={idx}
                  className={`${sheet.bgColor} flex flex-col justify-between h-full rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 group relative overflow-hidden`}
                  onClick={() => setSelectedSheet(sheet.component)}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  <div className="absolute top-6 right-6 text-6xl font-bold text-black/5">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className={`${sheet.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                      {sheet.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {sheet.description}
                    </p>
                  </div>
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${sheet.color.replace('bg-', 'bg-gradient-to-r from-').replace('-500', '-400 to-' + sheet.color.split('-')[1] + '-600')}`}
                        style={{ width: `${sheet.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <button className="w-full bg-white text-gray-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-all duration-200 shadow-sm group-hover:shadow-md">
                    {sheet.progress > 0 ? 'Continue' : 'Start'}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-500">
              Complete the worksheet to master conjunctions! 🎯
            </p>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-white">
          <div className="bg-white shadow-sm border-b">
            <div className="max-w-6xl mx-auto px-6 py-4">
              <button
                onClick={() => setSelectedSheet(null)}
                className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition-colors duration-200 group"
              >
                <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-gray-200 transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </div>
                <span className="font-medium">Back to Learning Hub</span>
              </button>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 py-8">
            {renderSheet()}
          </div>
        </div>
      )}
    </div>
  );
}
