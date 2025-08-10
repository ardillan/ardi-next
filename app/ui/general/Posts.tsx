/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Date from "@/appComponents/general/Date";
import { IMarkDownData } from "@/interfaces/IMarkDownData";

import styles from "./Posts.module.css";

export type IDynamicPost = {
  allPostData?: IMarkDownData[];
};

export const PostsImages = ({
  allPostsData,
}: {
  allPostsData: IMarkDownData[];
}) => {
  return (
    <ul className={`${styles.default} ${styles.images}`}>
      {allPostsData.map((post: IMarkDownData) => {
        const featuredImagePath = `/posts/${
          post.id
        }/${post?.featuredImage?.replace("./", "")}`;

        return (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <div className={styles.image}>
                <Image
                  src={`${featuredImagePath}`}
                  alt="Imagen de cabecera"
                  width={100}
                  height={100}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    position: "relative",
                  }}
                />
              </div>
              <div className={styles.meta}>
                <p>{post.title}</p>
                {post.description && <small>{post.description}</small>}
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
    <ul className={`${styles.default} ${styles.list}`}>
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
  layout: string;
}) => {
  const dynamicPosts: { [key: string]: any } = {
    list: PostsList,
    images: PostsImages,
  };

  const DynamicPost = dynamicPosts[layout];

  return <DynamicPost allPostsData={allPostsData} />;
};

export default Posts;
