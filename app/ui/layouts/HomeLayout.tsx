import React from "react";

import Posts from "@/appComponents/general/Posts";
import Welcome from "@/appComponents/general/Welcome";
import BasicLayout from "@/appComponents/layouts/BasicLayout";
import { getSortedPostsData } from "@/lib/getPostData";

const Home = () => {
  const allPostsData = getSortedPostsData(5);

  return (
    <BasicLayout>
      <Welcome />
      <Posts layout="list" allPostsData={allPostsData} />
    </BasicLayout>
  );
};

export default Home;
