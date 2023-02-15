import React, { useState } from "react";

const RightPanel = ({allTweets, tweetsList, setTweetsList }) => {
  const [input, setInput] = useState("");

  const handleFilter = (searchedTweet) => {
    const filteredTweetList = allTweets.filter((item) =>
      item.tweet.toLowerCase().includes(searchedTweet.toLowerCase())
    );
    setTweetsList(filteredTweetList)
  };


  return (
    <aside className="rightpanel padding2rem">
      <div className="rightpanel__searchbar flex gap1rem">
        <i className="rightpanel__searchbar__icon fa-solid fa-magnifying-glass"></i>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            handleFilter(e.target.value);
          }}
          placeholder="Search Tweets"
          className="rightpanel__searchbar__input"
          type="text"
        />
      </div>
      {
        tweetsList.length === 0 ? <iframe src="https://embed.lottiefiles.com/animation/1725"></iframe> : <span></span>
      }
    </aside>
  );
};

export default RightPanel;
