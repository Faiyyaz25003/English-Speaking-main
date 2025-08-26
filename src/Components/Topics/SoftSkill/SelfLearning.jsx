"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Rocket, Brain, Globe, Code, Laptop } from "lucide-react";

// Grid item component
const SkillCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
  >
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
  </motion.div>
);

export default function SelfLearning() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 rounded-4xl">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        <div className="relative max-w-4xl mx-auto px-6 py-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-4">
              <BookOpen className="w-12 h-12 text-white" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3 rounded-2xl">
              Self-Learning
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        {/* Intro Paragraphs */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Having the skill of self-learning can greatly benefit a developer at their workplace. 
            Life-long self-learning equips them to identify problems and quickly look for effective solutions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Many developers enter tech without formal computer science degrees, yet still build strong engineering skills. 
            According to the StackOverflow 2018 Survey, 87% of respondents taught themselves a new programming language or technology.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Passion and curiosity are powerful drivers—helping developers gain valuable skills regardless of their background. 
            With technology evolving rapidly, staying updated with current trends is essential.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether it’s learning a new language or exploring new technologies, continuous self-learning broadens problem-solving 
            skills and prevents roadblocks. With countless online resources like courses, StackOverflow, and GitHub, developers 
            can keep their knowledge fresh and relevant.
          </p>
        </div>

        {/* Grid Section */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
          Key Aspects of Self-Learning
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            icon={Rocket}
            title="Continuous Growth"
            description="Developers constantly improve by learning new languages, tools, and frameworks."
          />
          <SkillCard
            icon={Brain}
            title="Problem-Solving"
            description="Self-learners quickly identify issues and independently find effective solutions."
          />
          <SkillCard
            icon={Globe}
            title="Online Resources"
            description="Leveraging platforms like StackOverflow, GitHub, and online courses to learn efficiently."
          />
          <SkillCard
            icon={Code}
            title="Practical Application"
            description="Hands-on practice ensures new knowledge becomes real-world skills."
          />
          <SkillCard
            icon={Laptop}
            title="Adaptability"
            description="Keeping up with fast-changing tech trends and adapting to new environments easily."
          />
        </div>
      </div>
      <div className="mb-6 flex justify-center">
                <div className="overflow-hidden rounded-xl shadow-2xl">
                  <Image
                     src="/selfLearning.png"   // ✅ your uploaded image
                     alt="selfLearning"
                     className="rounded-xl transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl"
                     width={650}
                     height={850}
                  />
                </div>
              </div>
    </div>
  );
}
