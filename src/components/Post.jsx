import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "../shared/Router";

const Post = () => {
  const { id } = useParams();
  const { posts } = useContext(PostsContext);

  const post = posts.find((post) => post.id === Number(id));

  return (
    <main>
      <h1>상세페이지</h1>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </main>
  );
};

export default Post;
