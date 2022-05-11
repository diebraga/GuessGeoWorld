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
import { localeType } from '../../@types/localeType';
import { normalizeWorldCountriesLanguage } from '../../translations/world-countries/normalizeWorldCountriesLanguage';

type ModalMissedCountriesProps = {
  isOpen: boolean
  onClose: () => void
  countriesNotFound: { name: string }[]
  onRestart: () => void
  locale: localeType
}

export function ModalMissedCountries({ isOpen, onClose, countriesNotFound, onRestart, locale }: ModalMissedCountriesProps) {
  const { width } = useWindowSize()

  const { translation } = normalizeWorldCountriesLanguage(locale)

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
            ml="4"
            mr="4"
          >
            <ModalHeader> 😔 {translation.game_ended} {translation.countries_missing}</ModalHeader>
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
              <Text mt="2.5">{translation.total}: {countriesNotFound.length}</Text>
            </Box>
            <ModalFooter>
              <Button
                colorScheme='linkedin'
                rightIcon={<Icon as={GiReturnArrow} />}
                onClick={onRestart}
                mr={3}
                size={width as number < 400 ? "sm" : "md"}
              >
                {translation.play_again}
              </Button>
              <Button
                onClick={onClose}
                colorScheme="red"
                rightIcon={<Icon as={AiFillHome} />}
                size={width as number < 400 ? "sm" : "md"}
              >
                {translation.home}
              </Button>
            </ModalFooter>
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  )
}
