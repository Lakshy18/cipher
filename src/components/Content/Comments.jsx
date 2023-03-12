import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";


const Comments = () => {
    const [commentLikes, setCommentsLikes] = useState(0)
  return (
    <div>
      <div className="commnetsContainer">
        <div className="personName">LakshyRaj singh</div>
        <div className="comment">great video !</div>
        <div className="ommentLikes"><FaHeart onClick={()=>setCommentsLikes(commentLikes+1)}/><span>{commentLikes}</span></div>
        <div className="rply">reply</div>
      </div>
    </div>
  );
};

export default Comments;
