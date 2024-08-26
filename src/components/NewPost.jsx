import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPost = ({ setPosts }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    if (!title || !body) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      body,
      userId: 1,
    };
    setPosts((prev) => [...prev, newPost]);

    alert("새 글이 작성되었습니다. 목록으로 이동합니다.");
    navigate("/posts");
  };

  return (
    <main>
      <h1>새 글 작성</h1>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="내용"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={handleSubmit}>작성</button>
    </main>
  );
};

export default NewPost;
