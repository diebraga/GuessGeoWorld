import { Box, Button, Heading, HStack, Input, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

type WorldCountriesMapInputProps = {
  addCountry: (e: FormEvent) => void
  country: string
  setCountry: Dispatch<SetStateAction<string>>
  onLeaveGame: () => void
  invalidFeedback: string
}

export function WorldCountriesMapInput({ addCountry, country, setCountry, onLeaveGame, invalidFeedback }: WorldCountriesMapInputProps) {
  const { width } = useWindowSize()

  return (
    <Box as="form" onSubmit={addCountry} pl="3" pr="3">
      <VStack spacing="2">
        <Heading>
          Guess country
        </Heading>
        <Input
          onChange={e => setCountry(e.target.value)}
          value={country}
          textAlign="center"
          isInvalid={invalidFeedback.length > 0}
        />
        {invalidFeedback.length > 0 && <Text fontSize='xs' color={useColorModeValue("red.500", "red.400")}>{invalidFeedback}</Text>}
        <HStack spacing='1'>
          <Button type="button" colorScheme="red" onClick={onLeaveGame} size={width as number < 400 ? "sm" : "md"}>Leave</Button>
          <Button type="submit" colorScheme='linkedin' size={width as number < 400 ? "sm" : "md"}>Guess</Button>
        </HStack>
      </VStack>
    </Box>
  )
}
