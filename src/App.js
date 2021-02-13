import React, { useState, useEffect } from "react";
import Post from "./components/posts/posts.component";
import { db } from "./firebase/firebase.config";
import "./App.css";
// import { randomBytes } from "crypto";
// import { ThemeProvider, makeStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

// Material UI Styling
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}`,
    left: `${left}`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]); // STATE...hooks
  const [open, setOpen] = useState(false);

  // Pull in data from database
  // useEffect: runs a piece of code based on a specific condition
  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot => {
      // each time a change happens within our post collection in firebase, we take a snapshot of it
      setPosts(
        snapshot.docs.map(doc => ({
          id: doc.id,
          post: doc.data()
        }))
      ); // return data from each snapshot to update the posts in our application
    });
  }, []); // conditions go in the array, if  we leave it blank the code runs onces when the code loads

  return (
    <div className="App">
      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <h2>I am a model</h2>
        </div>
      </Modal>
      {/* Header */}
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="Instagram Logo"
          className="app__headerImage"
        />
      </div>
      {/* Posts */}
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
