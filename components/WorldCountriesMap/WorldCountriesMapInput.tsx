import { Box, Heading, Input, VStack } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { localeType } from "../../@types/localeType";
import { normalizeWorldCountriesLanguage } from "../../translations/world-countries/normalizeWorldCountriesLanguage";

type WorldCountriesMapInputProps = {
  country: string
  setCountry: Dispatch<SetStateAction<string>>
  locale: localeType
}

export function WorldCountriesMapInput({ country, setCountry, locale }: WorldCountriesMapInputProps) {
  return (
    <Box pl="3" pr="3">
      <VStack spacing="2">
        <Heading>
          {normalizeWorldCountriesLanguage(locale).translation.guess_country}
        </Heading>
        <Input
          onChange={e => setCountry(e.target.value)}
          value={country}
          textAlign="center"
        />
      </VStack>
    </Box>
  )
}
