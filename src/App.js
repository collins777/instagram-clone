import React, { useState } from "react";
import Post from "./components/posts/posts.component";
import "./App.css";

// We're using BEM for CSS naming conventions

function App() {
  // STATE...hooks
  const [posts, setPosts] = useState([
    {
      username: "collins777",
      caption: "Hello World",
      imageUrl:
        "https://images.unsplash.com/photo-1546900703-cf06143d1239?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      username: "tammy_haas",
      caption: "Friday night dinners 💜",
      imageUrl:
        "https://images.unsplash.com/photo-1572862905000-c5b6244027a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGRpbm5lcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      username: "artfinds92",
      caption: "Tristan Eaton Mural!",
      imageUrl:
        "https://images.unsplash.com/photo-1580089056071-11f31b94fefe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3RyZWV0JTIwYXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    }
  ]);

  return (
    <div className="App">
      {/* Header */}
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="Instagram Logo"
          className="app__headerImage"
        />
      </div>
      {/* Posts */}
      {posts.map(post => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
