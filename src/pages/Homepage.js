import React from "react";
import LeftPanel from "../components/LeftPanel";
import CenterPanel from "../components/CenterPanel";
import RightPanel from "../components/RightPanel";
// import tweets from "../data/tweets.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [tweetsList, setTweetsList] = useState([]);
  const [tweets, setTweets] = useState();

  // for toast message
  const [toast, showToast] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    getTweets();
  }, []);

  const getTweets = async () => {
    try {
      const data = await fetch("https://tweets.free.beeceptor.com/tweets/all");
      console.log(data);
      const toJson = await data.json();
      console.log(toJson);
      setTweetsList(toJson);
      setTweets(toJson);
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <main className="background grid height200vh">
      <LeftPanel />

      <CenterPanel
        allTweets={tweets}
        tweetsList={tweetsList}
        setTweetsList={setTweetsList}
        showToast = {showToast}
      />

      <RightPanel
        allTweets={tweets}
        tweetsList={tweetsList}
        setTweetsList={setTweetsList}
        toast = {toast}
      />
    </main>
  );
};

export default Homepage;
