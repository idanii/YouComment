import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Posts from "./components/all-posts";
import PublishPost from "./components/publishPost";
import React, { useState, useEffect } from "react";
import OpenPost from "./components/open-post";
import { signInWithGoogle } from "../src/firebase/firebase.utils";
import { auth } from "../src/firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App" id="App">
        <Header />
        {this.state.currentUser ? (
          <PublishPost
            image={this.state.currentUser.photoURL}
            username={this.state.currentUser.displayName}
          />
        ) : null}
        <Posts />
      </div>
    );
  }
}

export default App;
