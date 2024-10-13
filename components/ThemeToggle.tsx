"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";
import { motion } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <motion.div
      className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 rounded-full p-1"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {["light", "dark", "system"].map((t) => (
        <motion.button
          key={t}
          onClick={() => setTheme(t)}
          className={`p-2 rounded-full transition-colors duration-300 ${
            theme === t
              ? "bg-white dark:bg-gray-800 shadow-md"
              : "text-gray-500 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          layout
          transition={spring}
        >
          {t === "light" && (
            <Sun
              size={18}
              className={theme === "light" ? "text-yellow-500" : ""}
            />
          )}
          {t === "dark" && (
            <Moon
              size={18}
              className={theme === "dark" ? "text-blue-400" : ""}
            />
          )}
          {t === "system" && (
            <Laptop
              size={18}
              className={theme === "system" ? "text-green-500" : ""}
            />
          )}
        </motion.button>
      ))}
    </motion.div>
  );
}
