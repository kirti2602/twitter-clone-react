import React, { useEffect, useState } from "react";
import LeftPanel from "../components/LeftPanel";
import man from "../assets/man.png";
import Shimmer from "../components/Shimmer"

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfileData();
  }, [profile]);

  const getProfileData = async () => {
    const data = await fetch("https://tweeter.free.beeceptor.com/profile");
    // console.log(data)
    const toJson = await data.json();
    setProfile(toJson);
  };

  return (
    <main className="background grid height100vh">
      <LeftPanel />
      <div className="profile padding2rem">
        <div className="profile__header header">Profile</div>
        <hr className="thin-hr" />
        <div className="profile__body flex flex-col gap2rem">
          {Object.keys(profile).length === 0 ? (
            <Shimmer />
          ) : (
            <>
              <img
                className="profile__body__avatar"
                src={man}
                alt="user-avatar"
              />
              <span>
                {profile?.first_name} {profile?.last_name}
              </span>
              <span>
                <i class="fa-solid fa-envelope"></i> {profile?.email}
              </span>
              <span>
                <i class="fa-solid fa-venus-mars"></i> {profile?.gender}
              </span>
              <span>
                <i class="fa-solid fa-location-dot"></i> {profile?.country}
              </span>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Profile;
