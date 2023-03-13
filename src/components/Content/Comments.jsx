import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const Comments = () => {
  const [commentLikes, setCommentsLikes] = useState(0);
  const [commentinf, setCommentinf] = useState("");
  const [comment, setComment] = useState("");

  const handelChange = (e) => {
    const cmt = e.target.value;
    setCommentinf(cmt);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    setComment(commentinf);
  };
  const handelLikes = () => {
    setCommentsLikes(commentLikes + 1);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <form onSubmit={handelSubmit}>
          <input
            type="text"
            placeholder="Post a comment!"
            value={commentinf}
            onChange={handelChange}
          />
          <button type="submit">Post</button>
        </form>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="commnetsContainer">
          <div className="fff">
            <div className="personName">User12345</div>
            <div className="ommentLikes">
              <FaHeart
                onClick={handelLikes}
                style={{
                  backgroundColor: "aliceblue",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              />
              <span style={{ backgroundColor: "aliceblue" }}>
                {commentLikes}
              </span>
            </div>
          </div>
          <div className="commentdis">{comment}</div>
          <div className="rply">reply</div>
        </div>
      </div>
    </>
  );
};

export default Comments;
