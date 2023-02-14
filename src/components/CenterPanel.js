import React from "react";
import avatar from "../assets/girl.png";

const CenterPanel = () => {
  return (
    <main className="center-panel padding2rem">
      <div className="center-panel__header header flex max-width100">
        <span>Home</span>
        <span>Profile</span>
        <span>
          <i class="fa-solid fa-right-from-bracket"></i>
        </span>
      </div>
      <hr className="thin-hr" />
      <div className="center-panel__tweet">
        <div className="flex">
          <img
            className="center-panel__tweet__avatar"
            src={avatar}
            alt="user-avatar"
          />
          <input className="center-panel__tweet__input" type="text"placeholder="What's Happening?" />
        </div>
        <hr className="thin-hr" />
        <button className='btn tweet-btn'>Tweet</button>
        <hr className="thin-hr" />
      </div>
    </main>
  );
};

export default CenterPanel;
