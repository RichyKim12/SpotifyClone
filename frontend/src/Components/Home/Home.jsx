import React from "react";
import Navbar from '../Navbar/Navbar';
import Bottombar from '../BottomBar/Bottombar'
import "./Home.css";


const Home = () => {
  return (
    <div className="main-wrapper">
      <Navbar />
      <div className="main-container">
          <div className="library-side-container-normal">
            <div className="library-content-container">
              
            </div>
          </div>
          <div className="library-side-container-small"></div>
          <div className = " middle-container">
              <div className="middle-container-content"></div>
          </div>       
          <div className="artist-info-side-container">
            <div className="library-content-container">
              
            </div>
          </div> 
        
      </div>
      <Bottombar />
    </div>
  );
};


export default Home;