import React from "react";
import LoginButtonIcon from "../user-circle-solid.svg";
import { db, signInWithGoogle } from "../firebase/firebase.utils";
import { auth } from "../firebase/firebase.utils";

class Header extends React.Component {
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
    return !this.state.currentUser ? (
      <div className="header">
        <div></div>
        <div>
          <button className="login-button" onClick={signInWithGoogle}>
            <div>
              <img src={LoginButtonIcon} alt="" />
            </div>
            <div>SIGN IN</div>
          </button>
        </div>
      </div>
    ) : (
      <div className="header">
        <div></div>
        <div>
          <img
            src={this.state.currentUser.photoURL}
            className="profileImage"
            id="profileImage"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Header;
