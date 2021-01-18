import React from "react";

function openPopup(props) {
  return (
    <div>
      <div className="open-popup">
        <div>
          <img src={props.image} alt="" />
          <h5>{props.username}</h5>
          <h6>{props.date}</h6>
          <button className="subscribe-btn">Subscribe</button>
        </div>
        <div>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default openPopup;
