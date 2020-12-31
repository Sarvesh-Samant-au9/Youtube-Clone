import axios from "axios";
const KEY = `AIzaSyAc00qqn0e9bb49K3tFsTpQ1GQThb46SFc`;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
