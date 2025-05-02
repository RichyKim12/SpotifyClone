import React from 'react'
import {useNavigate} from 'react-router-dom';
import { assets } from '../../assets/assets';
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate();
  const clickHome = () =>{
    navigate('/');
  }

  return (
    <div className="navbar-container">
      <div className="spotify-button-container">
        <button className = 'spotify-home-button' onClick = {()=>clickHome()}>
          <img className = 'spotify-icon' src={assets.spotify_icon}/>
        </button>
      </div>
      
      <div className="middle-content">
        <div className="home-button-container">
          <button className = 'house-home-button' onClick = {()=>clickHome()}>
            <img className = 'house-icon' src={assets.home_button}/>
          </button>
        </div>
        
        <div className="search-bar">
          <input className = 'search-bar-textinput' type='text' placeholder='What do you want to play?'/>
        </div>
      </div>

      <div className="right-content"></div>
    </div>
  );
};


export default Navbar