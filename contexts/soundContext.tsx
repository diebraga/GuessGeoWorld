import { useState } from 'react'
import { createContext, ReactNode } from 'react'
import { useRef } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface SoundProviderProp {
  children: ReactNode
}

interface SoundContextProps {
  startSuccessSound: () => void
  pauseSuccessSound: () => void
  soundSuccessRef: any
  startFinishedSound: () => void
  pauseFinishedSound: () => void
  setSoundVolume: (value: number | ((val: number) => number)) => void
  soundVolume: number
}

export const SoundContext = createContext({} as SoundContextProps)

export function SoundProvider({ children }: SoundProviderProp) {
  const soundSuccessRef = useRef(null)
  const soundFinishedRef = useRef(null)
  const [soundVolume, setSoundVolume] = useLocalStorage("soundVolume", 0.2)

  function startSuccessSound() {
    soundSuccessRef.current?.play()
    // som 20%
    soundSuccessRef.current.volume = soundVolume
  }

  function pauseSuccessSound() {
    soundSuccessRef.current?.pause()
  }

  function startFinishedSound() {
    soundFinishedRef.current?.play()
    // som 20%
    soundFinishedRef.current.volume = soundVolume
  }

  function pauseFinishedSound() {
    soundFinishedRef.current?.pause()
  }

  return (
    <SoundContext.Provider value={{
      startSuccessSound,
      pauseSuccessSound,
      soundSuccessRef,
      pauseFinishedSound,
      startFinishedSound,
      setSoundVolume,
      soundVolume
    }}>
      <audio
        ref={soundSuccessRef}
        src="/sounds/success-notification.wav"
      />
      <audio
        ref={soundFinishedRef}
        src="/sounds/finished-game.wav"
      />
      {children}
    </SoundContext.Provider>
  )
}

