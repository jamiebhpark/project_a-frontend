// components/MiddleContent.tsx
"use client";
import React from "react";

interface Post {
  id: number;
  title: string;
  content: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Rank 1 Post",
    content:
      "This is the top post content. It is designed to be very prominent and easy to read. The text size and spacing are optimized for excellent readability without scrolling.",
  },
  {
    id: 2,
    title: "Rank 2 Post",
    content:
      "This is the second post content. It provides concise and impactful information.",
  },
  {
    id: 3,
    title: "Rank 3 Post",
    content:
      "This is the third post content, offering additional insights and updates.",
  },
];

const MiddleContent = () => {
  return (
    <div className="space-y-8">
      {/* Rank 1 포스트 */}
      <div className="bg-white border rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          {posts[0].title}
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          {posts[0].content}
        </p>
      </div>

      {/* Rank 2, Rank 3, 광고: 3열 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border rounded-lg shadow p-6 flex flex-col">
          <h3 className="text-2xl font-semibold mb-2 text-gray-900">
            {posts[1].title}
          </h3>
          <p className="text-base text-gray-700 flex-grow">
            {posts[1].content}
          </p>
        </div>
        <div className="bg-white border rounded-lg shadow p-6 flex flex-col">
          <h3 className="text-2xl font-semibold mb-2 text-gray-900">
            {posts[2].title}
          </h3>
          <p className="text-base text-gray-700 flex-grow">
            {posts[2].content}
          </p>
        </div>
        <div className="bg-gray-200 border rounded-lg shadow p-6 flex items-center justify-center">
          <span className="text-lg text-gray-600">Advertisement</span>
        </div>
      </div>
    </div>
  );
};

export default MiddleContent;
