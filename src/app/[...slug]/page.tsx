// src/app/[...slug]/page.tsx
import { getPostData, getAllPosts } from '@/lib/markdown';
import Link from 'next/link';
import { format } from 'date-fns';

export async function generateStaticParams() {
    const allFolders = getAllPosts();
    return allFolders.flatMap((folder) =>
        folder.posts.map((post) => ({
            slug: post.slug.split('/'),
        }))
    );
}

export default async function PostPage({ params }: { params: { slug: string[] } }) {
    const slug = params.slug.join('/');
    const postData: any = await getPostData(slug);

    return (
        <div className='flex flex-col gap-3 px-6'>
            <Link href="/" className='text-orange hover:underline'>back</Link>
            <div className="flex flex-col">
                <h1 className='text-xl'>{postData.title}</h1>
                <p className="text-gray-500 text-sm lg:m-0 m-0">{format(new Date(postData.date), 'MMMM dd, yyyy')}</p>
                <div className='prose lg:prose-lg py-3' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </div>
        </div>
    );
}