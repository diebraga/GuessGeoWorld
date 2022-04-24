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

  const { startSuccessSound, startFinishedSound } = useSound()

  const [allFlagsIndex, setAllFlagsIndex] = useState(0)

  const currentFlag = allCountriesFlags[allFlagsIndex]

  const updatedCurrentFlag = AllCountriesFlags.find(flag => flag.code === currentFlag.code)

  const notFoundFlagsLenght = AllCountriesFlags.filter(flag => flag.found === false).length

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

  function onRestartNewGame() {
    completedFlagsModalOnClose()
    setAllCountriesFlags(randomFlags.sort(() => Math.random() - 0.5))
    carouselRef.current.goToSlide(0)
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

  return (
    <Box pl={["0px", "15%", "20%", "30%"]} pr={["0px", "15%", "20%", "30%"]}>
      <FoundAllFlagsModal
        onClose={() => router.push('/')}
        onRestart={onRestartNewGame}
        isOpen={completedFlagsModalIsOpen}
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
        onLeave={() => alert('leave')}
        flagFound={updatedCurrentFlag.found}
      />
    </Box>
  )
}
