import Link from "next/link";
import * as motion from "framer-motion/client";

interface BlogPostPreviewProps {
  title: string;
  date: string;
  slug: string;
}

export default function BlogPostPreview({
  title,
  date,
  slug,
}: BlogPostPreviewProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link
        href={`/blog/${slug}`}
        className="block mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{date}</p>
      </Link>
    </motion.div>
  );
}
