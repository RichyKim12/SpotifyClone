import React from "react";
import Navbar from '../Navbar/Navbar';
import Bottombar from '../BottomBar/Bottombar'
import "./Home.css";


const Home = () => {
  return (
    <div className="main-wrapper">
      <Navbar />
      <div className="main-container">
          <div className="general-side-container">
            <div className="library-content-container">
              {/* Main content */}
            </div>
          </div>
          <div className = " middle-container">
              <div className="middle-container-content"></div>
          </div>       
          <div className="general-side-container">
            <div className="library-content-container">
              {/* Main content */}
            </div>
          </div> 
        
      </div>
      <Bottombar />
    </div>
  );
};


export default Home;