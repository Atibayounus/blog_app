import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <div className="post-card">
      <span className="tag">{post.tag}</span>
      <h3>{post.title}</h3>
      <p className="meta">
        {post.author} · {new Date(post.date).toLocaleDateString()}
      </p>
      <p>{post.summary}</p>
      <Link to={`/posts/${post._id}`}>
        <button>Read more</button>
      </Link>
    </div>
  );
}

export default PostCard;