// components/PostCard.tsx
import React from 'react';

interface Post {
  id: number;
  title: string;
  views: number;
  likes: number;
  dislikes: number;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="border rounded p-4 mb-4 shadow hover:shadow-md transition">
      <h2 className="text-2xl font-semibold">{post.title}</h2>
      <div className="mt-2 flex space-x-6 text-gray-700">
        <span>조회수: {post.views}</span>
        <span>좋아요: {post.likes}</span>
        <span>싫어요: {post.dislikes}</span>
      </div>
    </div>
  );
};

export default PostCard;
