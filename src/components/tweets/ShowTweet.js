import React, {useState} from "react"

const ShowTweet = ({tweets,setTweets, tweetContent, tweetsList, setTweetsList, showToast}) => {
    const {firstName, userName, date, tweet, numberOfLikes, numberOfComments } = tweetContent;
    const [isEditing, setIsEditing] = useState(false);
    const [editedTweet, setEditedTweet] = useState()

    const handleDeleteTweet = (tweetDel) => {
      const updatedList = tweetsList.filter(item => item.tweet !== tweetDel)
      setTweetsList(updatedList)
      setTweets(updatedList)
      showToast(true)
      setTimeout(() => showToast(false), 2000)
    }

    const handleSaveTweet = (tweetToEdit) => {
      setIsEditing(false);
      const updatedListAfterEdit = tweetsList.map(item => {
        if(item.tweet === tweetToEdit){
          return {
            ...item,
            tweet: editedTweet
          }
        }
        return item;
      })

      setTweetsList(updatedListAfterEdit);
      setTweets(updatedListAfterEdit);
      setEditedTweet("")
    }

    return (
      <div className="showtweet flex flex-col gap1rem max-width100">
        <div className="showtweet__header flex gap1rem">
          <span className="showtweet__header__name">{firstName}</span>
          <span className="showtweet__header__username">@{userName}</span>
          <span className="showtweet__header__date">{date}</span>
        </div>
        <div className="showtweet__content">
          {!isEditing ? tweet : (<div><input
          onChange = {(e) => setEditedTweet(e.target.value)}
          value={editedTweet}
          className="center-panel__tweet__input"
          type="text"
          placeholder="Type here to edit!"
        />
        <button onClick = {()=> handleSaveTweet(tweet)} className="btn">Save</button>
        </div>
        )
      }
        </div>
        <div className="showtweet__more flex max-width100">
          <span className="showtweet__more__likes">
            <i class="fa-regular fa-heart"></i> {numberOfLikes}
          </span>
          <span className="showtweet__more__comments">
            <i class="fa-regular fa-comment"></i> {numberOfComments}
          </span>
          <span onClick = {() => setIsEditing(true)} className="showtweet__more__edit">
            {
              isEditing ? "" : <i class="fa-regular fa-pen-to-square"></i>
            }
          </span>
          <span onClick = {()=> handleDeleteTweet(tweet)} className="showtweet__more__delete">
            <i class="fa-solid fa-trash"></i>
          </span>
        </div>
      </div>
    );
  };
  
  export default ShowTweet;