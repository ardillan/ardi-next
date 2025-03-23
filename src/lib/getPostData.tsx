import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";

import { IMarkDownData } from "@/interfaces/IMarkDownData";

import transformImgSrc from "./transform-img-src";

const postsDirectory = path.join(process.cwd(), "content/posts/");

export function getSortedPostsData(size?: number): IMarkDownData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const postsSize = size ?? fileNames.length;
  const blogPosts: IMarkDownData[] = [];

  const processFile = (fullPath: string, id: string) => {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    blogPosts.push({
      id,
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      type: matterResult.data.type,
      description: matterResult.data.description,
      featuredImage: matterResult.data.featuredImage,
      category: matterResult.data.category,
    });
  };

  fileNames.forEach((fileName) => {
    if (fileName === ".DS_Store") return;

    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      const subFiles = fs.readdirSync(fullPath);
      subFiles.forEach((subFileName) => {
        const fullPathWithDirectory = path.join(fullPath, subFileName);
        const idWithSubdirectory = `${id}/${subFileName.replace(/\.md$/, "")}`;
        processFile(fullPathWithDirectory, idWithSubdirectory);
      });
    } else if (stat.isFile()) {
      processFile(fullPath, id);
    }
  });

  return blogPosts
    .sort((a, b) => ((a.date ?? "") < (b.date ?? "") ? 1 : -1))
    .slice(0, postsSize);
}

export async function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName: string) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getAllPostIdsAndCat() {
  const categories = fs.readdirSync(postsDirectory); // Leer las carpetas (categorías)

  const allPostIds = categories.flatMap((category) => {
    const categoryPath = path.join(postsDirectory, category);
    const fileNames = fs.readdirSync(categoryPath); // Leer los archivos dentro de cada categoría

    return fileNames.map((fileName: string) => {
      return {
        params: {
          category: category,
          id: fileName.replace(/\.md$/, ""),
        },
      };
    });
  });

  return allPostIds;
}

export const buildFilePath = (id: string, category?: string) => {
  if (!category) {
    return path.join(postsDirectory, `${decodeURIComponent(id)}.md`);
  } else {
    return path.join(postsDirectory, category, `${decodeURIComponent(id)}.md`);
  }
};

export async function getPostData(
  id: string,
  category?: string
): Promise<IMarkDownData> {
  const fullPath = buildFilePath(id, category);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(transformImgSrc, {
      id: category ? category.concat(`/${id}`) : id,
      imagesDirectory: "/posts",
    })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  const postID = category ? `${category}/${id}` : id;

  const postData: IMarkDownData = {
    id: postID,
    contentHtml,
    title: matterResult.data.title,
    subtitle: matterResult.data.subtitle,
    date: matterResult.data.date,
    type: matterResult.data.type,
    description: matterResult.data.description,
    featuredImage: matterResult.data.featuredImage,
    category: matterResult.data.category,
  };

  return postData;
}
