"use client";

import React from "react";
import Posts from "../../../components/Posts";
import { getAllPosts } from "../../../service/getAllPosts";
import PostSearch from "../../../components/PostSearch";

function About() {
  const [posts, setPosts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <PostSearch onSearch={setPosts} />
      <h1>Blog page</h1>

      {loading ? <h1>Loading...</h1> : <Posts posts={posts} />}
    </>
  );
}

export default About;
