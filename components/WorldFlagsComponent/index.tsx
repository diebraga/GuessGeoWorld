import { Box } from "@chakra-ui/react";
import { WorldFlagsCarousel } from "./WorldFlagsCarousel";
import { allCountriesFlags } from "../../utils/allCountriesFlags";
import { useEffect, useState } from "react";

type AllCountryFlagsTypes = {
  name: string
  code: string
}
// .sort(() => Math.random() - 0.5)
export function WorldFlagsComponent() {
  const [AllCountriesFlags, setAllCountriesFlags] = useState<AllCountryFlagsTypes[]>(allCountriesFlags)
  const [countryFlagInput, setCountryFlagInput] = useState("")

  const [allFlagsIndex, setAllFlagsIndex] = useState(0)
  const currentFlag = allCountriesFlags[allFlagsIndex]

  console.log(countryFlagInput)
  console.log(currentFlag)

  function inputRightFlag() {
    if (countryFlagInput === currentFlag.code) {
      alert('you got it!')
    }
  }

  useEffect(() => {
    inputRightFlag()
  }, [countryFlagInput])

  return (
    <Box pl={["0px", "15%", "20%", "30%"]} pr={["0px", "15%", "20%", "30%"]}>
      <WorldFlagsCarousel
        allFlags={AllCountriesFlags}
        allFlagsIndex={allFlagsIndex}
        setAllFlagsIndex={setAllFlagsIndex}
        setCountryFlagInput={setCountryFlagInput} />
    </Box>
  )
}
