import Image from "next/image";
import React from "react";
import { Fragment } from "react";

import Date from "@/appComponents/general/Date";
import SuperMarkdown from "@/appComponents/general/SuperMarkdown";
import BasicLayout from "@/appComponents/layouts/BasicLayout";
import { ARDI } from "@/lib/constants";
import { getAllPagesSlugs } from "@/lib/getPageData";
import { getPostData } from "@/lib/getPostData";

export async function generateMetadata({ params }) {
  const { id } = await params;

  let category, postID;

  if (Array.isArray(id) && id.length === 2) {
    [category, postID] = id;
  } else if (Array.isArray(id) && id.length === 1) {
    postID = id[0];
  }

  const postData = await getPostData(postID, "content/memorias/", category);

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

export default async function Memoir({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const entryID = id.length === 1 ? id[0] : id[1];
  const category = id.length > 1 ? id[0] : "";

  const postData = await getPostData(entryID, category, "content/memorias/");
  const featuredImagePath = `/posts/${
    postData.id
  }/${postData?.featuredImage?.replace("./", "")}`;

  return (
    <BasicLayout>
      <div />
      <article>
        <header>
          <div>
            <h1>{postData.title}</h1>
            <h2>{postData.subtitle}</h2>
            <div>
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
