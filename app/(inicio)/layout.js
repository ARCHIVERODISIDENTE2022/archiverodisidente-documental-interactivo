'use client'

import AudioPlayer from '@/components/AudioPlayer'

export default function LayoutInicio ({ children }) {
  const musicaInicio = '/audio/home.mp3'

  return (
    <>
      <AudioPlayer src={musicaInicio} />
      {children}
    </>
  )
}
