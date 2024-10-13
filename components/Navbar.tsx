"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "主页", path: "/" },
  { label: "文章", path: "/posts" },
  { label: "友链", path: "/friends" },
  { label: "关于", path: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-end items-center h-16 space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
                pathname === item.path
                  ? "border-blue-500 text-blue-500 dark:text-blue-400"
                  : "border-transparent text-foreground hover:text-blue-500 dark:hover:text-blue-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
