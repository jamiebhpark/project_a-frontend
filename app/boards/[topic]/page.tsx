// app/boards/[topic]/page.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import BoardBanner from "../../components/BoardBanner";
import BoardFilters from "../../components/BoardFilters";
import BoardPostCard from "../../components/BoardPostCard";
import BoardPostList from "../../components/BoardPostList";
import LeftSidebar from "../../components/LeftSidebar";

interface BoardPageProps {
  params: Promise<{ topic: string }>;
}

const samplePosts = [
  {
    id: 1,
    title: "Post 1 Title",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "User1",
    createdAt: "2023-02-20",
    views: 100,
    up_votes: 10,
    down_votes: 1,
  },
  {
    id: 2,
    title: "Post 2 Title",
    excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "User2",
    createdAt: "2023-02-21",
    views: 150,
    up_votes: 20,
    down_votes: 2,
  },
  {
    id: 3,
    title: "Post 3 Title",
    excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    author: "User3",
    createdAt: "2023-02-22",
    views: 200,
    up_votes: 30,
    down_votes: 3,
  },
  {
    id: 4,
    title: "Post 4 Title",
    excerpt: "Additional post content goes here.",
    author: "User4",
    createdAt: "2023-02-23",
    views: 80,
    up_votes: 5,
    down_votes: 0,
  },
  {
    id: 5,
    title: "Post 5 Title",
    excerpt: "More content to display in the list.",
    author: "User5",
    createdAt: "2023-02-24",
    views: 120,
    up_votes: 15,
    down_votes: 2,
  },
];

export default function BoardPage({ params }: BoardPageProps) {
  const resolvedParams = React.use(params);
  const { topic } = resolvedParams;
  const topicCapitalized = topic.charAt(0).toUpperCase() + topic.slice(1);

  const [activeTab, setActiveTab] = useState("Top");

  const renderContent = () => {
    if (activeTab === "Top") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {samplePosts.slice(0, 3).map((post, index) =>
            index === 0 ? (
              <Link key={post.id} href={`/posts/${post.id}`}>
                <div>
                  <BoardPostCard post={post} />
                </div>
              </Link>
            ) : (
              <BoardPostCard key={post.id} post={post} />
            )
          )}
        </div>
      );
    } else if (activeTab === "All") {
      return <BoardPostList posts={samplePosts} />;
    } else if (activeTab === "New") {
      return <BoardPostList posts={samplePosts} showTimestamp />;
    } else if (activeTab === "Hot") {
      return <BoardPostList posts={samplePosts} isHot />;
    }
    return null;
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4">
        {/* 좌측 사이드바 */}
        <aside className="hidden md:block">
          <LeftSidebar />
        </aside>
        {/* 메인 콘텐츠 영역 */}
        <div className="space-y-6">
          <BoardBanner
            topic={topicCapitalized}
            description={`Latest trends and news in ${topicCapitalized}`}
          />
          <div className="flex items-center justify-between">
            <BoardFilters onChange={(tab) => setActiveTab(tab)} />
            <Link href={`/boards/${topic.toLowerCase()}/new`}>
              <button className="px-4 py-2 border rounded bg-blue-600 text-white hover:bg-blue-700 transition">
                New Post
              </button>
            </Link>
          </div>
          {renderContent()}
          <div className="flex justify-center space-x-4 mt-6">
            <button className="px-4 py-2 border rounded hover:bg-gray-200">
              Prev
            </button>
            <button className="px-4 py-2 border rounded hover:bg-gray-200">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
