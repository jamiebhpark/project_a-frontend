// components/Header.tsx
"use client";
import React from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm py-4 px-6">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* 로고 */}
        <Link
          href="/"
          className="text-3xl font-bold text-blue-600 dark:text-blue-400 transition-colors"
        >
          Project_A
        </Link>
        {/* 검색창 */}
        <div className="relative flex-grow mx-6">
          <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm dark:bg-gray-700 dark:text-gray-100"
          />
        </div>
        {/* Sign-In 및 기타 버튼 */}
        <div className="flex items-center space-x-4">
          <Link href="/signin">
            <button className="px-4 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded hover:bg-blue-50 dark:hover:bg-blue-900 transition">
              Sign In
            </button>
          </Link>
          <ThemeToggle />
          <button className="px-4 py-2 border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-500 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            More
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
