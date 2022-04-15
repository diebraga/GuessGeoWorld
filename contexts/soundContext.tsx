import { createContext, ReactNode } from 'react'
import { useRef } from 'react'

interface SoundProviderProp {
  children: ReactNode
}

interface SoundContextProps {
  startSuccessSound: () => void
  pauseSuccessSound: () => void
  soundSuccessRef: any
  startFinishedSound: () => void
  pauseFinishedSound: () => void
}

export const SoundContext = createContext({} as SoundContextProps)

export function SoundProvider({ children }: SoundProviderProp) {
  const soundSuccessRef = useRef(null)
  const soundFinishedRef = useRef(null)

  function startSuccessSound() {
    soundSuccessRef.current?.play()
    // som 20%
    soundSuccessRef.current.volume = 0.2
  }

  function pauseSuccessSound() {
    soundSuccessRef.current?.pause()
  }

  function startFinishedSound() {
    soundFinishedRef.current?.play()
    // som 20%
    soundFinishedRef.current.volume = 0.2
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
      startFinishedSound
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

