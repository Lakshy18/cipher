import React, { useState } from "react";
import { FaHeart, FaComment, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Comments from "./Comments";

const VideoDisplayer = () => {
  const [likes, setlikes] = useState(0)
  const [comments, setComments] = useState(false)
  return (
    <div>
      <div className="detailContainer">
        <div className="videoDiscription">
          <div className="displayName">Demo of Demigods</div>
          <Link to="/videoPlayer" className="btnLink">Watch</Link>
          <div className="fuctionalities">
            <div className="like" >
              <FaHeart style={{cursor:"pointer"}} onClick={()=>setlikes(likes+1)}/><span style={{margin:"5px"}}>{likes}</span>
            </div>
            <div className="comment" style={{marginLeft:"35px"}}>
              <FaComment style={{cursor:"pointer"}} onClick={()=>setComments(true)}/><span style={{margin:"5px"}}>1</span>
            </div>
            <div className="share" style={{marginLeft:"35px"}}>
              <FaShareAlt style={{cursor:"pointer"}}/>
            </div>
          </div>
          <div className="vdetail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, perspiciatis.</div>
        </div>
        <div className="videoImage">
          <img
            src="https://th.bing.com/th/id/R.7f34a70a5bee79488309934920d316cb?rik=IRJI6pSFo6OI%2fQ&riu=http%3a%2f%2fallpicts.in%2fwp-content%2fuploads%2f2018%2f03%2fNatural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg&ehk=JPI0MFI04N62Xtd7MT1P2sw4vJgwODLsp1EcpgvuGFo%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
        </div>
      </div>
      {comments && <><p>post acomment</p>
        <input type="text" />
        <button>Post</button></>}
      <Comments/>
    </div>
  );
};

export default VideoDisplayer;
