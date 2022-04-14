import { Box, Tag, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

type FoundCountries = {
  name: string
  id: string
}

type FoundWorldCountriesListProps = {
  country: FoundCountries
  foundCountries: FoundCountries[]
}

export function FoundWorldCountriesList({ country, foundCountries }: FoundWorldCountriesListProps) {
  const messagesEndRef = useRef<any>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [foundCountries]);

  return (
    <>
      <Tag>
        <Text fontSize={{ base: '12px', md: '15px', lg: '18px', xl: "20px" }}>
          {country.name}
        </Text>
      </Tag>
      <Box ref={messagesEndRef} />
    </>
  )
}
