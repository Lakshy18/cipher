import React, { useState } from "react";
import { FaHeart, FaComment, FaShareAlt } from "react-icons/fa";
import { RWebShare } from "react-web-share";

import { Link } from "react-router-dom";

import Comments from "./Comments";
import { useSelector } from "react-redux";

import Bird from "./photos/Bird.png";
import cam from "./photos/cam.png";
import nature from "./photos/nature.png";
import sqi from "./photos/sqi.png";

const VideoDisplayer = (props) => {
  const [likes, setlikes] = useState(0);

  const movieNum = useSelector((state) => state.reducer.showNum);
  const movie1 = {
    movieName: "Bautiful Nature",
    movieLikes: 0,
    movieViews: 0,
    movieComments: [],
    URL: "",
    thumbnail: nature,
  };
  const movie2 = {
    movieName: "Little but also cute",
    movieLikes: 0,
    movieViews: 0,
    movieComments: [],
    URL: "",
    thumbnail: Bird,
  };
  const movie3 = {
    movieName: "Human And squirrel",
    movieLikes: 0,
    movieViews: 0,
    movieComments: [],
    URL: "",
    thumbnail: sqi,
  };
  const movie4 = {
    movieName: "Bird and Camera",
    movieLikes: 0,
    movieViews: 0,
    movieComments: [],
    URL: "",
    thumbnail: cam,
  };
  const movies = [movie1, movie2, movie3, movie4];
  const kk = movies[movieNum];
  return (
    <div>
      <div className="detailContainer">
        <div className="videoDiscription">
          <div className="displayName">{kk.movieName}</div>
          <Link to={`/videoPlayer${movieNum}`} className="btnLink">
            Watch
          </Link>
          <div className="fuctionalities">
            <div className="like">
              <FaHeart
                style={{ cursor: "pointer" }}
                onClick={() => setlikes(likes + 1)}
              />
              <span style={{ margin: "5px" }}>{likes}</span>
            </div>
            <div className="comment" style={{ marginLeft: "35px" }}>
              <FaComment style={{ cursor: "pointer" }} />
              <span style={{ margin: "5px" }}>1</span>
            </div>
            <div className="share" style={{ marginLeft: "35px" }}>
              <RWebShare
                data={{
                  text: "Web Share - GfG",
                  url: "http://localhost:3000",
                  title: "GfG",
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <FaShareAlt style={{ cursor: "pointer" }} />
              </RWebShare>
            </div>
          </div>
          <div className="vdetail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            perspiciatis.
          </div>
        </div>
        <div className="videoImage">
          <img src={kk.thumbnail} alt="" />
        </div>
      </div>

      <Comments />
    </div>
  );
};

export default VideoDisplayer;
