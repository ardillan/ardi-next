import Image from "next/image";
import React from "react";
import { Fragment } from "react";

import Date from "@/appComponents/general/Date";
import SuperMarkdown from "@/appComponents/general/SuperMarkdown";
import BasicLayout from "@/appComponents/layouts/BasicLayout";
import { ARDI } from "@/lib/constants";
import { getAllPagesSlugs } from "@/lib/getPageData";
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

  const postData = await getPostData(postID, category);

  if (!postData) return;

  const { title, description, featuredImage } = postData;

  return {
    title: `Blog | ${title}`,
    description: description,
    author: ARDI.nickname,
    openGraph: {
      images: [
        `/posts/${category ? `${category}/` : ""}${postID}/${featuredImage}`,
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

  const postData = await getPostData(entryID, category);
  const featuredImagePath = `/posts/${
    postData.id
  }/${postData?.featuredImage?.replace("./", "")}`;

  return (
    <BasicLayout>
      <div className={background} />
      <article>
        <header className={header}>
          <div>
            <h1 className={title}>{postData.title}</h1>
            <h2 className={subtitle}>{postData.subtitle}</h2>
            <div className={date}>
              {postData.date !== undefined ? (
                <>
                  Escrito el <Date dateString={postData.date} /> <span>|</span>{" "}
                </>
              ) : null}

              {postData.category?.map(
                (cat: string, index: number, categories: string[]) => (
                  <Fragment key={cat}>{`${cat}${
                    index === categories.length - 1 ? "" : ", "
                  }`}</Fragment>
                )
              )}
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
          {postData.contentHtml ? (
            <SuperMarkdown markdownContent={postData.contentHtml} />
          ) : null}
        </section>
      </article>
    </BasicLayout>
  );
}
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const pages = await getAllPagesSlugs();
  return pages.map((page) => {
    return {
      slug: page.params.slug,
    };
  });
}
