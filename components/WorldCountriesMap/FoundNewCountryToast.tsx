import { Box, useColorModeValue, Flex, Icon, Text } from "@chakra-ui/react";
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { localeType } from "../../@types/localeType";
import { normalizeWorldCountriesLanguage } from "../../translations/world-countries/normalizeWorldCountriesLanguage";

type FoundNewCountryToastProps = {
  countryName: string
  locale: localeType
}

export function FoundNewCountryToast({ countryName, locale }: FoundNewCountryToastProps) {
  const result = (Date.now() % 2 == 0) ? "even" : "odd";

  const { translation } = normalizeWorldCountriesLanguage(locale)

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
          {translation.a_new_country_was_found}
          &nbsp;
          <Box fontWeight='thin' color={useColorModeValue("blue.500", "blue.400")}>
            {countryName}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
