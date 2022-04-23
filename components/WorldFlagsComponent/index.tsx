import { Box, Heading, useToast } from "@chakra-ui/react";
import { WorldFlagsCarousel } from "./WorldFlagsCarousel";
import { allCountriesFlags } from "../../utils/allCountriesFlags";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useSound } from "../../hooks/useSound";
import { FoundNewFlagToast } from "./FoundNewFlagToast";

type AllCountryFlagsTypes = {
  name: string
  code: string
  found: boolean
}

const randomFlags = allCountriesFlags.sort(() => Math.random() - 0.5)

export function WorldFlagsComponent() {
  const [AllCountriesFlags, setAllCountriesFlags] = useState<AllCountryFlagsTypes[]>(randomFlags)

  const [countryFlagInput, setCountryFlagInput] = useState("")

  const carouselRef = useRef(null)

  const toast = useToast()

  const { startSuccessSound } = useSound()

  const [allFlagsIndex, setAllFlagsIndex] = useState(0)

  const currentFlag = allCountriesFlags[allFlagsIndex]

  const updatedCurrentFlag = AllCountriesFlags.find(flag => flag.code === currentFlag.code)

  console.log(updatedCurrentFlag)
  console.log(AllCountriesFlags)

  function findCountryFlag() {
    if (countryFlagInput === currentFlag.code) {
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

  useEffect(() => {
    findCountryFlag()
  }, [countryFlagInput])

  return (
    <Box pl={["0px", "15%", "20%", "30%"]} pr={["0px", "15%", "20%", "30%"]}>
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
      />
    </Box>
  )
}
