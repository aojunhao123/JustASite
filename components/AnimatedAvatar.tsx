"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedAvatarProps {
  src: string;
  alt: string;
  size?: number;
}

export default function AnimatedAvatar({
  src,
  alt,
  size = 128,
}: AnimatedAvatarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="relative group">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setShowInfo(!showInfo)}
      >
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full blur-md transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
        <motion.div
          className="relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg"
          animate={{
            borderColor: isHovered ? "rgb(59, 130, 246)" : "rgb(255, 255, 255)",
          }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            className="rounded-full transition-transform duration-300 group-hover:scale-110"
          />
        </motion.div>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center"
            >
              <span className="text-white text-sm font-semibold">
                Click for info
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-2">Your Name</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Software Engineer | React Enthusiast
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
