import { Box, Heading, Input } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import Flag from 'react-world-flags'

type WorldFlagCardProps = {
  code: string
  currentFlagWasFound: boolean
  name: string
  isDisabled: boolean
  setCountryFlagInput: Dispatch<SetStateAction<string>>
  countryFlagInput: string
}

export function WorldFlagCard({ code, currentFlagWasFound, name, isDisabled, setCountryFlagInput, countryFlagInput }: WorldFlagCardProps) {
  return (
    <Box position='relative' className='centered-element-carousel' h='99%'>
      <Box textAlign='center' mx='2' my='2'>
        {currentFlagWasFound === true && (
          <Heading as='h2'>
            {name}
          </Heading>
        )}
        {!currentFlagWasFound && (
          <Input
            isDisabled={isDisabled}
            onChange={e => setCountryFlagInput(e.target.value)}
            value={countryFlagInput}
            textAlign='center' />
        )}
      </Box>
      <Box>
        <Flag code={code} />
      </Box>
    </Box>
  )
}
