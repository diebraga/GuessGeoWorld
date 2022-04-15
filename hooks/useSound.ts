import { useContext } from "react"
import { SoundContext } from "../contexts/soundContext"

export function useSound() {
  const context = useContext(SoundContext)

  return context
}