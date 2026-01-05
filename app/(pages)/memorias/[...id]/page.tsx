import React from "react";

import BasicLayout from "@/appComponents/layouts/BasicLayout";
import PageLayout from "@/appComponents/layouts/PageLayout";
import { ARDI } from "@/lib/constants";
import { getPostData, getSortedPostsData } from "@/lib/getPostData";

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

  const { title, description } = postData;

  return {
    title: `Blog | ${title}`,
    description: description,
    author: ARDI.nickname,
    openGraph: {
      title: title,
      description: description,
      url: "https://ardi.monster",
      siteName: "Ardi | Memorias",
      images: [
        {
          url: "/open-graph.png",
          width: 1200,
          height: 630,
          alt: "Ardi Monster | Memorias",
        },
      ],
      locale: "es_ES",
      type: "website",
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
      <PageLayout pageContent={postData} showDescription={false} />
    </BasicLayout>
  );
}

export async function generateStaticParams() {
  const memoirs = getSortedPostsData("content/memorias/");

  return memoirs.map((memoir) => {
    const idParts = memoir.id?.split("/") || [];

    return {
      id: idParts,
    };
  });
}

export const dynamicParams = false;
