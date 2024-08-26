import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PostsContext } from "../shared/Router";

const Posts = () => {
  const navigate = useNavigate();
  const { posts } = useContext(PostsContext);

  return (
    <main>
      <h1>Posts</h1>
      <p>총 {posts.length}개의 글</p>
      <StyledPosts>
        {posts.map((post) => (
          <StyledPost
            key={post.id}
            onClick={() => navigate(`/posts/${post.id}`)}
          >
            {post.title}
          </StyledPost>
        ))}
      </StyledPosts>
    </main>
  );
};

export default Posts;

const StyledPosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledPost = styled.div`
  cursor: pointer;
`;
