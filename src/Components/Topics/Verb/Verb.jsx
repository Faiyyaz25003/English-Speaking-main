'use client';
import { useState } from 'react';
import {
  Users,
  BookOpen,
  Lightbulb,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';

// Importing all components correctly
import IrregularVerbs from './IrregularVerbs';
import MostUsed from './MostUsed';
import TensesAndForms from './TensesAndForms';
import VerbDefination from './VerbDefination';
import VerbsChart from './VerbChart';
import RegularOrIrregularVerbs from './RegularOrIrregularVerbs'; // ✅ Missing import added

const sheets = [
  {
    title: 'Verbs Defination',
    component: 'verbDefiantion',
    description: 'Learn the basic definition of verbs',
    icon: Users,
    color: 'bg-purple-500',
    bgColor: 'bg-purple-50',
    progress: 0,
  },
  {
    title: 'Verbs Chart',
    component: 'VerbChart',
    description: 'Explore verb groups and structure',
    icon: Users,
    color: 'bg-purple-500',
    bgColor: 'bg-purple-50',
    progress: 0,
  },
  {
    title: 'Regular or Irregular',
    component: 'RegularOrIrregularVerbs',
    description: 'Differentiate between regular and irregular verbs',
    icon: Users,
    color: 'bg-purple-500',
    bgColor: 'bg-purple-50',
    progress: 0,
  },
  {
    title: 'Verbs Sheet 1: Irregular Verbs',
    component: 'IrregularVerbs',
    description: 'Learn commonly used irregular verbs',
    icon: Users,
    color: 'bg-purple-500',
    bgColor: 'bg-purple-50',
    progress: 0,
  },
  {
    title: 'Verbs Sheet 2: Tenses & Forms',
    component: 'TensesAndForms',
    description: 'Understand verb tenses and forms',
    icon: BookOpen,
    color: 'bg-blue-500',
    bgColor: 'bg-blue-50',
    progress: 0,
  },
  {
    title: 'Verbs Sheet 3: Most Used English Verbs',
    component: 'MostUsed',
    description: 'Master the most frequently used verbs in English',
    icon: Lightbulb,
    color: 'bg-green-500',
    bgColor: 'bg-green-50',
    progress: 0,
  },
];

export default function Verb() {
  const [selectedSheet, setSelectedSheet] = useState();

  const renderSheet = () => {
    switch (selectedSheet) {
      case 'verbDefiantion':
        return <VerbDefination />;
      case 'VerbChart':
        return <VerbsChart />;
      case 'RegularOrIrregularVerbs':
        return <RegularOrIrregularVerbs />;
      case 'IrregularVerbs':
        return <IrregularVerbs />;
      case 'TensesAndForms':
        return <TensesAndForms />;
      case 'MostUsed':
        return <MostUsed />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      {!selectedSheet ? (
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Heading */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-4 rounded-2xl shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Verb
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master different verb forms and usage with interactive exercises and engaging activities
            </p>
          </div>

          {/* Instruction */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-lg text-gray-600">
              <span className="text-yellow-500">⭐</span>
              <span>Choose a worksheet to begin your learning journey</span>
              <span className="text-yellow-500">⭐</span>
            </div>
          </div>

          {/* Cards with Animation */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sheets.map((sheet, idx) => {
              const IconComponent = sheet.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`${sheet.bgColor} flex flex-col justify-between h-full rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 group relative overflow-hidden`}
                  onClick={() => setSelectedSheet(sheet.component)}
                >
                  {/* Background Shapes */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

                  {/* Index */}
                  <div className="absolute top-6 right-6 text-6xl font-bold text-black/5">
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  {/* Icon */}
                  <div className={`${sheet.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                      {sheet.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {sheet.description}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${sheet.color.replace('bg-', 'bg-gradient-to-r from-').replace('-500', '-400 to-' + sheet.color.split('-')[1] + '-600')}`}
                        style={{ width: `${sheet.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Button */}
                  <button className="w-full bg-purple-500 hover:bg-pink-400 text-gray-700 font-semibold py-3 px-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-all duration-200 shadow-sm group-hover:shadow-md">
                    {sheet.progress > 0 ? 'Continue' : 'Start'}
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="text-center mt-16">
            <p className="text-gray-500">
              Complete all worksheets to become a verb expert! 🎯
            </p>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-white">
          {/* Back Button */}
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

          {/* Render Selected Component */}
          <div className="max-w-6xl mx-auto px-6 py-8">{renderSheet()}</div>
        </div>
      )}
    </div>
  );
}
