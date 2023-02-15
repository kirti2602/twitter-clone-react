import React from "react";
import LeftPanel from "../components/LeftPanel";
import CenterPanel from "../components/CenterPanel";
import RightPanel from "../components/RightPanel";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [tweetsList, setTweetsList] = useState([]);
  const [tweets, setTweets] = useState();

  // for toast message
  const [toast, showToast] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // artificial delay
    setTimeout(() => getTweets(), 500)
  }, []);

  const getTweets = async () => {
    try {
      const data = await fetch("https://twitter-proj.free.beeceptor.com/tweets");
      const toJson = await data.json();
      setTweetsList(toJson);
      setTweets(toJson);
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <main className="homepage background grid height200vh">
      <LeftPanel/>

      <CenterPanel
        tweets = {tweets}
        setTweets={setTweets}
        tweetsList={tweetsList}
        setTweetsList={setTweetsList}
        showToast={showToast}
      />

      <RightPanel
        allTweets={tweets}
        toast={toast}
      />
    </main>
  );
};

export default Homepage;
