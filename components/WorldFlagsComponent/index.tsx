import { Box, Heading } from "@chakra-ui/react";
import { WorldFlagsCarousel } from "./WorldFlagsCarousel";
import { allCountriesFlags } from "../../utils/allCountriesFlags";
import { useEffect, useState } from "react";
import { useRef } from "react";

type AllCountryFlagsTypes = {
  name: string
  code: string
  found: boolean
}
// .sort(() => Math.random() - 0.5)
export function WorldFlagsComponent() {
  const [AllCountriesFlags, setAllCountriesFlags] = useState<AllCountryFlagsTypes[]>(allCountriesFlags)

  const [countryFlagInput, setCountryFlagInput] = useState("")

  const carouselRef = useRef(null)

  const [allFlagsIndex, setAllFlagsIndex] = useState(0)

  const currentFlag = allCountriesFlags[allFlagsIndex]

  const updatedCurrentFlag = AllCountriesFlags.find(flag => flag.code === currentFlag.code)

  console.log(updatedCurrentFlag)
  console.log(AllCountriesFlags)

  function findCountryFlag() {
    if (countryFlagInput === currentFlag.code) {
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
