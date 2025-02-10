// components/BoardBanner.tsx
"use client";
import React from "react";

interface BoardBannerProps {
  topic: string;
  description: string;
}

const BoardBanner: React.FC<BoardBannerProps> = ({ topic, description }) => {
  // 토픽명에 '게시판'이 없으면 붙여서 표시
  const displayTopic = topic.includes("게시판") ? topic : `${topic} 게시판`;
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8 text-white">
      <h1 className="text-5xl font-bold">{displayTopic}</h1>
      <p className="mt-4 text-xl">{description}</p>
    </div>
  );
};

export default BoardBanner;
