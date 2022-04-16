import { Box, Button, Heading, HStack, Input, VStack } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

type WorldCountriesMapInputProps = {
  country: string
  setCountry: Dispatch<SetStateAction<string>>
  onLeaveGame: () => void
}

export function WorldCountriesMapInput({ country, setCountry, onLeaveGame }: WorldCountriesMapInputProps) {
  const { width } = useWindowSize()

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
        <HStack spacing='1'>
          <Button type="button" colorScheme="red" onClick={onLeaveGame} size={width as number < 400 ? "sm" : "md"}>Leave</Button>
        </HStack>
      </VStack>
    </Box>
  )
}
