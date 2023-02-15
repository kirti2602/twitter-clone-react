import React from "react";
import LeftPanel from "../components/LeftPanel";
import CenterPanel from "../components/CenterPanel";
import RightPanel from "../components/RightPanel";
// import tweets from "../data/tweets.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [tweetsList, setTweetsList] = useState([]);
  const [tweets, setTweets] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    getTweets();
  }, []);

  const getTweets = async () => {
    try {
      const data = await fetch("https://tweeter.free.beeceptor.com/tweets");
      console.log(data)
      const toJson = await data.json();
      console.log(toJson)
      setTweetsList(toJson);
      setTweets(toJson)
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <main className="background grid height200vh">
      <LeftPanel />
      <CenterPanel tweetsList={tweetsList} setTweetsList={setTweetsList} />
      <RightPanel
        allTweets={tweets}
        tweetsList={tweetsList}
        setTweetsList={setTweetsList}
      />
    </main>
  );
};

export default Homepage;
