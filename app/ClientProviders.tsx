// app/ClientProviders.tsx
"use client"; // 클라이언트 컴포넌트임을 명시

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// 클라이언트에서만 생성하도록 모듈 스코프에 생성
const queryClient = new QueryClient();

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
