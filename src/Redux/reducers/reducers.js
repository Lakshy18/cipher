import { COMMENTS_LIKES_NO, COMMENTS_DATA, VIDEO_NO, MOVIE_DETAILS } from "../types";

const inputLocal = localStorage.getItem("stream_data");
const commentLikesLocal = localStorage.getItem("comment_likes"); 
const localMovieDetails = localStorage.getItem("movie_details");

const initialState = {
    movieInput: localMovieDetails ? JSON.parse(localMovieDetails) : [],
  inputData: inputLocal ? JSON.parse(inputLocal) : [],
  inputCommentsLike :commentLikesLocal? JSON.parse(commentLikesLocal) : [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    
      case VIDEO_NO:
      return {
        ...state,
        showNum: action.payload,
      };
    default:
      return {
        ...state,
        showNum: 0,
      };
  }
};
