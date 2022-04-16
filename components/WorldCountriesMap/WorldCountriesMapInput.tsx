import { Box, Heading, Input, VStack } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

type WorldCountriesMapInputProps = {
  country: string
  setCountry: Dispatch<SetStateAction<string>>
}

export function WorldCountriesMapInput({ country, setCountry }: WorldCountriesMapInputProps) {
  return (
    <Box pl="3" pr="3">
      <VStack spacing="2">
        <Heading>
          Guess country
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
