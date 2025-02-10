// components/BoardPostList.tsx
"use client";
import React from "react";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  createdAt: string;
  views: number;
  up_votes: number;   // 변경
  down_votes: number; // 변경
}

interface BoardPostListProps {
  posts: Post[];
  showTimestamp?: boolean;
  isHot?: boolean;
}

const BoardPostList: React.FC<BoardPostListProps> = ({
  posts,
  showTimestamp,
  isHot,
}) => {
  return (
    <div className="space-y-2">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex justify-between items-center p-4 border-b hover:bg-gray-50 transition"
        >
          <div className="flex items-center">
            <span className={`font-medium ${isHot ? "text-red-600" : "text-gray-800"}`}>
              {post.title}
            </span>
          </div>
          <div className="text-sm text-gray-500">
            {post.views} views · {post.up_votes} up_vote · {post.down_votes} down_vote
            {showTimestamp && <span className="ml-2">{post.createdAt}</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoardPostList;
