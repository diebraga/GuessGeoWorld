import { Box, Heading, Input, useDisclosure, useToast } from "@chakra-ui/react";
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

type AllCountryFlagsTypes = {
  name: string
  code: string
  found: boolean
}

const randomFlags = allCountriesFlags.sort(() => Math.random() - 0.5)

export function WorldFlagsComponent() {
  const [AllCountriesFlags, setAllCountriesFlags] = useState<AllCountryFlagsTypes[]>(randomFlags)

  const [countryFlagInput, setCountryFlagInput] = useState("")

  const router = useRouter()

  const carouselRef = useRef(null)

  const toast = useToast()

  const { startSuccessSound, startFinishedSound, startFailedSound } = useSound()

  const [allFlagsIndex, setAllFlagsIndex] = useState(0)

  const currentFlag = allCountriesFlags[allFlagsIndex]

  const updatedCurrentFlag = AllCountriesFlags.find(flag => flag.code === currentFlag.code)

  const notFoundFlagsLenght = AllCountriesFlags.filter(flag => flag.found === false).length

  const notFoundFlags = AllCountriesFlags.filter(flag => flag.found === false)

  console.log(notFoundFlagsLenght)
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

  function onRestartNewGame(): void {
    completedFlagsModalOnClose()
    setAllCountriesFlags(randomFlags.sort(() => Math.random() - 0.5))
    carouselRef.current.goToSlide(0)
    failFlagsModalOnClose()
  }

  function confirmAlertLeaveGame(): void {
    leaveGameOnCloseAlert()
    failFlagsModalOnOpen()
    startFailedSound()
  }

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

  return (
    <Box pl={["0px", "15%", "20%", "30%"]} pr={["0px", "15%", "20%", "30%"]}>
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
        flagIndex={allFlagsIndex}
        onLeave={leaveGameOnOpenAlert}
        flagFound={updatedCurrentFlag.found}
      />
    </Box>
  )
}
