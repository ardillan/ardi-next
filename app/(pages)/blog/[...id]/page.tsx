import React, { Fragment } from "react";

import CustomImage from "@/appComponents/general/CustomImage";
import Date from "@/appComponents/general/Date";
import SuperMarkdown from "@/appComponents/general/SuperMarkdown";
import BasicLayout from "@/appComponents/layouts/BasicLayout";
import { ARDI, CONFIG } from "@/lib/constants";
import { getPostData, getSortedPostsData } from "@/lib/getPostData";

import styles from "./page.module.css";

export async function generateMetadata({ params }) {
  const { id } = await params;

  let category, postID;

  if (Array.isArray(id) && id.length === 2) {
    [category, postID] = id;
  } else if (Array.isArray(id) && id.length === 1) {
    postID = id[0];
  }

  const postData = await getPostData(postID, "content/posts/", category);

  if (!postData) return;

  const { title, description, featuredImage } = postData;

  return {
    title: `Blog | ${title}`,
    description: description,
    author: ARDI.nickname,
    openGraph: {
      images: [
        `${CONFIG.CLOUDINARY_URL}/posts/${category ? `${category}/` : ""}${postID}/${featuredImage}`,
      ],
    },
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const entryID = id.length === 1 ? id[0] : id[1];
  const category = id.length > 1 ? id[0] : "";

  const postData = await getPostData(entryID, "content/posts/", category);
  const featuredImagePath = `/posts/${
    postData.id
  }/${postData?.featuredImage?.replace("./", "")}`;

  return (
    <BasicLayout>
      <div className={styles.background} />
      <article>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>{postData.title}</h1>
            <h2 className={styles.subtitle}>{postData.subtitle}</h2>
            <div className={styles.date}>
              {postData.date !== undefined ? (
                <>
                  Escrito el <Date dateString={postData.date} />{" "}
                  <span>|</span>{" "}
                </>
              ) : null}

              {postData.category?.map(
                (cat: string, index: number, categories: string[]) => (
                  <Fragment key={cat}>{`${cat}${
                    index === categories.length - 1 ? "" : ", "
                  }`}</Fragment>
                ),
              )}
            </div>
          </div>
          <CustomImage
            src={featuredImagePath}
            showCaption={false}
            alt="Imagen destacada"
            className={styles.image}
          />
        </header>
        <section className={styles.section}>
          {postData.contentHtml ? (
            <SuperMarkdown markdownContent={postData.contentHtml} />
          ) : null}
        </section>
      </article>
    </BasicLayout>
  );
}

export async function generateStaticParams() {
  const posts = getSortedPostsData("content/posts/");

  return posts.map((post) => {
    const idParts = post.id?.split("/") || [];

    return {
      id: idParts,
    };
  });
}

export const dynamicParams = false;
