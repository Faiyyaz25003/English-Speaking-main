
'use client';

import React from 'react';
import { LogOut, Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Navbar({ onMenuToggle }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    router.push('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-30">
      {/* Left side: Sidebar Toggle & Logo */}
      <div className="flex items-center gap-4">
        {/* Mobile menu button */}
        <button
          onClick={onMenuToggle}
          className="md:hidden text-white hover:text-purple-300 transition duration-200"
          aria-label="Toggle Sidebar"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo / Title */}
        <span className="text-2xl font-extrabold tracking-tight flex items-center gap-1">
          <span className="text-purple-400 text-3xl hover:scale-110 transition-transform duration-300">
            Communicative
          </span>
          <span className="text-pink-400 text-2xl hover:scale-110 transition-transform duration-300">
            Coder
          </span>
        </span>
      </div>

      {/* Right side: Logout button */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm transition"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </button>
    </nav>
  );
}
