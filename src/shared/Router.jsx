import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import Posts from "../components/Posts";
import Post from "../components/Post";
import NewPost from "../components/NewPost";
import Layout from "../components/Layout"; // Layout 컴포넌트 추가

const Router = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="posts" element={<Posts posts={posts} />} />
          <Route path="posts/:id" element={<Post posts={posts} />} />
          <Route path="posts/new" element={<NewPost setPosts={setPosts} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
