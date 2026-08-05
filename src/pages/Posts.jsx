import { useEffect, useState } from "react";
import api from "../api";
import PostCard from "../components/PostCard";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError("");
    api
      .get("/posts")
      .then((res) => setPosts(res.data))
      .catch(() => setError("Could not load posts. Is the server running?"))
      .finally(() => setLoading(false));
  }, [refresh]);

  return (
    <div className="page">
      <div className="posts-header">
        <h1>All Posts</h1>
        <button onClick={() => setRefresh(refresh + 1)}>Refresh</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="posts-grid">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Posts;