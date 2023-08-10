'use client'

import React, { useRef, useEffect, useState } from 'react'

const AudioPlayer = ({ src }) => {
  const [playing, setPlaying] = useState(true)
  const audioRef = useRef(null);

  useEffect(() => {
    handlePlay()
  }, [!playing])

  const handlePlay = () => {
    audioRef.current.play()
    setPlaying(true)
  }

  // const handlePause = () => {
  //   audioRef.current.pause()
  //   setPlaying(false)
  // }

  return <audio loop ref={audioRef} src={src} controls controlsList='nodownload noplaybackrate novolume' />
}

export default AudioPlayer
