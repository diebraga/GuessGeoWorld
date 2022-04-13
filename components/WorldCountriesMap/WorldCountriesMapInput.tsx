import { Box, Button, Heading, HStack, Input, VStack } from "@chakra-ui/react";
import { Dispatch, FormEvent, SetStateAction } from "react";

type WorldCountriesMapInputProps = {
  addCountry: (e: FormEvent) => void
  country: string
  setCountry: Dispatch<SetStateAction<string>>
}

export function WorldCountriesMapInput({ addCountry, country, setCountry }: WorldCountriesMapInputProps) {
  return (
    <Box as="form" onSubmit={addCountry} pl="3" pr="3">
      <VStack spacing="2">
        <Heading>
          Guess country
        </Heading>
        <Input
          onChange={e => setCountry(e.target.value)}
          value={country}
        />
        <HStack spacing='1'>
          <Button type="button" colorScheme="red">Leave</Button>
          <Button type="submit" colorScheme='linkedin'>Guess</Button>
        </HStack>
      </VStack>
    </Box>
  )
}
