// components/ThemeToggle.tsx
"use client";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // localStorage에서 테마 설정을 읽어옵니다.
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      // 저장된 값이 없으면 시스템 기본값 사용
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
        setIsDark(true);
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
        localStorage.setItem("theme", "light");
      }
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newValue = !prev;
      if (newValue) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newValue;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
