import { Box, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

type FoundCountries = {
  name: string
  id: string
}

type FoundWorldCountriesListProps = {
  country: FoundCountries
  lastCountryFound: FoundCountries | undefined
  foundCountries: FoundCountries[]
}

export function FoundWorldCountriesList({ country, lastCountryFound, foundCountries }: FoundWorldCountriesListProps) {
  const messagesEndRef = useRef<any>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [foundCountries]);

  return (
    <>
      <Text fontSize={{ base: '12px', md: '15px', lg: '18px', xl: "20px" }}>
        {country.name} &nbsp;{foundCountries.length > 0 && lastCountryFound?.id !== country.id && `-`}
      </Text>
      <Box ref={messagesEndRef} />
    </>
  )
}
