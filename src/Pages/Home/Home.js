import React from "react";
import videoJ from "./../../img/video.mp4";

import {Link} from 'react-router-dom'

const Home = () => {

      return (
       <div className="homeBackground">
       
        <div className="prodStyle">
        
        <Link to="/detail/"><button ><h1>Welcome to Sneakers L*ver</h1></button></Link>
        
          <br></br>
          <video width="1000" height="550" controls>
            <source src={videoJ} type="video/mp4"/>
          
          </video>
        </div>
       
       </div>
      )
    }
    
    export default Home;