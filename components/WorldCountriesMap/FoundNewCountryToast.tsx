import { Box, useColorModeValue, Flex, Icon } from "@chakra-ui/react";
import { RiCheckboxCircleFill } from 'react-icons/ri'

type FoundNewCountryToastProps = {
  countryName: string
}

export function FoundNewCountryToast({ countryName }: FoundNewCountryToastProps) {
  return (
    <Flex
      maxW="sm"
      w="full"
      mx="auto"
      bg={useColorModeValue("white", "gray.800")}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
    >
      <Flex w={2} bg={useColorModeValue("blue.500", "blue.400")}></Flex>

      <Flex alignItems="center" px={2} py={3}>
        &nbsp;
        <Icon as={RiCheckboxCircleFill} boxSize={5} color={useColorModeValue("blue.500", "blue.400")} />
        &nbsp;
        <Flex>
          A new country was found
          &nbsp;
          <Box fontWeight='thin' color={useColorModeValue("blue.500", "blue.400")}>
            {countryName}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
