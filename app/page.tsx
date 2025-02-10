// app/page.tsx
"use client";
import React from "react";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import MiddleContent from "./components/MiddleContent";
import RightSidebar from "./components/RightSidebar";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto p-4">
        <div className="hidden md:grid grid-cols-[200px_1fr_200px] gap-4">
          {/* 좌측 사이드바 */}
          <aside>
            <LeftSidebar />
          </aside>
          {/* 중앙 콘텐츠 */}
          <section>
            <MiddleContent />
          </section>
          {/* 우측 사이드바 */}
          <aside>
            <RightSidebar />
          </aside>
        </div>
        {/* 모바일: 사이드바 없이 중앙 콘텐츠 전폭 */}
        <div className="md:hidden">
          <MiddleContent />
        </div>
      </main>
    </>
  );
}
