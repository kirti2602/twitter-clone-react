import React, { useEffect, useState } from "react";
import LeftPanel from "../components/LeftPanel";
import man from "../assets/man.png";
import Shimmer from "../components/Shimmer"
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    try{
      const data = await fetch("https://tweets.free.beeceptor.com/profile");
      const toJson = await data.json();
      setProfile(toJson);
    }
    catch(error){
      navigate("/error")
    }
  };

  return (
    <main className="background grid height100vh">
      <LeftPanel />
      <div className="profile padding2rem">
        <div className="profile__header header">Profile</div>
        <hr className="thin-hr" />
        <div className="profile__body flex flex-col gap2rem">
          {/* Until data is coming from API, show a shimmer */}
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
