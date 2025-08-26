// src/Components/Topics/SoftSkill/EmotionalIntelligence.jsx

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaSmile, FaUsers, FaComments, FaBalanceScale } from "react-icons/fa";

const EmotionalIntelligence = () => {
  const aspects = [
    {
      icon: <FaSmile size={28} className="text-white" />,
      title: "Self-Awareness",
      desc: "Recognizing your own emotions and their effect on behavior.",
    },
    {
      icon: <FaUsers size={28} className="text-white" />,
      title: "Empathy",
      desc: "Understanding others' feelings and building stronger connections.",
    },
    {
      icon: <FaComments size={28} className="text-white" />,
      title: "Communication",
      desc: "Expressing thoughts clearly and listening with intent.",
    },
    {
      icon: <FaBalanceScale size={28} className="text-white" />,
      title: "Conflict Resolution",
      desc: "Managing disagreements fairly and finding win-win solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-14">
        
        {/* Title + Hero Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Emotional Intelligence
            </h1>
            <p className="text-lg text-gray-600">
              Emotional Intelligence (EQ) is one of the most valuable skills in 
              today’s workplace—often valued more than IQ. It impacts how 
              developers communicate, collaborate, and lead effectively.
            </p>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src="Emotional Intelligence.jpg"
              alt="Emotional Intelligence Illustration"
              className="w-72 h-72 object-contain drop-shadow-lg"
            />
          </motion.div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 space-y-6 text-lg text-gray-700 leading-relaxed"
        >
          <p>
            One survey has found that a whopping 75% of hiring managers value an 
            employee's EQ more than their IQ.
          </p>

          <p>
            The truth is that emotional intelligence is a valuable skill that is 
            highly sought after, and not just in CEOs and senior managers.
          </p>

          <p>
            It's a quality that's important for employees as well, whether they're 
            juniors learning how to navigate the world of work or experienced 
            seniors who want to advance into a leadership role.
          </p>

          <p>
            Emotional intelligence is a skill that's thought to help improve 
            communication, management, and problem-solving.
          </p>

          <p>
            For instance, employees with high EQ can keep cool under pressure, 
            while those with low EQ often have passive or aggressive communication styles.
          </p>

          <p>
            Moreover, emotionally intelligent people have greater empathy, resolve 
            conflicts, and listen when someone gives them constructive feedback.
          </p>

          <p>
            On the other hand, emotionally unintelligent people don't work well as 
            a team, dismiss others' ideas, and don't take responsibility for their errors.
          </p>

          <p>
            So, the next time you're hiring a developer, make sure you check for 
            emotional intelligence skills.
          </p>

          <p>
            These developers' soft skills should be easy to recognize.
          </p>

          <div className="bg-gray-100 border-l-4 border-purple-500 p-4 rounded-lg shadow-sm">
            <p className="italic text-gray-800">
              An emotionally intelligent person will be an adept listener, ask a 
              lot of questions, and display curiosity. They'll maintain direct eye 
              contact, smile genuinely, and mirror your gestures.
            </p>
          </div>
        </motion.div>

        {/* Key Aspects Grid */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Key Aspects of Emotional Intelligence
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aspects.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

           {/* <div className="mb-6 flex justify-center">
                                <div className="overflow-hidden rounded-xl shadow-2xl">
                                  <Image
                                     src="/Emotional Intelligence.jpg"   // ✅ your uploaded image
                                     alt="Time Management"
                                     className="rounded-xl transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl"
                                     width={650}
                                     height={850}
                                  />
                                </div>
                              </div> */}
        </div>
      </div>
    </div>
  );
};

export default EmotionalIntelligence;
