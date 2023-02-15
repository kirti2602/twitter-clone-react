import React, { useState } from "react";
import avatar from "../../assets/girl.png";

const MakeTweet = ({tweets, setTweets, tweetsList, setTweetsList }) => {
  const [input, setInput] = useState();
  /* 
  BUG-- Tweets created have same username, hence all of them are getting deleted
  Resolved by giving tweet as paramenter instead of userName
  */

  const handleAddTweet = () => {
    const updatedList = [
      {
        userName: "keerti",
        date: "1s",
        tweet: input,
        numberOfLikes: 0,
        numberOfComments: 0,
        firstName: "kirti",
      },
      ...tweetsList,
    ]
    setTweetsList(updatedList);
    setTweets(updatedList)
    setInput("")
  };

  return (
    <div className="center-panel__tweet">
      <div className="flex">
        <img
          className="center-panel__tweet__avatar"
          src={avatar}
          alt="user-avatar"
        />
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="center-panel__tweet__input"
          type="text"
          placeholder="What's Happening?"
        />
      </div>
      <hr className="thin-hr" />
      <button onClick={handleAddTweet} className="btn tweet-btn">
        Tweet
      </button>
      <hr className="thin-hr" />
    </div>
  );
};

export default MakeTweet;
