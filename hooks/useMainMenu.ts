import { useContext } from "react"
import { MainMenuContext } from "../contexts/mainMenuContext"

export function useMainMenu() {
  const context = useContext(MainMenuContext)

  return context
}