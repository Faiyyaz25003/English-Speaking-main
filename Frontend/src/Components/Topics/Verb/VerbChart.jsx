"use client";
import React from "react";

export default function VerbsChart() {
  const columns = [
    [
      "Is, Am & Are",
      "Was & Were",
      "Has, Have & Had",
      "Do, Does & Did",
      "Will, Shall",
      "Will be & Will have",
      "Should, Must",
      "Should + be/have",
      "Is/Am/Are + to",
      "Has/Have + to",
      "Was/Were + to",
      "Had + to",
    ],
    [
      "Will have to",
      "Would have to",
      "Must + be/have",
      "Can, Could",
      "Can be & Can have",
      "Could be & Could have",
      "Used to & Would",
      "Would be & Would have",
      "May & Might",
      "May be & May have",
      "Might be & Might have",
      "Should have had",
    ],
    [
      "Must have had",
      "Could have had",
      "May/Might have had",
      "Would have had",
      "Has been, Have been",
      "Had been, Will have been",
      "Should have been",
      "Could have been",
      "Would have been",
      "May have been",
      "Might have been",
    ],
  ];

  const columnTitles = ["Basic & Present Forms", "Modal & Future Forms", "Perfect & Past Forms"];
  const columnColors = ["bg-blue-100", "bg-green-100", "bg-purple-100"];
  const headerColors = [
    "bg-gradient-to-r from-blue-500 to-blue-600",
    "bg-gradient-to-r from-green-500 to-green-600",
    "bg-gradient-to-r from-purple-500 to-purple-600",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1
          align="center"
          className="text-3xl sm:text-4xl text-purple-600 mb-6 font-bold"
        >
          Verbs in English Grammar
        </h1>

        {/* Desktop/Tablet Table */}
        <div className="hidden md:block bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  {columnTitles.map((title, index) => (
                    <th
                      key={index}
                      className={`${headerColors[index]} text-white px-6 py-2 text-left font-semibold text-base border-r border-white/20 last:border-r-0`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-white/80"></div>
                        {title}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {Array.from({ length: 12 }).map((_, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="hover:bg-gray-50 transition-colors duration-150 group"
                  >
                    {columns.map((column, colIndex) => (
                      <td
                        key={colIndex}
                        className={`px-6 py-2 border-r border-gray-100 last:border-r-0 ${columnColors[colIndex]} group-hover:bg-opacity-80 transition-all duration-150`}
                      >
                        <div className="font-medium text-gray-800 hover:text-gray-900 transition-colors">
                          {column[rowIndex] || ""}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Layout (Cards) */}
        <div className="md:hidden space-y-6">
          {columns.map((column, colIndex) => (
            <div
              key={colIndex}
              className={`rounded-xl shadow-md overflow-hidden border border-gray-200 ${columnColors[colIndex]}`}
            >
              <div
                className={`${headerColors[colIndex]} text-white px-4 py-3 font-semibold text-lg`}
              >
                {columnTitles[colIndex]}
              </div>
              <ul className="divide-y divide-gray-200">
                {column.map((item, idx) => (
                  <li key={idx} className="px-4 py-2 text-gray-800 font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
