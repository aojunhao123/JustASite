import { notFound } from "next/navigation";
import type { Metadata } from "next";

// 这个函数用于生成静态参数，如果您的博客文章是静态生成的
export async function generateStaticParams() {
  // 这里应该返回一个包含所有可能的 slug 的数组
  // 例如: return [{ slug: 'my-first-post' }, { slug: 'another-post' }]
  return [];
}

// 这个函数用于生成页面的元数据
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // 获取文章数据
  const post = await getPostData(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

// 这个函数用于获取文章数据，您需要根据自己的数据源进行实现
async function getPostData(slug: string) {
  // 这里应该是从您的数据源（如 CMS、数据库或文件系统）获取文章数据的逻辑
  // 现在我们只返回一个模拟的数据
  return {
    slug,
    title: `Post ${slug}`,
    content: `This is the content of post ${slug}`,
    date: new Date().toISOString(),
    excerpt: `This is an excerpt for post ${slug}`,
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  if (!post) notFound();

  return (
    <article className="max-w-2xl mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-4">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <div className="prose dark:prose-invert">{post.content}</div>
    </article>
  );
}
