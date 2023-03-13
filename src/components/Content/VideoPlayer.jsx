import React from "react";
import { useSelector } from "react-redux";
import Video0 from "./Videos/Video0.mp4";
import Video1 from "./Videos/Video1.mp4";
import Video2 from "./Videos/Video2.mp4";
import Video3 from "./Videos/Video3.mp4";

const VideoPlayer = () => {
  const movieNum = useSelector((state) => state.reducer.showNum);
  const videoNum = [Video0, Video1, Video2, Video3];

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "50px",
        }}
      >
        <video
          src={videoNum[movieNum]}
          width="600"
          height="300"
          controls="controls"
          autoPlay={true}
        />
      </div>
    </>
  );
};

export default VideoPlayer;
