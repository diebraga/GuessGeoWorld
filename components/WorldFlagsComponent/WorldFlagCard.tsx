import { Box, Center, Heading, Input, useColorModeValue } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import Flag from 'react-world-flags'

type AllCountryFlagsTypes = {
  name: string
  found: boolean
  code: string
}

type WorldFlagCardProps = {
  code: string
  currentFlagWasFound: boolean
  name: string
  isDisabled: boolean
  setCountryFlagInput: Dispatch<SetStateAction<string>>
  countryFlagInput: string
  currentFlag: AllCountryFlagsTypes
}

export function WorldFlagCard({ code, currentFlagWasFound, name, isDisabled, setCountryFlagInput, countryFlagInput, currentFlag }: WorldFlagCardProps) {
  // const currFlagEl = document.getElementById(currentFlag.code + currentFlag.name)
  // qatarFlagEl.style.height = "185px"
  return (
    <Box position='relative' className='centered-element-carousel' h='99%'>
      <Box textAlign='center' mx='2' my='2'>
        {currentFlagWasFound === true && (
          <Heading as='h2' fontSize='x-large'>
            {name}
          </Heading>
        )}
        {!currentFlagWasFound && (
          <Input
            maxLength={30}
            isDisabled={isDisabled}
            onChange={e => setCountryFlagInput(e.target.value)}
            value={countryFlagInput}
            textAlign='center' />
        )}
      </Box>
      <Center position='relative' className='centered-element'>
        <Center border='1px' borderColor={useColorModeValue("gray.500", "gray.600")} minW="100%" maxWidth='100%'>
          <Flag code={code} id={code + name} />
        </Center>
      </Center>
    </Box>
  )
}
