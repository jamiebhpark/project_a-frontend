// app/boards/[topic]/new/page.tsx
"use client";
import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import LeftSidebar from "../../../components/LeftSidebar";

const postTypes = ["Text", "Image & Video", "Link"];

export default function WritePostPage() {
  const params = useParams();
  const topic = params?.topic ?? "unknown";
  const router = useRouter();

  const [activeType, setActiveType] = useState("Text");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 구현 시 API 호출 후 생성된 postId로 리다이렉트합니다.
    const newPostId = 999;
    router.push(`/posts/${newPostId}`);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4">
        {/* 좌측 사이드바 */}
        <aside className="hidden md:block">
          <LeftSidebar />
        </aside>
        {/* 글쓰기 폼 영역 */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-4">{topic} 게시판 - 글쓰기</h1>
          {/* Post Type 탭 */}
          <div className="flex space-x-4 border-b pb-2">
            {postTypes.map((type) => (
              <button
                key={type}
                className={`px-4 py-2 text-lg font-medium transition border-b-2 ${
                  activeType === type
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-600 border-transparent hover:border-gray-300"
                }`}
                onClick={() => setActiveType(type)}
              >
                {type}
              </button>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium mb-2">제목</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 border rounded"
                placeholder="제목을 입력하세요"
                required
              />
            </div>
            {activeType === "Text" && (
              <div>
                <label className="block text-lg font-medium mb-2">내용</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full p-3 border rounded h-64"
                  placeholder="내용을 입력하세요"
                  required
                />
              </div>
            )}
            {activeType === "Image & Video" && (
              <div>
                <label className="block text-lg font-medium mb-2">
                  미디어 URL
                </label>
                <input
                  type="url"
                  value={mediaUrl}
                  onChange={(e) => setMediaUrl(e.target.value)}
                  className="w-full p-3 border rounded"
                  placeholder="이미지 또는 동영상 URL을 입력하세요"
                  required
                />
              </div>
            )}
            {activeType === "Link" && (
              <div>
                <label className="block text-lg font-medium mb-2">
                  링크 URL
                </label>
                <input
                  type="url"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  className="w-full p-3 border rounded"
                  placeholder="링크 URL을 입력하세요"
                  required
                />
              </div>
            )}
            {/* 버튼 그룹 */}
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => alert(`미리보기:\n제목: ${title}\n내용: ${content}`)}
                className="px-4 py-2 border rounded hover:bg-gray-200 transition"
              >
                Preview
              </button>
              <button
                type="button"
                onClick={() => alert("Draft saved (예시)")}
                className="px-4 py-2 border rounded hover:bg-gray-200 transition"
              >
                Save Draft
              </button>
              <button
                type="button"
                onClick={() => router.back()}
                className="px-4 py-2 border rounded hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition ml-auto"
              >
                게시글 등록
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
