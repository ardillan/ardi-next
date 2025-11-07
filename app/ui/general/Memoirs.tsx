import Link from "next/link";
import React from "react";

import Date from "@/appComponents/general/Date";
import { IMarkDownData } from "@/interfaces/IMarkDownData";

import styles from "./Memoirs.module.css";
export type IDynamicPost = {
  allPostData?: IMarkDownData[];
};

export const MemoirsList = ({
  allPostsData,
}: {
  allPostsData: IMarkDownData[];
}) => {
  return (
    <ul className={styles.memoirs}>
      {allPostsData.map((post: IMarkDownData) => {
        return (
          <li key={post.id}>
            <Link href={`/memorias/${post.id}`}>
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

const Memoirs = ({ allPostsData }: { allPostsData: IMarkDownData[] }) => {
  return <MemoirsList allPostsData={allPostsData} />;
};

export default Memoirs;
