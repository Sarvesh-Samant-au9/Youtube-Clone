// import VideoList from "./VideoList";
import "./VideoItem.css";
const VideoItem = ({ videoArray, onVideoSelect }) => {
  return (
    <div
      className="item video-item"
      onClick={() => {
        onVideoSelect(videoArray);
      }}
    >
      <img
        className="ui image"
        src={videoArray.snippet.thumbnails.high.url}
        alt={videoArray.snippet.title}
      />
      <div className="content">
        <div className="header">{videoArray.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
// const VideoItem = (props) => {
//   // console.log(props);
//   return (
//     <div>
//       <h1>{props.videoArray.snippet.title}</h1>
//     </div>
//   );
// };
// export default VideoItem;
