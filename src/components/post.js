import React, { useState } from "react";
import OpenPost from "./open-post";

const Post = (props, { popup }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="post" onClick={() => setOpen(!open)}>
        <div className="profile-picture-side">
          <img src={props.image} alt="" />
        </div>
        <div className="post-data-side">
          <div style={{ display: "flex", alignItems: "center" }}>
            <h5 className="owner-of-post">
              {props.username.length > 13
                ? props.username.substring(0, 11) + "..."
                : props.username}
            </h5>
            <p className="date-of-post">{props.date}</p>
          </div>
          <div>
            <p className="post-content">
              {props.content.length > 24
                ? props.content.substring(0, 21) + "...."
                : props.content}
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}></div>
        </div>
      </div>

      {open && (
        <div>
          <div className="offBackground" onClick={() => setOpen(false)}></div>
          <div id={popup}>
            <OpenPost
              image={props.image}
              username={props.username}
              date={props.date}
              content={
                props.content.length > 150
                  ? props.content.substring(0, 250) + "...."
                  : props.content
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
