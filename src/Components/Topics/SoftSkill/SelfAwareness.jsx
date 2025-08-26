"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Eye, Lightbulb, Heart, AlertTriangle, ThumbsUp, Shield } from "lucide-react";

// Grid item component
const SkillCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
  >
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md">
      <Icon className="w-7 h-7 drop-shadow-md" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
  </motion.div>
);

export default function SelfAwareness() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 rounded-4xl">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 animate-pulse"></div>
        <div className="relative max-w-4xl mx-auto px-6 py-14">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-4 shadow-lg">
              <Eye className="w-12 h-12 text-white" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3 rounded-2xl">
              Self-awareness
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-4"></div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              A vital soft skill for developers: knowing your strengths,
              recognizing weaknesses, and growing with confidence.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        {/* Intro Paragraphs */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-l-4 border-indigo-500">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Developers should be confident in the things they know and humble in
            the things they don’t. Knowing in what area you need improvement is a
            form of true confidence, making self-awareness one of the vital
            software developer soft skills.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            When a developer is aware of their weak sides, they can seek proper
            training and mentorship from their colleagues or manager. In most cases,
            when people deny they don't know something, it's often a sign of
            insecurity regarding software soft skills.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            But if a developer is secure in themselves and acknowledges their
            weaknesses, it's a sign of emotional maturity. At the same time, being
            confident in the things they know helps them speak their mind, make
            fewer mistakes, and face criticism head-on.
          </p>
        </div>

        {/* Grid Section */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
          Key Aspects of Self-awareness
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            index={0}
            icon={Lightbulb}
            title="Recognizing Weaknesses"
            description="Understanding and accepting areas for improvement is the first step toward growth."
          />
          <SkillCard
            index={1}
            icon={Heart}
            title="Humility"
            description="Being open to feedback and learning from others without ego or defensiveness."
          />
          <SkillCard
            index={2}
            icon={AlertTriangle}
            title="Acknowledging Limits"
            description="Admitting when you don’t know something prevents mistakes and builds trust."
          />
          <SkillCard
            index={3}
            icon={Shield}
            title="Emotional Maturity"
            description="Facing challenges calmly and handling criticism in a constructive way."
          />
          <SkillCard
            index={4}
            icon={ThumbsUp}
            title="Confidence in Strengths"
            description="Balancing self-doubt with belief in your abilities to contribute effectively."
          />
        </div>

        {/* Image Section */}
        <div className="mt-12 flex flex-col items-center">
          <div className="overflow-hidden rounded-xl shadow-2xl border-4 border-gradient-to-r from-indigo-500 to-purple-600">
            <Image
              src="/selfawareness.webp"
              alt="selfawareness"
              className="rounded-xl transform transition-transform duration-500 hover:scale-105"
              width={650}
              height={850}
            />
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">
            "Awareness is the first step towards growth."
          </p>
        </div>


      </div>
    </div>
  );
}
