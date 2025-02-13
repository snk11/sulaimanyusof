import React from "react";
//import GitHubIcon from '@mui/icons-material/GitHub';
//import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/M1.scss';
//import photo_id from '../assets/images/photo_id.jpg'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/*
          <img src={photo_id} alt="Avatar" />
          */}
        </div>
        <div className="content">
          <div className="social_icons">
            {/*
            <a href="https://github.com/snk11" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sulaiman-yusof-b3b507152/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          */}
            </div>
          <h1>Hello, I'm Sulaiman,</h1>
          <p>Engineer, nice to meet you.</p>

          <div className="mobile_social_icons">
            {/*
            <a href="https://github.com/snk11" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sulaiman-yusof-b3b507152/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;