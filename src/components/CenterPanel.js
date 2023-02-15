import React from "react";
import Header from "./tweets/Header";
import MakeTweet from "./tweets/MakeTweet";
import ShowTweet from "./tweets/ShowTweet";

const CenterPanel = ({ allTweets, tweetsList, setTweetsList, showToast}) => {
  return (
    <main className="center-panel padding2rem">
      <Header />
      <hr className="thin-hr" />
      <MakeTweet />
      {tweetsList.map((tweet) => {
        return (
          <>
            <ShowTweet
              key={tweet.username}
              tweetContent={tweet}
              tweetsList={tweetsList}
              setTweetsList={setTweetsList}
              showToast = {showToast}
            />
            <hr className="thin-hr" />
          </>
        );
      })}
    </main>
  );
};

export default CenterPanel;
