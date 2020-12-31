// import React from "react";
// import VideoItem from "./VideoItem";

// const VideoList = ({ getVideos }) => {
//   // console.log(getVideos);
//   const RenderList = getVideos.map((video, index) => {
//     return <VideoItem key={index} videoArray={video} />;
//   });

//   // Destructure props.getVideos to getVideos
//   return (
//     <h1>
//       Video List Here!!
//       <div> We Have {getVideos.length}</div>
//       <div>{RenderList}</div>
//     </h1>
//   );
// };
// export default VideoList;
import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ getVideos, onVideoSelect }) => {
  const RenderList = getVideos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        videoArray={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return (
    <div>
      <div className="ui relaxed divided list">{RenderList}</div>
    </div>
  );
};
export default VideoList;
