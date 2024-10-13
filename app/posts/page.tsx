import Link from "next/link";

// 这个函数用于获取所有文章的数据，您需要根据自己的数据源进行实现
async function getAllPosts() {
  // 这里应该是从您的数据源获取所有文章数据的逻辑
  // 现在我们只返回一些模拟的数据
  return [
    { slug: "my-first-post", title: "My First Post", date: "2023-01-01" },
    { slug: "another-post", title: "Another Post", date: "2023-01-15" },
  ];
}

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-6">博客文章</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/posts/${post.slug}`}
              className="block hover:bg-gray-100 dark:hover:bg-gray-800 p-4 rounded"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-500">
                {new Date(post.date).toLocaleDateString()}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
