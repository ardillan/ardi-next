import React from "react";

import BasicLayout from "@/appComponents/layouts/BasicLayout";
import Posts from "@/appComponents/general/Posts";
import Welcome from "@/appComponents/general/Welcome";
import { getSortedPostsData } from "@/lib/getPostData";

import global from "../../ui/general/Global.module.css";

const Home = () => {
  const allPostsData = getSortedPostsData(5);

  return (
    <BasicLayout>
      <div className={global.container}>
        <Welcome />
        <Posts layout="list" allPostsData={allPostsData} />
      </div>
    </BasicLayout>
  );
};

export default Home;
