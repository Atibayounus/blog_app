import { Link } from "react-router-dom";
import { useState } from "react";
import Counter from "../components/Counter";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <h1>DevBlog</h1>
      <p>A small blog built with React, Vite, React Router, useEffect and axios.</p>
      <Link to="/posts">
        <button>Read the posts</button>
      </Link>

      <div className="home-grid">
        <Counter count={count} onIncrement={() => setCount(count + 1)} />
        <div className="info-box">
          <h4>What this project uses</h4>
          <ul>
            <li>React + Vite</li>
            <li>React Router (5 routes + 404)</li>
            <li>useEffect with a dependency array</li>
            <li>axios talking to an Express API</li>
            <li>Loading, error and refresh states</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;