import React from "react";

import Posts from "@/appComponents/general/Posts";
import Welcome from "@/appComponents/general/Welcome";
import BasicLayout from "@/appComponents/layouts/BasicLayout";
import { getSortedPostsData } from "@/lib/getPostData";

const Home = () => {
  const allPostsData = getSortedPostsData("content/posts/", 6);

  return (
    <BasicLayout>
      <Welcome />
      <Posts layout="images" allPostsData={allPostsData} />
    </BasicLayout>
  );
};

export default Home;
