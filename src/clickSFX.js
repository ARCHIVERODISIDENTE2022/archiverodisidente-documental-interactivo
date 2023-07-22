'use client'

export default function clickSFX () {
  const audio = new Audio('/audio/click.wav')
  return audio.play()
}
