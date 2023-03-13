import { VIDEO_NO } from "../types";



export const videoNumber = (videoNum) => {
  return {
    type: VIDEO_NO,
    payload: videoNum,
  };
};
