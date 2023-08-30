'use client'

import React, { useRef, useEffect, useState } from 'react'
import { GrPlayFill, GrPause } from 'react-icons/gr'
import './AudioPlayer.css'

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
    <>
      <audio ref={audioRef} src={src} />
      <button id='audio-player' onClick={handleClick}>{playing ? <GrPause /> : <GrPlayFill />} </button>
    </>
  )
}

export default AudioPlayer
