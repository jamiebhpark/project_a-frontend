// components/BoardPostCard.tsx
"use client";
import React from "react";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  createdAt: string;
  views: number;
  up_votes: number;   // 변경: likes -> up_votes
  down_votes: number; // 변경: dislikes -> down_votes
}

interface BoardPostCardProps {
  post: Post;
}

const BoardPostCard: React.FC<BoardPostCardProps> = ({ post }) => {
  return (
    <div className="bg-white border rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
      <h2 className="text-3xl font-bold text-gray-800">{post.title}</h2>
      <p className="mt-3 text-gray-600">{post.excerpt}</p>
      <div className="mt-4 flex justify-between text-sm text-gray-500">
        <span>
          {post.author} – {post.createdAt}
        </span>
        <span>
          {post.views} views · {post.up_votes} up_vote · {post.down_votes} down_vote
        </span>
      </div>
    </div>
  );
};

export default BoardPostCard;
