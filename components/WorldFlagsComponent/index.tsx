import { Box, Input } from "@chakra-ui/react";
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

  console.log(currentFlag)
  console.log(AllCountriesFlags)

  function removeFlagFromArray() {
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
    removeFlagFromArray()
  }, [countryFlagInput])

  return (
    <Box pl={["0px", "15%", "20%", "30%"]} pr={["0px", "15%", "20%", "30%"]}>
      <Box p='2'>
        <Input
          onChange={e => setCountryFlagInput(e.target.value)}
          value={countryFlagInput}
          textAlign='center' />
      </Box>

      <WorldFlagsCarousel
        allFlags={AllCountriesFlags}
        setAllFlagsIndex={setAllFlagsIndex}
        carouselRef={carouselRef}
      />
    </Box>
  )
}
