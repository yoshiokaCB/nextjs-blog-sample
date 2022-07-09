import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostsData = () => {
  const fileName = fs.readdirSync(postsDirectory);
  const allPostsData = fileName.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData;
};

export const getAllPostIds = () => {
  const fileName = fs.readdirSync(postsDirectory);
  return fileName.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
};

export const getPostData = async (id) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContents);
  const blogContent = await remark().use(html).process(matterResult.content);
  const blogContentHTML = blogContent.toString();
  return {
    id,
    blogContentHTML,
    ...matterResult.data,
  };
};
