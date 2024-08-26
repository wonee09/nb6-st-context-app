import React from "react";
import { useParams } from "react-router-dom";

const Post = ({ posts }) => {
  const { id } = useParams();
  console.log("posts => ", posts);

  const post = posts.find((post) => post.id === Number(id));

  console.log("post => ", post);

  return (
    <main>
      <h1>상세페이지</h1>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </main>
  );
};

export default Post;
