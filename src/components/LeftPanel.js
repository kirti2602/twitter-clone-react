import React from 'react'
import {Link} from "react-router-dom"

const LeftPanel = () => {
  return (
    <nav className='left-panel flex flex-col padding2rem'>
        <div className='flex'><i className="logo fa-brands fa-twitter"></i></div>
        <Link className='route-link' to="/homepage"><div className="flex"><i className="fa-solid fa-house"></i>Home</div></Link>
        <div className='flex'><i className="fa-solid fa-hashtag"></i>Explore</div>
        <div className='flex'><i className="fa-regular fa-envelope"></i>Message</div>
        <div className='flex'><i className="fa-solid fa-bookmark"></i>Bookmark</div>
        <Link className='route-link' to="/profile"><div className='flex'><i className="fa-solid fa-user"></i>Profile</div></Link>
        <button className='btn tweet-btn'>Tweet</button>
    </nav>
  )
}

export default LeftPanel