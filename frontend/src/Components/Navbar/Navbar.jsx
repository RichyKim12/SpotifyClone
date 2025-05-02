import React from 'react'
import { assets } from '../../assets/assets';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <button className = 'spotify-button'>
        <img className = 'spotify-icon' src={assets.spotify_icon}/>
      </button>
      <div className="middle-content">
        <img/>
        <div className="searchbar"></div>
      </div>
    </div>
  );
};


export default Navbar