import React from "react";
import Header from "./tweets/Header";
import MakeTweet from "./tweets/MakeTweet";
import ShowTweet from "./tweets/ShowTweet";


const CenterPanel = ({tweetsList}) => {
  return (
    <main className="center-panel padding2rem">
      <Header />
      <hr className="thin-hr" />
      <MakeTweet />
      {tweetsList.map((tweet) => {
        return(
          <>
          <ShowTweet tweetContent = {tweet}/>
          <hr className="thin-hr"/>
          </>
        )
      })}
    </main>
  );
};

export default CenterPanel;
