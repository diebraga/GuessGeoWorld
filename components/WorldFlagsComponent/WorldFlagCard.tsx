import { Box, Heading, Center } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import Flag from 'react-world-flags'

type WorldFlagCardProps = {
  code: string
  currentFlagWasFound: boolean
  name: string
}

export function WorldFlagCard({ code, currentFlagWasFound, name }: WorldFlagCardProps) {
  return (
    <Box position='relative' className='centered-element-carousel'>
      <Center>
        {currentFlagWasFound === true && (
          <Heading as='h2'>
            {name}
          </Heading>
        )}
      </Center>
      <Box>
        <Flag code={code} />
      </Box>
    </Box>
  )
}
