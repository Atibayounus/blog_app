import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    api
      .get(`/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch(() => setError("Post not found."))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="page">
      <button onClick={() => navigate(-1)}>Back</button>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {post && (
        <div className="post-detail">
          <span className="tag">{post.tag}</span>
          <h1>{post.title}</h1>
          <p className="meta">
            {post.author} · {new Date(post.date).toLocaleDateString()}
          </p>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}

export default PostDetail;