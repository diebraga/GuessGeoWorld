import {
  useDisclosure,
  Slide,
  Box,
  useColorModeValue,
  Link as ChakraLink,
  Heading,
  HStack,
  Icon,
  Text,
  useColorMode,
  VStack
} from '@chakra-ui/react'
import Hamburger from 'hamburger-react'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import { GoMute, GoUnmute } from 'react-icons/go'
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { useMainMenu } from '../../hooks/useMainMenu'
import { useSound } from '../../hooks/useSound';

export default function Header() {
  const { menuIsOpen, onToggleMenu } = useMainMenu()

  const { colorMode, toggleColorMode } = useColorMode();

  const { setSoundVolume, soundVolume } = useSound()

  function toggleSound() {
    if (soundVolume === 0) {
      setSoundVolume(0.2)
    } else {
      setSoundVolume(0.0)
    }
  }

  return (
    <Box>
      <Box position="sticky" style={{ zIndex: 20 }} pl="1.5" pt="0.5">
        <Hamburger toggled={menuIsOpen} toggle={onToggleMenu} />
      </Box>
      <Slide direction='left' in={menuIsOpen} style={{ zIndex: 10 }}>
        <VStack
          p='40px'
          bg={useColorModeValue('white', 'gray.700')}
          h="100%"
          w="100%"
        >
          <VStack spacing='6' mt="60px">
            <Link href='/'>
              <Heading as={ChakraLink} textAlign='center' onClick={onToggleMenu}>
                <HStack>
                  <Text as='span'>Home</Text> <Icon as={AiFillHome} />
                </HStack>
              </Heading>
            </Link>
            <ChakraLink onClick={toggleSound}>
              <Heading>
                <Text as='span'>Sound</Text> <Icon as={soundVolume === 0 ? GoMute : GoUnmute} />
              </Heading>
            </ChakraLink>
            <ChakraLink onClick={toggleColorMode}>
              <Heading>
                <Text as='span'>Theme</Text> <Icon as={colorMode === "dark" ? RiSunLine : RiMoonFill} />
              </Heading>
            </ChakraLink>
          </VStack>
        </VStack>
      </Slide>
    </Box>
  )
}