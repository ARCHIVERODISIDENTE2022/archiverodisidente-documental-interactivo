import React, { useRef } from "react";
import Youtube from "react-youtube";

const VideoContent = (participanteSeleccionado) => {
  const playerRef = useRef(null);

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Youtube
      ref={playerRef}
      videoId={participanteSeleccionado.categoria[0].videoObjeto}
      opts={opts}
      onReady={onReady}
    />
  );
};

export default VideoContent;
