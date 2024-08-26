import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <div>
      <StyledNav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/new">New Post</Link>
      </StyledNav>
      <Outlet />
    </div>
  );
};

export default Layout;

const StyledNav = styled.nav`
  display: flex;
  gap: 30px;
  padding: 10px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
`;
