// src/Components/Topics/SoftSkill/TimeManagement.jsx

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaRegCalendarAlt,
  FaTasks,
  FaClock,
  FaBullseye,
} from "react-icons/fa";

const TimeManagement = () => {
  const aspects = [
    {
      icon: <FaRegCalendarAlt size={28} className="text-white" />,
      title: "Prioritization",
      desc: "Focusing on the most important tasks first to maximize productivity.",
    },
    {
      icon: <FaTasks size={28} className="text-white" />,
      title: "Task Management",
      desc: "Breaking down work into manageable pieces and tracking progress.",
    },
    {
      icon: <FaClock size={28} className="text-white" />,
      title: "Deadline Awareness",
      desc: "Meeting deadlines consistently while maintaining quality work.",
    },
    {
      icon: <FaBullseye size={28} className="text-white" />,
      title: "Focus",
      desc: "Avoiding distractions and staying committed to tasks at hand.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-14">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Time Management
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Developers are always working on time-bound projects. Sometimes they
            also need to manage a team or work remotely, making time management
            an essential skill.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-gray-700"
          >
            <p>
              ⏱️ Good time management helps developers meet deadlines and give
              accurate estimates.
            </p>
            <p>
              📌 Clients expect punctuality and adherence to deadlines, making
              this one of the most crucial soft skills.
            </p>
            <p>
              ✅ If a developer commits to 10 weeks and needs only 5 extra days,
              it’s acceptable. But exceeding beyond that shows poor time
              management.
            </p>
            <p>
              🚀 Only by hiring people with strong time management can projects
              be completed successfully and efficiently.
            </p>
          </motion.div>

          {/* Right Side - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4975/4975373.png"
              alt="Time management illustration"
              className="w-72 h-72 object-contain drop-shadow-lg"
            />
          </motion.div>
        </div>

        {/* Key Aspects Grid */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Key Aspects of Time Management
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
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
           <div className="mb-6 flex justify-center">
                      <div className="overflow-hidden rounded-xl shadow-2xl">
                        <Image
                           src="/Time Management.jpg"   // ✅ your uploaded image
                           alt="Time Management"
                           className="rounded-xl transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl"
                           width={650}
                           height={850}
                        />
                      </div>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default TimeManagement;
