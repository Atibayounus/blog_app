import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function NewPost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [tag, setTag] = useState("");
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    api
      .post("/posts", { title, author, tag, summary, body })
      .then(() => navigate("/posts"))
      .catch(() => setError("Could not save the post. Please try again."));
  };

  return (
    <div className="page">
      <h1>Add a New Post</h1>
      <form onSubmit={handleSubmit} className="post-form">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          placeholder="Tag (React, Hooks, API...)"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <input
          placeholder="Short summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <textarea
          placeholder="Write the post..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Publish Post</button>
      </form>
    </div>
  );
}

export default NewPost;