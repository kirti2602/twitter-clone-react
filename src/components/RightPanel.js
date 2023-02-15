import React, { useState } from "react";
import DeleteToast from "./DeleteToast";

const RightPanel = ({
  allTweets,
  toast,
}) => {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleFilter = (searchedTweet) => {
    if (searchedTweet === '') {
      setSearchResult([]);
    } else {
      const filteredTweetList = allTweets.filter((item) =>
        item.tweet.toLowerCase().includes(searchedTweet.toLowerCase())
      );
      setSearchResult(filteredTweetList);
    }
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

      <div className="rightpanel__seachresult">
        {searchResult.length === 0 ? (
          <span className="not-found-text">Tweet Not Found!</span>
        ) : (
          searchResult.map((item) => {
            return (
              <span>
                {item.tweet}
                <hr className="thin-hr" />
              </span>
            );
          })
        )}
      </div>

      {toast ? <DeleteToast /> : ""}
    </aside>
  );
};

export default RightPanel;
