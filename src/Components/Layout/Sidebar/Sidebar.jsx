
'use client';

import React from 'react';
import {
  BookOpenText,
  FileText,
  PenLine,
  PencilLine,
  X
} from 'lucide-react';

const Sidebar = ({ currentView, setCurrentView, isSidebarOpen, closeSidebar }) => {
  const userMenuItems = [
    { id: 'noun', label: 'Noun', icon: <BookOpenText size={18} /> },
    { id: 'verb', label: 'Verb', icon: <PenLine size={18} /> },
    { id: 'adjective', label: 'Adjective', icon: <BookOpenText size={18} /> },
    { id: 'tenses', label: 'Tenses', icon: <PencilLine size={18} /> },
    { id: 'speech', label: 'Speech', icon: <BookOpenText size={18} /> },
    { id: 'adverb', label: 'Adverb', icon: <PencilLine size={18} /> },
    { id: 'pronoun', label: 'Pronoun', icon: <FileText size={18} /> },
    { id: 'determiner', label: 'Determiner', icon: <FileText size={18} /> },
    { id: 'conjunction', label: 'Conjunction', icon: <PenLine size={18} /> },
    { id: 'preposition', label: 'Preposition', icon: <FileText size={18} /> },
    { id: 'punctuation', label: 'Punctuation', icon: <PenLine size={18} /> },
    { id: 'compoundWord', label: 'Compound Word', icon: <PencilLine size={18} /> },
    { id: 'mixPracticeSheet', label: 'Mix Practice Sheet', icon: <PencilLine size={18} /> },
        { id: 'SoftSkill', label: 'Soft Skill', icon: <PencilLine size={18} /> },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#0f172a] to-[#1e293b] shadow-xl z-50 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 flex flex-col`}
    >
      {/* Close button for mobile */}
      <div className="md:hidden flex justify-end p-3">
        <button
          onClick={closeSidebar}
          className="text-white hover:text-red-400 transition"
          aria-label="Close Sidebar"
        >
          <X size={24} />
        </button>
      </div>

      {/* Logo */}
      <div className="py-1 px-4 border-b border-white/10 bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
        <div className="flex justify-center mb-3">
          <img
            src="/NexcoreLogo.jpeg"
            alt="Logo"
            className="w-80 h-18 object-cover border rounded-full shadow-xl bg-white/5 p-1"
          />
        </div>
      </div>

      {/* Menu (scrollable part) */}
      <nav className="flex-1 p-3 flex flex-col gap-1 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-transparent">
        {userMenuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setCurrentView(item.id);
              if (window.innerWidth < 768) closeSidebar();
            }}
            className={`flex items-center gap-3 p-3 rounded-lg text-sm font-medium transition-all duration-200
              ${
                currentView === item.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-inner scale-[1.02]'
                  : 'text-purple-100 hover:bg-purple-700/20 hover:text-white hover:shadow-md'
              }`}
          >
            <div className="w-5 h-5 flex items-center justify-center text-purple-300">
              {item.icon}
            </div>
            <span className="truncate">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
