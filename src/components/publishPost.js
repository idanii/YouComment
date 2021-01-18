import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase.utils";

function PublishPost(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (document.getElementById("text-of-post").value != "") {
      document.getElementById("post-btn").style.background = "#3ea6ff";
      document.getElementById("post-btn").style.cursor = "pointer";
    } else {
      document.getElementById("post-btn").style.background = "#606060";
      document.getElementById("post-btn").style.cursor = "default";
    }
  });

  function publishPostFunc() {
    if (document.getElementById("text-of-post").value != "") {
      var d = new Date();
      var _time =
        d.getHours() > 12
          ? d.getHours() - 12 + ":" + d.getMinutes() + " PM"
          : d.getHours() + ":" + d.getMinutes() + " AM";

      db.collection("posts").add({
        username: props.username,
        image: props.image,
        date: _time,
        content: document.getElementById("text-of-post").value,
      });
      document.getElementById("text-of-post").value = "";
      document.getElementById("post-btn").style.background = "#606060";
    }
  }

  return (
    <div className="container">
      <div className="publish-post">
        <div>
          <img src={props.image} alt="" />
          <h5>{props.username}</h5>
        </div>
        <div>
          <textarea
            onChange={() => setCount(count + 1)}
            type="text"
            id="text-of-post"
            placeholder="Any thoughts? I know you have some.."
          />
        </div>
        <div className="two-sides">
          <div></div>
          <div>
            <button
              onClick={publishPostFunc}
              className="post-btn"
              id="post-btn"
            >
              POST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublishPost;
