import React from "react";
import avatar from "../../assets/girl.png";

const MakeTweet = () => {
    return (
      <div className="center-panel__tweet">
        <div className="flex">
          <img
            className="center-panel__tweet__avatar"
            src={avatar}
            alt="user-avatar"
          />
          <input
            className="center-panel__tweet__input"
            type="text"
            placeholder="What's Happening?"
          />
        </div>
        <hr className="thin-hr" />
        <button className="btn tweet-btn">Tweet</button>
        <hr className="thin-hr" />
      </div>
    );
  };

  export default MakeTweet;