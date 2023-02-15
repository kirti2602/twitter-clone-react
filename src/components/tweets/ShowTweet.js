import React from "react"

const ShowTweet = ({tweetContent, tweetsList, setTweetsList, showToast}) => {
    const {firstName, userName, date, tweet, numberOfLikes, numberOfComments } = tweetContent;

    const handleDeleteTweet = (userName) => {
      const updatedList = tweetsList.filter(tweet => tweet.userName !== userName)
      setTweetsList(updatedList)
      showToast(true)
      setTimeout(() => showToast(false), 1000)
    }


    return (
      <div className="showtweet flex flex-col gap1rem max-width100">
        <div className="showtweet__header flex gap1rem">
          <span className="showtweet__header__name">{firstName}</span>
          <span className="showtweet__header__username">@{userName}</span>
          <span className="showtweet__header__date">{date}</span>
        </div>
        <div className="showtweet__content">
          {tweet}
        </div>
        <div className="showtweet__more flex max-width100">
          <span className="showtweet__more__likes">
            <i class="fa-regular fa-heart"></i> {numberOfLikes}
          </span>
          <span className="showtweet__more__comments">
            <i class="fa-regular fa-comment"></i> {numberOfComments}
          </span>
          <span className="showtweet__more__edit">
            <i class="fa-regular fa-pen-to-square"></i>
          </span>
          <span onClick = {()=> handleDeleteTweet(userName)} className="showtweet__more__delete">
            <i class="fa-solid fa-trash"></i>
          </span>
        </div>
      </div>
    );
  };
  
  export default ShowTweet;