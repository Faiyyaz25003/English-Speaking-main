
'use client';
import React from "react";
import Image from "next/image";
import {
  MessageSquare,
  Users,
  Globe,
  Mail,
  ThumbsUp,
  FileText,
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

export default function Communication() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 rounded-4xl">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-4xl mx-auto px-6 py-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
              <MessageSquare className="w-12 h-12 text-white" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3 rounded-2xl">
              Communication Skills
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <P>
            Whether a developer has a full-time role or works remotely, they
            should be able to communicate efficiently with other people. Other
            people include users, project managers, or team members.
          </P>

          <P>
            Especially if your company allows remote work, you have to ensure
            that the developer possesses the skills to speak to others in
            different situations or settings.
          </P>

          <P>
            They have to know how to communicate with people from all
            backgrounds and cultures.
          </P>

          <P>
            It's also important for a developer to understand what they say and
            how they say it can have an impact on what people feel about them.
          </P>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-500 mb-6">
            <P className="mb-0 font-medium text-gray-800">
              For example, let's say that a developer disagrees with how their
              client wants to proceed with a certain project.
              <br />
              <br />
              ❌ Instead of saying:{" "}
              <span className="italic">
                "I am the developer, and this is how I do things"
              </span>
              <br />
              ✅ They should say:{" "}
              <span className="italic">
                "Based on my experience, I think we could implement your idea in
                a much better way."
              </span>
            </P>
          </div>

          <P>
            And it doesn't mean that they only have to have good spoken
            communication skills. We live in a world of{" "}
            <LinkText href="#" text="Slack, email, and instant messaging" />,
            so developer soft skills regarding communication address online
            communication as well.
          </P>

          <P>
            Many times, their work will demand developers to interact using{" "}
            <span className="font-semibold">written communication</span>.
            Concise written skills are crucial as soft skills for programmers
            since it means they have the ability to put their thoughts in
            writing precisely.
          </P>

          <P>
            This helps them to state their opinion, share an idea, or write a
            report — all in a polite manner.
          </P>
        </div>

        {/* Key Skills Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Essential Communication Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <IconCard
              icon={Users}
              title="Active Listening"
              description="Understanding others before responding builds trust and stronger collaboration."
            />
            <IconCard
              icon={Globe}
              title="Cross-Cultural Skills"
              description="Ability to communicate respectfully with people from diverse backgrounds."
            />
            <IconCard
              icon={MessageSquare}
              title="Polite Disagreement"
              description="Disagreeing professionally while respecting client or teammate perspectives."
            />
            <IconCard
              icon={Mail}
              title="Written Clarity"
              description="Expressing ideas concisely in reports, emails, and instant messages."
            />
            <IconCard
              icon={FileText}
              title="Documentation"
              description="Clear and structured documentation helps others understand work easily."
            />
            <IconCard
              icon={ThumbsUp}
              title="Positive Tone"
              description="Maintaining a constructive, encouraging tone in all communications."
            />
          </div>
        </div>

<div className="mb-6 flex justify-center">
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <Image
               src="/Communication.jpg"   // ✅ your uploaded image
               alt="Communication Skills"
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
