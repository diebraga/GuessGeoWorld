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
  SimpleGrid,
  Heading,
  Flex,
  Center,
} from '@chakra-ui/react'
import { GiReturnArrow } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { useWindowSize } from '../../hooks/useWindowSize';
import Flag from 'react-world-flags'
import Carousel from 'react-multi-carousel';
import { useMainMenu } from '../../hooks/useMainMenu';
import { localeType } from '../../@types/localeType';
import { normalizeWorldFlagsLanguage } from '../../translations/world-flags/normalizeWorldFlagsLanguage';

type AllCountryFlagsTypes = {
  name: string
  code: string
  found: boolean
}

type ModalMissedCountriesProps = {
  isOpen: boolean
  onClose: () => void
  flagsNotFound: AllCountryFlagsTypes[]
  onRestart: () => void
  locale: localeType
}

export function WorldFlagsFailedModal({ isOpen, onClose, flagsNotFound, onRestart, locale }: ModalMissedCountriesProps) {
  const { width } = useWindowSize()

  const { translation } = normalizeWorldFlagsLanguage(locale)

  const { menuIsOpen } = useMainMenu()
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
            <ModalHeader> 😔 {translation.game_ended}, {translation.missing_flags}...</ModalHeader>
            <Box ml="24px" mr="24px" >
              <Carousel
                additionalTransfrom={0}
                arrows={!menuIsOpen}
                autoPlay
                autoPlaySpeed={4000}
                centerMode={false}
                className=""
                containerClass=""
                dotListClass=""
                draggable
                focusOnSelect={false}
                // infinite
                itemClass="container-carousel-item"
                keyBoardControl={false}
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 1
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0
                    },
                    items: 1
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464
                    },
                    items: 1
                  }
                }}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                {flagsNotFound.sort((a, b) => a.name.localeCompare(b.name)).map(flag => {
                  return (
                    <Box position='relative' className='centered-element-carousel' key={flag.code}>
                      <Heading as='h2' fontSize='x-large' textAlign='center' mb='2'>
                        {flag.name}
                      </Heading>
                      <Center>
                        <Flag code={flag.code} key={flag.code} />
                      </Center>
                    </Box>
                  )
                })}
              </Carousel>
              <Text mt="2.5" fontWeight='500'>{translation.total}: {flagsNotFound.length}</Text>
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
