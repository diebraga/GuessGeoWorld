import { Box, Heading, Icon, IconButton, useDisclosure, useToast } from "@chakra-ui/react";
import { WorldFlagsCarousel } from "./WorldFlagsCarousel";
import { allCountriesFlags } from "../../utils/allCountriesFlags";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useSound } from "../../hooks/useSound";
import { FoundNewFlagToast } from "./FoundNewFlagToast";
import { findCountryFlagHelper } from "../../utils/findCountryFlagHelper";
import { FoundAllFlagsModal } from "./FoundAllFlagsModal";
import { useRouter } from "next/router";
import { LeaveCountryFlagsAlert } from "./LeaveCountryFlagsAlert";
import { WorldFlagsFailedModal } from "./WorldFlagsFailedModal";
import { useCounter } from "../../hooks/useCounter";
import { WorldFlagsFoundStatus } from "./WorldFlagsFoundStatus";
import { WorldFlagsModalHelp } from "./WorldFlagsModalHelp";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { IoMdHelp } from "react-icons/io";

type AllCountryFlagsTypes = {
  name: string
  code: string
  found: boolean
}

const randomFlags = allCountriesFlags.sort(() => Math.random() - 0.5)

export function WorldFlagsComponent() {
  const [AllCountriesFlags, setAllCountriesFlags] = useState<AllCountryFlagsTypes[]>(randomFlags)
  const [worldFlagsModalHelpWillNotOpen, setWorldFlagsModalHelpWllNotOpen] = useLocalStorage("worldFlagsModalHelpWillOpen", false)

  const [countryFlagInput, setCountryFlagInput] = useState("")

  const router = useRouter()

  const carouselRef = useRef(null)

  const toast = useToast()

  const { startSuccessSound, startFinishedSound, startFailedSound } = useSound()

  const secondsTimer = 2400

  const {
    currentSeconds,
    startCountSeconds,
    stopCountSeconds,
    timeIsRunning,
    clearCountSeconds
  } = useCounter(secondsTimer)

  const [allFlagsIndex, setAllFlagsIndex] = useState(0)

  const currentFlag = allCountriesFlags[allFlagsIndex]

  const updatedCurrentFlag = AllCountriesFlags.find(flag => flag.code === currentFlag.code)

  const notFoundFlagsLenght = AllCountriesFlags.filter(flag => flag.found === false).length

  const foundFlagsLenght = AllCountriesFlags.filter(flag => flag.found === true).length

  const notFoundFlags = AllCountriesFlags.filter(flag => flag.found === false)

  console.log(updatedCurrentFlag)

  const isLastItem = allFlagsIndex + 1 === carouselRef.current?.state.totalItems || 0

  function findCountryFlag() {
    if (findCountryFlagHelper(countryFlagInput) === currentFlag.code.toLocaleLowerCase()) {
      if (notFoundFlagsLenght !== 1) {
        if (isLastItem) {
          carouselRef.current.goToSlide(allFlagsIndex - 1)
        } else {
          carouselRef.current.goToSlide(allFlagsIndex + 1)
        }
      }
      startSuccessSound()
      toast({
        position: 'top',
        render: () => <FoundNewFlagToast flagName={currentFlag.name} />
      })
      setAllCountriesFlags(
        (data) => {
          const result = data.map((flag) => {
            if (flag.code === currentFlag.code) {
              return {
                ...flag,
                found: true
              }
            } else {
              return flag
            }
          })
          return result
        }
      )
      setCountryFlagInput('')
    }
  }

  const {
    isOpen: completedFlagsModalIsOpen,
    onOpen: completedFlagsModalOnOpen,
    onClose: completedFlagsModalOnClose
  } = useDisclosure()

  const {
    isOpen: leaveGameIsOpenAlert,
    onOpen: leaveGameOnOpenAlert,
    onClose: leaveGameOnCloseAlert
  } = useDisclosure()

  const {
    isOpen: failFlagsModalIsOpen,
    onOpen: failFlagsModalOnOpen,
    onClose: failFlagsModalOnClose
  } = useDisclosure()

  const {
    isOpen: modalHelplIsOpen,
    onOpen: modalHelplOnOpen,
    onClose: modalHelplOnClose
  } = useDisclosure()

  useEffect(() => {
    if (!worldFlagsModalHelpWillNotOpen) {
      modalHelplOnOpen()
    } else if (worldFlagsModalHelpWillNotOpen && !modalHelplIsOpen) {
      startCountSeconds()
    }
  }, [worldFlagsModalHelpWillNotOpen])

  function onRestartNewGame(): void {
    completedFlagsModalOnClose()
    setAllCountriesFlags(randomFlags.sort(() => Math.random() - 0.5))
    carouselRef.current.goToSlide(0)
    failFlagsModalOnClose()
    startCountSeconds()
  }

  function confirmAlertLeaveGame(): void {
    leaveGameOnCloseAlert()
    failFlagsModalOnOpen()
    startFailedSound()
    clearCountSeconds()
  }

  useEffect(() => {
    if (currentSeconds === 0) {
      confirmAlertLeaveGame()
    }
  }, [currentSeconds])

  useEffect(() => {
    if (notFoundFlagsLenght === 0) {
      completedFlagsModalOnOpen()
      startFinishedSound()
    }
  }, [notFoundFlagsLenght])

  useEffect(() => {
    findCountryFlag()
  }, [countryFlagInput])

  const cancelRef = useRef()

  function onStartGame() {
    startCountSeconds()
    modalHelplOnClose()
  }

  return (
    <Box pl={["0px", "15%", "20%", "30%"]} pr={["0px", "15%", "20%", "30%"]}>
      <WorldFlagsModalHelp
        allFlagsLenght={AllCountriesFlags.length}
        isOpen={modalHelplIsOpen}
        onClose={onStartGame}
        setWorldFlagsModalHelpWllNotOpen={setWorldFlagsModalHelpWllNotOpen}
        worldFlagsModalHelpWillNotOpen={worldFlagsModalHelpWillNotOpen}
        totalSeconds={secondsTimer}
      />

      <FoundAllFlagsModal
        onClose={() => router.push('/')}
        onRestart={onRestartNewGame}
        isOpen={completedFlagsModalIsOpen}
      />

      <LeaveCountryFlagsAlert
        isOpen={leaveGameIsOpenAlert}
        onClose={leaveGameOnCloseAlert}
        leastDestructiveRef={cancelRef}
        onConfirm={confirmAlertLeaveGame}
      />

      <WorldFlagsFailedModal
        onClose={() => router.push('/')}
        isOpen={failFlagsModalIsOpen}
        onRestart={onRestartNewGame}
        flagsNotFound={notFoundFlags}
      />
      <Box left='10px' top='45px' position='absolute'>
        <IconButton
          onClick={modalHelplOnOpen}
          aria-label='Open help'
          icon={<Icon as={IoMdHelp} />}
        />
      </Box>

      <Heading mb='1' textAlign='center' as="h1" mt="10%">
        Name this country
      </Heading>

      <WorldFlagsCarousel
        countryFlagInput={countryFlagInput}
        setCountryFlagInput={setCountryFlagInput}
        isDisabled={updatedCurrentFlag.found}
        allFlags={AllCountriesFlags}
        setAllFlagsIndex={setAllFlagsIndex}
        carouselRef={carouselRef}
        currentFlag={currentFlag}
      />
      <WorldFlagsFoundStatus
        totalLenght={AllCountriesFlags.length}
        foundLenght={foundFlagsLenght}
        currentFlagNumber={allFlagsIndex + 1}
        onLeave={leaveGameOnOpenAlert}
        flagFound={updatedCurrentFlag.found}
        currentSeconds={currentSeconds}
      />
    </Box >
  )
}
