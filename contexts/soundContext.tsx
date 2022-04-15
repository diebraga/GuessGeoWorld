import { createContext, ReactNode } from 'react'
import { useRef } from 'react'

interface SoundProviderProp {
  children: ReactNode
}

interface SoundContextProps {
  startSound: () => void
  pauseSound: () => void
  soundRef: any
}

export const SoundContext = createContext({} as SoundContextProps)

export function SoundProvider({ children }: SoundProviderProp) {
  const soundRef = useRef(null)

  function startSound() {
    soundRef.current?.play()
    // som 20%
    soundRef.current.volume = 0.2
  }

  function pauseSound() {
    soundRef.current?.pause()
  }

  return (
    <SoundContext.Provider value={{
      startSound,
      pauseSound,
      soundRef,
    }}>
      <audio
        ref={soundRef}
        src="/sounds/success-notification.wav"
      />

      {children}
    </SoundContext.Provider>
  )
}

