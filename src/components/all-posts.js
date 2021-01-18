import React, { Component } from "react";
import Post from "./post";
import { db } from "../firebase/firebase.utils";

class NewPosts extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };
  }

  componentDidMount = () => {
    db.collection("posts").onSnapshot((docs) => {
      docs.forEach((doc) => {
        if (document.getElementById(doc.id)) {
          return;
        } else {
          console.log(doc.data());
          this.setState((prevState) => ({
            posts: [
              ...prevState.posts,
              {
                id: doc.id,
                username: doc.data().username,
                image: doc.data().image,
                date: doc.data().date,
                content: doc.data().content,
              },
            ],
          }));
        }
      });
    });
  };

  render() {
    let displayPosts = this.state.posts.map((p) => (
      <div id={p.id}>
        <Post
          image={p.image}
          username={p.username}
          date={p.date}
          content={p.content}
        />
      </div>
    ));

    return <div className="new-posts">{displayPosts}</div>;
  }
}

export default NewPosts;

/*
function NewPosts() {
  const posts = [];

  db.collection("posts")
    .get()
    .then((querySnapshot) => {
      console.log("Total posts: ", querySnapshot.size);

      querySnapshot.forEach((documentSnapshot) => {
        console.log(documentSnapshot.data());
      });
    });

  db.collection("posts")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((post) => {
        console.log(post.data());
      });
    });

  return (
    <div className="new-posts">
      <Post
        image="https://lh3.googleusercontent.com/a-/AOh14GjdREIaz17QOliHefvktOLchoKUFSeAaQXDD_zPjA=s96-c"
        username="SkyDive"
        date="2 days ago"
        content="Hello world!"
      />
      <Post
        image="https://yt3.ggpht.com/ytc/AAUvwniIRBQ4OXoHH39nMaa6lSdvf4Px-gK6fXXygZzMug=s88-c-k-c0x00ffffff-no-rj"
        username="RonenGG"
        date="2 days ago"
        content="Shut up, I'm the best."
      />
    </div>
  );
}

export default NewPosts;*/
