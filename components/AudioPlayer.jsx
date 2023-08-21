'use client'

import React, { useRef, useEffect, useState } from 'react'
import { GrPlayFill, GrPause } from 'react-icons/gr'

const AudioPlayer = ({ src }) => {
  const [playing, setPlaying] = useState(true)
  const [volume, setVolume] = useState(100)
  const audioRef = useRef(null)

  useEffect(() => {
    playing ? handlePlay() : handlePause()
  }, [!playing])

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

  const handleVolume = (e) => {
    setVolume(e.target.value)
    audioRef.current.volume = e.target.value / 100
  }

  return (
    <div>
      <audio ref={audioRef} src={src} />
      <button onClick={handleClick}>{playing ? <GrPause /> : <GrPlayFill />} </button>
      <input type='range' min={0} max={100} value={volume} onChange={handleVolume} />
    </div>
  )
}

export default AudioPlayer
