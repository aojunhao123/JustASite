import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import BlogPostPreview from "@/components/BlogPostPreview";
import ParticlesBackground from "@/components/ParticlesBackground";
import AnimatedAvatar from "@/components/AnimatedAvatar";
import * as motion from "framer-motion/client";

const skills = [
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
];

const recentPosts = [
  {
    title: "React 18 新特性解析",
    date: "2023-03-15",
    slug: "react-18-features",
  },
  {
    title: "使用 Next.js 13 构建现代应用",
    date: "2023-04-02",
    slug: "nextjs-13-modern-apps",
  },
  {
    title: "TypeScript 高级技巧",
    date: "2023-04-20",
    slug: "typescript-advanced-tips",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen  from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white overflow-hidden transition-colors duration-300">
      <ParticlesBackground />
      <motion.main
        className="container mx-auto px-4 py-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex flex-col items-center space-y-8"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <AnimatedAvatar
              src="/profile-picture.jpeg"
              alt="Your Name"
              size={192}
            />
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold text-center"
          >
            你的名字
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-center max-w-2xl"
          >
            欢迎来到我的个人博客！我是一名热爱技术和创新的软件工程师。在这里，我分享我的编程经验、项目心得和技术见解。
          </motion.p>
          <motion.div variants={itemVariants} className="flex space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-gray-300 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-gray-300 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-gray-300 transition-colors"
            >
              <FaLinkedin />
            </a>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
              >
                <skill.icon className="text-4xl mb-2" />
                <span className="text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="w-full max-w-2xl mt-12"
          >
            <h2 className="text-2xl font-bold mb-4">最新博客文章</h2>
            {recentPosts.map((post) => (
              <BlogPostPreview key={post.slug} {...post} />
            ))}
          </motion.div>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            查看更多博客文章
          </motion.button>
        </motion.div>
      </motion.main>
    </div>
  );
}
