// src/lib/markdown.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';

const contentDirectory = path.join(process.cwd(), 'content');

interface PostData {
    slug: string;
    title: string;
    date: Date;
    contentHtml: string;
    fullPath: string;  // Store the full path
}

interface FolderData {
    name: string;
    posts: PostData[];
}

function slugify(name: string): string {
    return name.replace(/^\d+\.\s*/, '').replace(/\s+/g, '-').toLowerCase();
}

export function getAllPosts(directory = contentDirectory, relativePath = ''): FolderData[] {
    const dirEntries = fs.readdirSync(directory, { withFileTypes: true });
    const folders: FolderData[] = [];

    dirEntries.forEach((entry) => {
        if (entry.isDirectory()) {
            const folderName = entry.name.replace(/^\d+\.\s*/, ''); // Remove leading numbers and dot
            const folderSlug = slugify(folderName);
            const folderPath = path.join(directory, entry.name);
            const folderPosts = getAllPosts(folderPath, path.join(relativePath, folderSlug));
            folders.push(...folderPosts);
        } else if (entry.isFile() && entry.name.endsWith('.md')) {
            const filePath = path.join(directory, entry.name);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const matterResult = matter(fileContents);

            const processedContent = remark()
                .use(remarkParse)
                .use(remarkRehype, { allowDangerousHtml: true })
                .use(rehypeRaw)
                .use(rehypeStringify)
                .processSync(matterResult.content)
                .toString();

            const postData: PostData = {
                slug: path.join(relativePath, slugify(entry.name.replace(/\.md$/, ''))).replace(/\\/g, '/'),
                title: matterResult.data.title || entry.name.replace(/\.md$/, '').replace(/^\d+\.\s*/, ''),
                date: new Date(matterResult.data.date || Date.now()),
                contentHtml: processedContent,
                fullPath: filePath,  // Store the full path
            };

            const folderIndex = folders.findIndex((folder) => folder.name === relativePath);
            if (folderIndex === -1) {
                folders.push({ name: relativePath, posts: [postData] });
            } else {
                folders[folderIndex].posts.push(postData);
            }
        }
    });

    return folders;
}

export async function getPostData(slug: string) {
    const allFolders = getAllPosts();
    let fullPath = '';

    allFolders.forEach((folder) => {
        folder.posts.forEach((post) => {
            if (post.slug === slug) {
                fullPath = post.fullPath;
            }
        });
    });

    if (!fullPath) {
        throw new Error(`Post with slug ${slug} not found`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await remark()
        .use(remarkParse)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeStringify)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        contentHtml,
        ...matterResult.data,
    };
}