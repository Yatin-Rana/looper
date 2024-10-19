import React, { useState } from "react";

const VideoPlayer = () => {
  const [videoSrc, setVideoSrc] = useState(null);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setVideoSrc(videoUrl);
    }
  };

  return (
    <div className="video-player">
      <input type="file" accept="video/*" onChange={handleVideoUpload} />{" "}
      {videoSrc && (
        <video
          src={videoSrc}
          controls
          autoPlay
          loop
          style={{ width: "100%", height: "auto" }}
        />
      )}{" "}
    </div>
  );
};

export default VideoPlayer;
