// components/BoardFilters.tsx
"use client";
import React, { useState } from "react";

const tabs = ["Top", "New", "Hot"];

interface BoardFiltersProps {
  onChange: (tab: string) => void;
}

const BoardFilters: React.FC<BoardFiltersProps> = ({ onChange }) => {
  const [activeTab, setActiveTab] = useState("Top");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onChange(tab);
  };

  return (
    <div className="flex space-x-6 border-b pb-3 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 text-lg font-medium transition border-b-2 ${
            activeTab === tab
              ? "text-blue-600 border-blue-600"
              : "text-gray-600 border-transparent hover:border-gray-300"
          }`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default BoardFilters;
