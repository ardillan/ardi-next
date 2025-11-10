export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import React from "react";

import BasicLayout from "@/appComponents/layouts/BasicLayout";
import PageLayout from "@/appComponents/layouts/PageLayout";
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
        `/memorias/${category ? `${category}/` : ""}${postID}/${featuredImage}`,
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
  const postData = await getPostData(entryID, "content/memorias/", category);
  return (
    <BasicLayout>
      <PageLayout pageContent={postData} />
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
