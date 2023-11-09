"use client";

import React, { FormEventHandler } from "react";
import { getPostsBySearch } from "../service/getAllPosts";

type Props = {
  onSearch: (value: any[]) => void;
};

const PostSearch = ({ onSearch }: Props) => {
  const [search, setSearch] = React.useState("");

  const handlesubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const posts = await getPostsBySearch(search);
    onSearch(posts)
  };

  return(
  <form onSubmit={handlesubmit}>
    <input
      type="search"
      placeholder="search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    ></input>
    <button type="submit">Search</button>
  </form>
  )
};

export default PostSearch;
 
