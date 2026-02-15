/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import React from "react";

import Date from "@/appComponents/general/Date";
import { IMarkDownData } from "@/interfaces/IMarkDownData";
import { formatDate } from "@/lib/helpers";

import CustomImage from "./CustomImage";
import {
  postDate,
  postImage,
  postImageContainer,
  postsImagesContainer,
  postSubtitle,
  postTitle,
} from "./Post.css";

export type IDynamicPost = {
  allPostData?: IMarkDownData[];
};

export const PostsImages = ({
  allPostsData,
}: {
  allPostsData: IMarkDownData[];
}) => {
  return (
    <ul className={postsImagesContainer}>
      {allPostsData.map((post: IMarkDownData) => {
        const featuredImagePath = `/posts/${
          post.id
        }/${post?.featuredImage?.replace("./", "")}`;

        return (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`} className={postImageContainer}>
              <div style={{ position: "relative" }}>
                <CustomImage
                  showCaption={false}
                  className={postImage}
                  src={`${featuredImagePath}`}
                  alt="Imagen de cabecera"
                  width={120}
                  height={120}
                />
              </div>
              <div>
                <h3 className={postTitle}>{post.title}</h3>
                {post.date ? (
                  <time className={postDate} dateTime={post.date}>
                    {formatDate(post.date, "readable")}
                  </time>
                ) : null}
                {post.description && (
                  <p className={postSubtitle}>{post.description}</p>
                )}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export const PostsList = ({
  allPostsData,
}: {
  allPostsData: IMarkDownData[];
}) => {
  return (
    <ul>
      {allPostsData.map((post: IMarkDownData) => {
        return (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <span>{post.title}</span>
              {post.date && (
                <small>
                  <Date dateString={post.date} />
                </small>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const Posts = ({
  allPostsData,
  layout = "list",
}: {
  allPostsData: IMarkDownData[];
  layout: "list" | "images";
}) => {
  const dynamicPosts: { [key: string]: any } = {
    list: PostsList,
    images: PostsImages,
  };

  const DynamicPost = dynamicPosts[layout];

  return <DynamicPost allPostsData={allPostsData} />;
};

export default Posts;
