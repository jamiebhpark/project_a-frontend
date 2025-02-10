// app/signin/page.tsx
"use client";
import React from "react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="max-w-md mx-auto p-8 space-y-8 bg-white">
      <h1 className="text-3xl font-bold text-center text-gray-800">Sign In</h1>
      <div className="flex flex-col space-y-4">
        <button className="flex items-center justify-center space-x-3 border p-3 rounded hover:bg-gray-100 transition">
          <img src="/apple-logo.svg" alt="Apple" className="w-6 h-6" />
          <span className="text-gray-800">Sign in with Apple</span>
        </button>
        <button className="flex items-center justify-center space-x-3 border p-3 rounded hover:bg-gray-100 transition">
          <img src="/google-logo.svg" alt="Google" className="w-6 h-6" />
          <span className="text-gray-800">Sign in with Google</span>
        </button>
      </div>
      <div className="text-center">
        <Link href="/signup" className="text-blue-600 hover:underline">
          Create an account
        </Link>
      </div>
    </div>
  );
}
