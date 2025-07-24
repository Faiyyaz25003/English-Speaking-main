
'use client';

import React, { useState } from 'react';

import Sidebar from '../Layout/Sidebar/Sidebar';
import Navbar from '../Layout/Navbar/Navbar';

import Noun from '../Topics/Noun/Noun';
import Pronoun from '../Topics/Pronoun/Pronoun';
import Adjective from '../Topics/Adjective/Adjective';
import Verb from '../Topics/Verb/Verb';
import Adverb from '../Topics/Adverb/Adverb';
import Conjunction from '../Topics/Conjunction/Conjunction';
import Tenses from '../Topics/Tenses/Tenses';
import Speech from '../Topics/Speech/Speech';
import Punctuation from '../Topics/Punctuation/Punctuation';
import Prepositions from '../Topics/Preposition/Preposition';
import CompoundWord from '../Topics/CompoundWord/CompoundWord';
import MixPracticeSheet from '../Topics/MixPracticeSheet/MixPracticeSheet';
import Determiner from '../Topics/Determiner/Determiner';

export default function Home() {
  const [currentView, setCurrentView] = useState('noun');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (currentView) {
      case 'noun': return <Noun />;
      case 'pronoun': return <Pronoun />;
      case 'adjective': return <Adjective />;
      case 'verb': return <Verb />;
      case 'adverb': return <Adverb />;
      case 'determiner': return <Determiner/>
      case 'conjunction': return <Conjunction />;
      case 'tenses': return <Tenses />;
      case 'speech': return <Speech />;
      case 'punctuation': return <Punctuation />;
      case 'preposition': return <Prepositions />;
      case 'compoundWord': return <CompoundWord />;
      case 'mixPracticeSheet': return <MixPracticeSheet />;
      default:
        return <Verb/>;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden relative">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white border-r transition-transform duration-200 ease-in-out 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:static md:inset-0`}>
        <Sidebar currentView={currentView} setCurrentView={setCurrentView} isSidebarOpen={isSidebarOpen} />
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        <Navbar setCurrentView={setCurrentView} onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-y-auto bg-gray-100">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
