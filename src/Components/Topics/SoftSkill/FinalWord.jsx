// src/Components/Topics/SoftSkill/FinalWord.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaBrain, FaHandshake, FaChartLine } from "react-icons/fa";

const FinalWord = () => {
  const aspects = [
    {
      icon: <FaUsers size={28} className="text-white" />,
      title: "Collaboration",
      desc: "Strong communication fosters teamwork and builds cohesiveness in projects.",
    },
    {
      icon: <FaBrain size={28} className="text-white" />,
      title: "Self-Awareness",
      desc: "Recognizing strengths and weaknesses improves accountability and growth.",
    },
    {
      icon: <FaHandshake size={28} className="text-white" />,
      title: "Leadership",
      desc: "Balancing technical expertise with soft skills prepares developers for future leadership roles.",
    },
    {
      icon: <FaChartLine size={28} className="text-white" />,
      title: "Future Growth",
      desc: "Soft skills investment reduces automation risks and boosts long-term innovation.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-20">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Final Word
          </h1>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Content Section (Only Text Now) */}
        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-lg text-gray-700 leading-relaxed"
          >
            <p>
              These are the must-have skills for software developers, and all the
              soft skills outlined in this post complement each other. Having
              good communication skills can lead to better collaboration and team
              cohesiveness. Being self-aware of one's strengths and weaknesses can
              improve one's accountability skills. And the result is a
              well-rounded developer with strong potential.
            </p>

            <p>
              A developer who possesses both technical expertise and soft skills
              will be crucial for the future of work. In fact, an Accenture
              Strategy report found that if investment in training for these soft
              skills is doubled, the number of jobs at risk from automation would
              drop from <span className="font-bold text-purple-600">10%</span> to{" "}
              <span className="font-bold text-purple-600">4%</span>.
            </p>

            <div className="bg-white border-l-4 border-purple-500 p-5 rounded-lg shadow-sm">
              <p className="italic text-gray-800">
                Creating the future workforce is the responsibility of every CEO.
                Only those leaders who understand the importance of soft skills
                in programming and embrace the challenge will get to experience
                the greatest gains in growth and innovation.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Aspects Grid */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Key Aspects for a Future-Ready Developer
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
        </div>
      </div>
    </div>
  );
};

export default FinalWord;
