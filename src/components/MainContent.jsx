import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaEye } from "react-icons/fa";
import Bird from "./Content/photos/Bird.png";
import cam from "./Content/photos/cam.png";
import nature from "./Content/photos/nature.png";
import sqi from "./Content/photos/sqi.png";
import { videoNumber } from "../Redux/action/action";
import { useDispatch } from "react-redux";
import VideoDisplayer from "./Content/VideoDisplayer";

const MainContent = () => {
  const dispatch = useDispatch();

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

  return (
    <div className="mainContent">
      {movies.map((data, index) => {
        return (
          <div className="container" key={index}>
            <Link
              to={`/VideoDisplayer${index}`}
              onClick={() => {
                dispatch(videoNumber(index));
              }}
            >
              <div className="thumbnail">
                <img src={data.thumbnail} alt="" />
              </div>
            </Link>
            <div className="info">
              <div className="videoName">{data.movieName}</div>
              <div className="likes">
                <span style={{ padding: "0px 3px 0px 2px" }}>
                  <FaHeart />
                </span>
                <span>{data.movieLikes}</span>
              </div>
              <div className="views">
                <span style={{ padding: "0px 3px 0px 2px" }}>
                  <FaEye />
                </span>
                <span>{data.movieViews}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainContent;
