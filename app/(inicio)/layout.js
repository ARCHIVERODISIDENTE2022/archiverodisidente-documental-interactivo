'use client'

import React, { useRef, useEffect } from 'react'

export default function LayoutInicio ({ children }) {
  const musicaInicio = '/audio/home.mp3'
  const audio = useRef(null)
  useEffect(() => {
    const reproducirMusicaInicio = () => audio.current.play()
    window.addEventListener('click', reproducirMusicaInicio)
    return () => window.removeEventListener('click', reproducirMusicaInicio)
  }, [])

  return (
    <>
      {children}
      <audio ref={audio} src={musicaInicio} />
    </>
  )
}
