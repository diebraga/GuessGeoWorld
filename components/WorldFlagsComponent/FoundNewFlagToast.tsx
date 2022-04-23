import { Box, useColorModeValue, Flex, Icon, Text } from "@chakra-ui/react";

type FoundNewFlagToastProps = {
  flagName: string
}

export function FoundNewFlagToast({ flagName }: FoundNewFlagToastProps) {
  const result = (Date.now() % 2 == 0) ? "even" : "odd";

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
        <Text as='span'>{result === "even" ? " 🎉" : "🥳"}</Text>
        &nbsp;
        <Flex>
          A new flag was found
          &nbsp;
          <Box fontWeight='thin' color={useColorModeValue("blue.500", "blue.400")}>
            {flagName}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
