import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Fernández Agustín Eligio</h1>
      <p> Full Stack Developer | Game Designer | Game Developer | Back end </p>
    </div>
  );
};

export default Cover;
