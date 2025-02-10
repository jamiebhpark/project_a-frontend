// components/RightSidebar.tsx
"use client";
import React from "react";
import { FaCrown } from "react-icons/fa";

interface RankingPost {
  id: number;
  title: string;
  link: string;
}

const rankingPosts: RankingPost[] = [
  { id: 1, title: "Top Post Title 1", link: "#" },
  { id: 2, title: "Top Post Title 2", link: "#" },
  { id: 3, title: "Top Post Title 3", link: "#" },
];

const hotTopics = [
  { id: 1, name: "Gaming" },
  { id: 2, name: "Technology" },
  { id: 3, name: "Sports" },
];

const RightSidebar = () => {
  return (
    <div className="p-4 bg-gray-50 h-full overflow-y-auto space-y-6">
      {/* Top Rankings */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
          <FaCrown className="mr-2 text-yellow-500" /> Top Rankings
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          {rankingPosts.map((post) => (
            <li key={post.id}>
              <a
                href={post.link}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {post.title}
              </a>
            </li>
          ))}
        </ol>
      </div>

      {/* Hot Topics */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          Hot Topics
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          {hotTopics.map((topic) => (
            <li
              key={topic.id}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {topic.name}
            </li>
          ))}
        </ol>
        <div className="mt-2">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            See more
          </a>
        </div>
      </div>

      {/* Advertisement Section */}
      <div className="bg-gray-200 border rounded-lg p-4 flex items-center justify-center">
        <span className="text-lg text-gray-600">Advertisement</span>
      </div>
    </div>
  );
};

export default RightSidebar;
