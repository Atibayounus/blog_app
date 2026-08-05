import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import NewPost from "./pages/NewPost";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="footer">
        Week 5 Blog Project · Hayatian Computing Society · University of Gujrat
      </footer>
    </>
  );
}

export default App;