// app/posts/[postId]/page.tsx
import React from "react";
import VoteDistributionChart from "../.././components/VoteDistributionChart";
import PostMetricsChart from "../.././components/PostMetricsChart";

interface PostDetailPageProps {
  params: {
    postId: string;
  };
}

export default function PostDetailPage({ params }: PostDetailPageProps) {
  const { postId } = params;
  
  // 실제 데이터는 API 연동 시 가져옵니다.
  const post = {
    id: postId,
    title: "Example Post Title",
    content:
      "This is the detailed content of the post. It contains rich text, images, and more. (예시 내용)",
    author: "User1",
    createdAt: "2023-02-20",
    views: 300,
    up_votes: 50,
    down_votes: 2,
  };

  // 예시 metrics 데이터: 시간별로 views, up_votes, down_votes가 어떻게 변화했는지를 나타냅니다.
  const metricsData = [
    { time: "09:00", views: 100, up_votes: 10, down_votes: 1 },
    { time: "10:00", views: 150, up_votes: 20, down_votes: 2 },
    { time: "11:00", views: 200, up_votes: 30, down_votes: 2 },
    { time: "12:00", views: 250, up_votes: 40, down_votes: 3 },
    { time: "13:00", views: 300, up_votes: 50, down_votes: 4 },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-4 space-y-6 bg-white">
      {/* 게시글 기본 정보 */}
      <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
      <div className="text-sm text-gray-500">
        By {post.author} on {post.createdAt} · {post.views} views · {post.up_votes} up_vote · {post.down_votes} down_vote
      </div>
      <div className="mt-6">
        <p className="text-lg leading-relaxed text-gray-700">{post.content}</p>
      </div>
      {/* 투표 및 지표 차트 영역 */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Post Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 좌측: 투표 분포 원형 차트 */}
          <VoteDistributionChart up_votes={post.up_votes} down_votes={post.down_votes} />
          {/* 우측: 시간별 지표 선 그래프 */}
          <PostMetricsChart data={metricsData} />
        </div>
      </div>
    </div>
  );
}
