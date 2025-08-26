import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Repeat, Lightbulb, Users, Building } from "lucide-react";

const Accountability = () => {
  const aspects = [
    {
      icon: <ShieldAlert className="w-6 h-6 text-white" />,
      title: "Owning Mistakes",
      description:
        "Acknowledging errors openly and taking responsibility instead of avoiding them.",
    },
    {
      icon: <Repeat className="w-6 h-6 text-white" />,
      title: "Learning from Errors",
      description:
        "Using mistakes as opportunities to grow and ensuring they aren’t repeated.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: "Growth Mindset",
      description:
        "Viewing challenges and failures as stepping stones toward improvement.",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Team Trust",
      description:
        "Building credibility with colleagues by being transparent and reliable.",
    },
    {
      icon: <Building className="w-6 h-6 text-white" />,
      title: "Two-Way Street",
      description:
        "Organizations must also support accountability without punishing honest mistakes.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Accountability
          </h1>
        </motion.div>

        {/* Paragraph Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12"
        >
          <p>Developers were, are, and will be making mistakes.</p>
          <p>Some will be more impactful than others. Some might even go unnoticed.</p>
          <p>
            However, accepting and taking ownership of one's mistakes is a soft
            skill you should be looking for in a programmer.
          </p>
          <p>
            Mistakes will happen, but developers should use that as an
            opportunity to learn from them and not repeat them again.
          </p>
          <div className="bg-gray-100 border-l-4 border-blue-500 p-4 rounded-lg shadow-sm">
            <p className="italic text-gray-800">
              Keep in mind that accountability is a two-way street. If admitting
              mistakes is not well-received by the management at your company,
              and if people are punished for making mistakes, then your company
              is also to blame for the lack of accountability.
            </p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-gray-800 mb-10 text-center"
        >
          Key Aspects of Accountability
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {aspects.map((aspect, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-xl mr-4 shadow">
                  {aspect.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {aspect.title}
                </h3>
              </div>
              <p className="text-gray-600 text-left">{aspect.description}</p>
            </motion.div>
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default Accountability;
