'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, HeartHandshake, Clock, MessageSquare } from "lucide-react";

// Paragraph wrapper with hover effect
const P = ({ children, className = "" }) => (
  <p
    className={`text-lg text-gray-700 leading-relaxed mb-6 transform transition-all duration-300 hover:text-gray-900 ${className}`}
  >
    {children}
  </p>
);

// Reusable IconCard
const IconCard = ({ icon: Icon, title, description, colorFrom, colorTo }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group">
    <div className="flex items-center mb-4">
      <div
        className={`p-3 bg-gradient-to-br ${colorFrom} ${colorTo} rounded-lg group-hover:from-purple-500 group-hover:to-blue-600 transition-all duration-300`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="ml-4 text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default function People() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 rounded-4xl">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        <div className="relative max-w-4xl mx-auto px-6 py-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-4">
              <Users className="w-12 h-12 text-white" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3 rounded-2xl">
              People & Interpersonal Skills
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <P>
            You might have the best coder working on your project, but it amounts
            to little if they can’t collaborate effectively with the team. That’s
            why strong <span className="font-semibold text-indigo-500">people</span> 
            and <span className="font-semibold text-indigo-500">interpersonal skills</span> 
            are essential for any developer.
          </P>

          <P>
            Developers should master soft skills such as{" "}
            <span className="font-medium">patience, empathy, communication,</span>{" "}
            and <span className="font-medium">time management</span>. Often,
            team cohesion and collaboration matter more than the lines of code
            they write.
          </P>

          <P>
            When building a strong engineering team, look for individuals who can
            communicate clearly, resolve conflicts quickly, and collaborate as a
            unit — not just work in isolation.
          </P>
        </div>

        {/* Key Skills Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Essential People Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <IconCard
              icon={Users}
              title="Teamwork"
              description="Collaborating smoothly with others to achieve common goals."
              colorFrom="from-indigo-500"
              colorTo="to-purple-600"
            />
            <IconCard
              icon={HeartHandshake}
              title="Empathy"
              description="Understanding, respecting and supporting teammates effectively."
              colorFrom="from-pink-500"
              colorTo="to-red-500"
            />
            <IconCard
              icon={Clock}
              title="Time Management"
              description="Delivering tasks efficiently and on schedule with focus."
              colorFrom="from-yellow-500"
              colorTo="to-orange-500"
            />
            <IconCard
              icon={MessageSquare}
              title="Communication"
              description="Expressing ideas clearly and resolving conflicts quickly."
              colorFrom="from-green-500"
              colorTo="to-teal-500"
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="mb-6 flex justify-center">
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/people.png"
              alt="People Skills"
              className="rounded-xl transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl"
              width={650}
              height={850}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
