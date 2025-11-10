export const dynamic = "force-dynamic";

import Image from "next/image";
import React, { Fragment } from "react";

import Date from "@/appComponents/general/Date";
import SuperMarkdown from "@/appComponents/general/SuperMarkdown";
import BasicLayout from "@/appComponents/layouts/BasicLayout";
import { ARDI } from "@/lib/constants";
import { getPostData } from "@/lib/getPostData";

import { background, date, header, image, subtitle, title } from "./page.css";

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

  return {
    title: `Blog | ${postData.title}`,
    description: postData.description,
    author: ARDI.nickname,
    openGraph: {
      images: [
        `/posts/${category ? `${category}/` : ""}${postID}/${
          postData.featuredImage
        }`,
      ],
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Post({ params }: { params: any }) {
  const awaitedParams = await params;
  const { id } = awaitedParams;

  const entryID = id.length === 1 ? id[0] : id[1];
  const category = id.length > 1 ? id[0] : "";

  const postData = await getPostData(entryID, "content/posts/", category);
  const featuredImagePath = `/posts/${
    postData.id
  }/${postData.featuredImage?.replace("./", "")}`;

  return (
    <BasicLayout>
      <div className={background} />
      <article>
        <header className={header}>
          <div>
            <h1 className={title}>{postData.title}</h1>
            <h2 className={subtitle}>{postData.subtitle}</h2>
            <div className={date}>
              {postData.date && (
                <>
                  Escrito el <Date dateString={postData.date} /> <span>|</span>{" "}
                </>
              )}
              {postData.category?.map((cat, i, arr) => (
                <Fragment key={cat}>{`${cat}${
                  i === arr.length - 1 ? "" : ", "
                }`}</Fragment>
              ))}
            </div>
          </div>
          <div>
            <Image
              className={image}
              src={featuredImagePath}
              alt="Imagen de cabecera"
              width={400}
              height={400}
              style={{
                objectFit: "cover",
                width: "100%",
                position: "relative",
              }}
            />
          </div>
        </header>
        <section>
          {postData.contentHtml && (
            <SuperMarkdown markdownContent={postData.contentHtml} />
          )}
        </section>
      </article>
    </BasicLayout>
  );
}
