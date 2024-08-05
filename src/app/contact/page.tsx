// src/app/page.tsx
import { getAllPosts } from '@/lib/markdown';
import Link from 'next/link';

export default function HomePage() {
  const allFolders = getAllPosts();

  return (
    <div className="flex flex-col px-6 text-white">
      {allFolders.map((folder) => (
        <div key={folder.name} className="mb-3">
          {folder.name && (
            <h2 className="text-2xl tracking-widest uppercase text-white">{folder.name}</h2>
          )}
          <ul className="list-none list-inside">
            {folder.posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/${post.slug}`} className="text-orange hover:underline">
                  {post.title}
                </Link>
                &nbsp;&nbsp;
                <span className="text-sm text-gray-500">{post.date.toDateString()}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}