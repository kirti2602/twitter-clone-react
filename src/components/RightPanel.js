import React, { useState } from "react";
import DeleteToast from "./DeleteToast";

const RightPanel = ({allTweets, setAllTweets, tweetsList, setTweetsList , toast}) => {
  const [input, setInput] = useState("");

  const handleFilter = (searchedTweet) => {
    // on search, the tweets are coming back even after getting deleted - BUG 
    const filteredTweetList = allTweets.filter((item) =>
      item.tweet.toLowerCase().includes(searchedTweet.toLowerCase())
    );
    setTweetsList(filteredTweetList);
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
      {tweetsList.length === 0 ? (
        <span className="not-found-text">No tweets found!</span>
      ) : (
        <span></span>
      )}

      {
        toast ? <DeleteToast /> : ""
      }
    </aside>
  );
};

export default RightPanel;
