import avatar from "../assets/girl.png";

const Header = () => {
  return (
    <div className="center-panel__header header flex max-width100">
      <span>Home</span>
      <span>Profile</span>
      <span>
        <i class="fa-solid fa-right-from-bracket"></i>
      </span>
    </div>
  );
};

const MakeTweet = () => {
  return (
    <div className="center-panel__tweet">
      <div className="flex">
        <img
          className="center-panel__tweet__avatar"
          src={avatar}
          alt="user-avatar"
        />
        <input
          className="center-panel__tweet__input"
          type="text"
          placeholder="What's Happening?"
        />
      </div>
      <hr className="thin-hr" />
      <button className="btn tweet-btn">Tweet</button>
      <hr className="thin-hr" />
    </div>
  );
};

const ShowTweet = ({tweetContent}) => {
  const {firstName, userName, date, tweet, numberOfLikes, numberOfComments } = tweetContent;
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
        <span className="showtweet__more__delete">
          <i class="fa-solid fa-trash"></i>
        </span>
      </div>
    </div>
  );
};

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
