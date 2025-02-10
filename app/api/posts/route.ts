// app/api/posts/route.ts
import { NextResponse } from 'next/server';

interface Post {
  id: number;
  title: string;
  views: number;
  likes: number;
  dislikes: number;
}

export async function GET() {
  const posts: Post[] = [
    { id: 1, title: '첫 번째 게시물', views: 100, likes: 20, dislikes: 3 },
    { id: 2, title: '두 번째 게시물', views: 200, likes: 50, dislikes: 5 },
    { id: 3, title: '세 번째 게시물', views: 300, likes: 80, dislikes: 2 },
  ];
  return NextResponse.json(posts);
}
