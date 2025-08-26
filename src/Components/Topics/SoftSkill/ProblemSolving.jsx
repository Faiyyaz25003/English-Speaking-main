  

'use client';
import React from "react";
import Image from "next/image";
import {
  Brain,
  Lightbulb,
  Target,
  Users,
  Code,
  CheckCircle,
} from "lucide-react";

// Enhanced paragraph wrapper
const P = ({ children, className = "" }) => (
  <p
    className={`text-lg text-gray-700 leading-relaxed mb-6 transform transition-all duration-300 hover:text-gray-900 ${className}`}
  >
    {children}
  </p>
);

// Enhanced link
const LinkText = ({ href, text }) => (
  <a
    href={href}
    className="relative text-blue-600 hover:text-blue-800 font-semibold transition-all duration-300 group"
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

// Icon card component
const IconCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group">
    <div className="flex items-center mb-4">
      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:from-purple-500 group-hover:to-blue-600 transition-all duration-300">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="ml-4 text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default function ProblemSolving() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 rounded-4xl">

      {/* Hero Section */}
<div className="relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
  <div className="relative max-w-4xl mx-auto px-6 py-10"> {/* py-16 → py-10 */}
    <div className="text-center mb-8"> {/* mb-12 → mb-8 */}
      <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
        <Brain className="w-12 h-12 text-white" />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3 rounded-2xl">
        Problem-solving skills and critical thinking
      </h1>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
    </div>
  </div>
</div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        {/* Content Cards */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <P className="text-xl font-medium text-gray-800 mb-8">
            If you take a step back and look at software development skills from a
            broader perspective, you'll realize that it really is about solving
            complex problems.
          </P>

          <P>
            It's about designing operating systems, maintaining bookkeeping
            software systems, or fixing bugs that seem impossible to crack.
          </P>

          <P>
            Sooner or later in their careers,{" "}
            <LinkText href="#" text="software developers" /> will come across a
            complex issue that tests their limits.
          </P>

          <P>
            How a developer handles a problem will directly affect your company
            and the project they're working on. The ripple effects can be
            significant.
          </P>

          <P>
            If you're{" "}
            <LinkText href="#" text="putting together an engineering team" />,
            look for developers who can challenge themselves to solve complex
            problems, as one of the crucial programmer soft skills. Seek out
            those who motivate themselves to think creatively and come up with
            unorthodox approaches.
          </P>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-500 mb-6">
            <P className="mb-0 font-medium text-gray-800">
              Critical thinkers will be aware of the problem they're facing and
              understand that it has multiple possible solutions. They will
              assess those solutions systematically and proceed with selecting
              the one that will work the best. Therefore, problem-solving and
              critical thinking are essential soft skills for software engineers.
            </P>
          </div>
        </div>

        {/* Key Skills Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Essential Problem-Solving Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <IconCard
              icon={Lightbulb}
              title="Creative Thinking"
              description="Ability to approach problems from unique angles and develop innovative solutions."
            />
            <IconCard
              icon={Target}
              title="Critical Analysis"
              description="Systematic evaluation of problems and potential solutions before implementation."
            />
            <IconCard
              icon={Users}
              title="Team Collaboration"
              description="Working effectively with others to solve complex technical challenges."
            />
            <IconCard
              icon={Code}
              title="Technical Expertise"
              description="Deep understanding of tools, frameworks, and best practices."
            />
            <IconCard
              icon={CheckCircle}
              title="Solution Validation"
              description="Testing and verifying that solutions actually solve the intended problems."
            />
            <IconCard
              icon={Brain}
              title="Adaptability"
              description="Flexibility to adjust approaches when initial solutions don't work as expected."
            />
          </div>
        </div>

          {/* Inserted Image with Hover Animation */}
          <div className="mb-6 flex justify-center">
          <div className="overflow-hidden rounded-xl shadow-2xl">
           <Image
           src="/problem solving.png" // 👈 put your image inside public folder
          alt="Problem Solving"
          className="rounded-xl transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl"
          width={850}
          height={650}
         />
      </div>
</div>

       
      </div>
    </div>
  );
}
