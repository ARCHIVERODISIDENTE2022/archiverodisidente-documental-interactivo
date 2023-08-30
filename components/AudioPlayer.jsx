'use client'

import React, { useRef, useEffect, useState } from 'react'
import { GrPlayFill, GrPause } from 'react-icons/gr'

const AudioPlayer = ({ src }) => {
  const [playing, setPlaying] = useState(true)
  const audioRef = useRef(null)

  useEffect(() => {
    playing ? handlePlay() : handlePause()
  }, [playing])

  const handleClick = () => {
    setPlaying(!playing)
  }

  const handlePlay = () => {
    audioRef.current.play()
    setPlaying(true)
  }

  const handlePause = () => {
    audioRef.current.pause()
    setPlaying(false)
  }

  return (
    <div>
      <audio ref={audioRef} src={src} />
      <button onClick={handleClick}>{playing ? <GrPause /> : <GrPlayFill />} </button>
    </div>
  )
}

export default AudioPlayer
