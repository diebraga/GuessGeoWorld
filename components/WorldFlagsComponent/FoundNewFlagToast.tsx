import { Box, useColorModeValue, Flex, Text } from "@chakra-ui/react";
import { localeType } from "../../@types/localeType";
import { normalizeWorldFlagsLanguage } from "../../translations/world-flags/normalizeWorldFlagsLanguage";

type FoundNewFlagToastProps = {
  flagName: string
  locale: localeType
}

export function FoundNewFlagToast({ flagName, locale }: FoundNewFlagToastProps) {
  const result = (Date.now() % 2 == 0) ? "even" : "odd";

  const { translation } = normalizeWorldFlagsLanguage(locale)

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
          {translation.a_new_flag_was_found}
          &nbsp;
          <Box fontWeight='thin' color={useColorModeValue("blue.500", "blue.400")}>
            {flagName}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
