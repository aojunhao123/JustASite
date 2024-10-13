"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // 避免服务器端渲染的问题

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div
      className="flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 w-16 h-8 cursor-pointer relative"
      onClick={toggleTheme}
      onKeyDown={(e) => e.key === "Enter" && toggleTheme()}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle Theme"
      tabIndex={0}
    >
      {/* 滑块 */}
      <motion.div
        className="absolute flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-gray-800 shadow-md"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        animate={{ x: isDark ? 32 : 0 }} // 计算滑动距离：容器宽度64px - 滑块宽度24px - padding左右各4px = 32px
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Moon size={14} className="text-blue-400" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Sun size={14} className="text-yellow-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 左侧太阳图标 */}
      <div className="absolute left-2 flex items-center">
        <Sun size={14} className="text-yellow-500 opacity-60" />
      </div>

      {/* 右侧月亮图标 */}
      <div className="absolute right-2 flex items-center">
        <Moon size={14} className="text-blue-400 opacity-60" />
      </div>
    </div>
  );
}
