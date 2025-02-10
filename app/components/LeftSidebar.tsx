// components/LeftSidebar.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaHome, FaFire, FaLaptopCode, FaFilm, FaGamepad, FaQuestionCircle } from "react-icons/fa";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const LeftSidebar = () => {
  const [topicsOpen, setTopicsOpen] = useState(true);
  const [techOpen, setTechOpen] = useState(false);
  const [entOpen, setEntOpen] = useState(false);
  const [gameOpen, setGameOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const topics = [
    {
      name: "Technology",
      icon: <FaLaptopCode className="inline mr-1" />,
      subtopics: ["AI", "Gadgets", "Software"],
    },
    {
      name: "Entertainment",
      icon: <FaFilm className="inline mr-1" />,
      subtopics: ["Movies", "TV Shows", "Music"],
    },
    {
      name: "Gaming",
      icon: <FaGamepad className="inline mr-1" />,
      subtopics: ["PC", "Console", "Mobile"],
    },
  ];

  const resources = [
    { name: "About Project_A", icon: <FaQuestionCircle className="inline mr-1" /> },
    { name: "Advertise", icon: <FaQuestionCircle className="inline mr-1" /> },
    { name: "Help", icon: <FaQuestionCircle className="inline mr-1" /> },
    { name: "Careers", icon: <FaQuestionCircle className="inline mr-1" /> },
    { name: "Press", icon: <FaQuestionCircle className="inline mr-1" /> },
  ];

  return (
    <div className="p-4 bg-gray-50 h-full overflow-y-auto">
      {/* Primary 메뉴 */}
      <div className="space-y-2 mb-4">
        <Link href="/">
          <span className="text-left text-gray-800 hover:text-blue-600 transition flex items-center cursor-pointer">
            <FaHome className="mr-2" /> Home
          </span>
        </Link>
        <button className="w-full text-left text-gray-800 hover:text-blue-600 transition flex items-center">
          <FaFire className="mr-2" /> Popular
        </button>
      </div>

      <hr className="my-4 border-gray-300" />

      {/* Topics 섹션 */}
      <div>
        <button
          onClick={() => setTopicsOpen(!topicsOpen)}
          className="w-full flex items-center justify-between text-gray-800 hover:text-blue-600 transition font-semibold"
        >
          <span>Topics</span>
          {topicsOpen ? <FiChevronDown /> : <FiChevronRight />}
        </button>
        {topicsOpen && (
          <div className="mt-2 ml-4 space-y-3">
            {topics.map((topic, idx) => (
              <div key={idx}>
                <button
                  onClick={() => {
                    if (topic.name === "Technology") setTechOpen(!techOpen);
                    if (topic.name === "Entertainment") setEntOpen(!entOpen);
                    if (topic.name === "Gaming") setGameOpen(!gameOpen);
                  }}
                  className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 transition"
                >
                  <span>
                    {topic.icon}
                    {topic.name}
                  </span>
                  {((topic.name === "Technology" && techOpen) ||
                    (topic.name === "Entertainment" && entOpen) ||
                    (topic.name === "Gaming" && gameOpen)) ? (
                    <FiChevronDown />
                  ) : (
                    <FiChevronRight />
                  )}
                </button>
                {((topic.name === "Technology" && techOpen) ||
                  (topic.name === "Entertainment" && entOpen) ||
                  (topic.name === "Gaming" && gameOpen)) && (
                  <ul className="ml-6 mt-1 space-y-1 text-sm text-gray-600">
                    {topic.subtopics.map((sub, subIdx) => (
                      <li key={subIdx} className="hover:text-blue-600 transition">
                        <Link href={`/boards/${sub.toLowerCase()}`}>
                          <span className="cursor-pointer">{sub}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <hr className="my-4 border-gray-300" />

      {/* Resources 섹션 */}
      <div>
        <button
          onClick={() => setResourcesOpen(!resourcesOpen)}
          className="w-full flex items-center justify-between text-gray-800 hover:text-blue-600 transition font-semibold"
        >
          <span>Resources</span>
          {resourcesOpen ? <FiChevronDown /> : <FiChevronRight />}
        </button>
        {resourcesOpen && (
          <ul className="mt-2 ml-4 space-y-2 text-sm text-gray-700">
            {resources.map((item, idx) => (
              <li key={idx} className="flex items-center hover:text-blue-600 transition">
                {item.icon}
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <hr className="my-4 border-gray-300" />

      {/* Communities 섹션 */}
      <div className="space-y-2 mb-4">
        <button className="w-full text-left text-gray-800 hover:text-blue-600 transition">
          Best of Project_A
        </button>
        <button className="w-full text-left text-gray-800 hover:text-blue-600 transition">
          Topics
        </button>
      </div>

      <hr className="my-4 border-gray-300" />

      {/* Footer 링크 */}
      <div className="space-y-2 text-sm">
        <button className="w-full text-left text-gray-600 hover:text-blue-600 transition">
          Project_A Rules
        </button>
        <button className="w-full text-left text-gray-600 hover:text-blue-600 transition">
          Privacy Policy
        </button>
        <button className="w-full text-left text-gray-600 hover:text-blue-600 transition">
          User Agreement
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
