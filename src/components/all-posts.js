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
