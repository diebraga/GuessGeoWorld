import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  Icon,
  Text,
  useColorModeValue,
  Box,
  Tag,
  Wrap,
} from '@chakra-ui/react'
import { GiReturnArrow } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { useWindowSize } from '../../hooks/useWindowSize';

type ModalMissedCountriesProps = {
  isOpen: boolean
  onClose: () => {}
  countriesNotFound: { name: string }[]
  onRestart: () => void
}

export function ModalMissedCountries({ isOpen, onClose, countriesNotFound, onRestart }: ModalMissedCountriesProps) {
  const { width } = useWindowSize()

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent h="100%" maxW="100%" bg="transparent">
        <Box
          maxW="448px"
          position="absolute"
          top="50%"
          left="50%"
          marginRight="-50%"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <Box
            bg={useColorModeValue("white", "gray.800")}
            borderRadius='md'
            w="100%"
          >
            <ModalHeader> 😔 Game ended, Countries missing...</ModalHeader>
            <Box ml="24px" mr="24px" >
              <Wrap overflowY='scroll' overflowX='hidden' h="135px">
                {countriesNotFound && countriesNotFound.map(country => {
                  return (
                    <Tag key={country.name}>
                      <Text fontSize={{ base: '12px', md: '15px', lg: '18px', xl: "20px" }}>
                        {country.name}
                      </Text>
                    </Tag>
                  )
                })}
              </Wrap>
              <Text mt="2.5">Total: {countriesNotFound.length}</Text>
            </Box>
            <ModalFooter>
              <Button
                colorScheme='linkedin'
                rightIcon={<Icon as={GiReturnArrow} />}
                onClick={onRestart}
                mr={3}
                size={width as number < 400 ? "sm" : "md"}
              >
                Play again
              </Button>
              <Button
                onClick={onClose}
                colorScheme="red"
                rightIcon={<Icon as={AiFillHome} />}
                size={width as number < 400 ? "sm" : "md"}
              >
                Home
              </Button>
            </ModalFooter>
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  )
}
