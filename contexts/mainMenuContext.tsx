import { useDisclosure } from '@chakra-ui/react'
import { createContext, ReactNode } from 'react'

interface MainMenuProviderProp {
  children: ReactNode
}

interface MainMenuContextProps {
  menuIsOpen: boolean
  onToggleMenu: () => void
}

export const MainMenuContext = createContext({} as MainMenuContextProps)

export function MainMenuProvider({ children }: MainMenuProviderProp) {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <MainMenuContext.Provider value={{
      menuIsOpen: isOpen,
      onToggleMenu: onToggle
    }}>
      {children}
    </MainMenuContext.Provider>
  )
}

