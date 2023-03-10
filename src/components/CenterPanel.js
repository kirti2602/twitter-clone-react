import React from "react";
import Header from "./tweets/Header";
import MakeTweet from "./tweets/MakeTweet";
import ShowTweet from "./tweets/ShowTweet";
import Spinner from "../assets/Spinner.svg"

const CenterPanel = ({
  tweets,
  setTweets,
  tweetsList,
  setTweetsList,
  showToast,
}) => {
  return (
    <main className="center-panel padding2rem">
      <Header />
      <hr className="thin-hr" />
      <MakeTweet
        tweets={tweets}
        setTweets={setTweets}
        tweetsList={tweetsList}
        setTweetsList={setTweetsList}
      />
      {
      tweetsList.length === 0 ?  <img className="loader" src={Spinner} alt="spinner" /> : 
      tweetsList.map((tweet) => {
        return (
          <>
            <ShowTweet
              key={tweet.username}
              tweets={tweets}
              setTweets={setTweets}
              tweetContent={tweet}
              tweetsList={tweetsList}
              setTweetsList={setTweetsList}
              showToast={showToast}
            />
            <hr className="thin-hr" />
          </>
        );
      })}
    </main>
  );
};

export default CenterPanel;
