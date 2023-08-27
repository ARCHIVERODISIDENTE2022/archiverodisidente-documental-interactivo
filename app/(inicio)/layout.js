'use client'

import React, { useRef, useEffect } from "react";

export default function LayoutInicio ({ children }) {
  const musicaInicio = '/audio/home.mp3'
  const audio = useRef(null);
  useEffect(() => {
    audio.muted=true
    audio.current.play();
  }, []);

  return (
    <>
      <audio ref={audio} src={musicaInicio} />
      {children}
    </>
  )
}
