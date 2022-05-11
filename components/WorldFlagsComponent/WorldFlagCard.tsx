import { Box, Center, Heading, Input, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
import Flag from 'react-world-flags'

type WorldFlagCardProps = {
  code: string
  currentFlagWasFound: boolean
  name: string
}

export function WorldFlagCard({ code, currentFlagWasFound, name }: WorldFlagCardProps) {
  const qatarFlag = document.getElementById("qaQatar")

  useEffect(() => {
    if (qatarFlag) qatarFlag.style.height = "280px"
  }, [qatarFlag])

  return (
    <Box position='relative' className='centered-element-carousel' h='99%'>
      <Box textAlign='center' mx='2' my='2'>
        {currentFlagWasFound === true && (
          <Heading as='h2' fontSize='x-large'>
            {name}
          </Heading>
        )}
      </Box>
      <Center position='relative' className='centered-element'>
        <Center border='1px' borderColor={useColorModeValue("gray.500", "gray.600")} minW="100%" maxWidth='100%' h='100%'>
          <Flag code={code} id={code + name} className='world_flag' />
        </Center>
      </Center>
    </Box>
  )
}
