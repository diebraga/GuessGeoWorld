import { Box, Input } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import Flag from 'react-world-flags'

type WorldFlagCardProps = {
  code: string
  setCountryFlagInput: Dispatch<SetStateAction<string>>
}

export function WorldFlagCard({ code, setCountryFlagInput }: WorldFlagCardProps) {
  return (
    <Box position='relative' className='centered-element-carousel'>
      <Box p='2'>
        <Input onChange={e => setCountryFlagInput(e.target.value)} textAlign='center' />
      </Box>
      <Box>
        <Flag code={code} />
      </Box>
    </Box>
  )
}
