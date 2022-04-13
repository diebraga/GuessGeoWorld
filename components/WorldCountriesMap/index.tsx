import { Box, Button, Flex, Heading, HStack, Input, Text, VStack, Wrap } from "@chakra-ui/react";
import { FormEvent, memo, useRef, useState } from "react";
import {
  Sphere,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import MAP from '../../map/geoUrl.json'
import { AllCountries } from "../../utils/allCountries";
import { findCountryHelper } from "../../utils/findCountriesHelper";

type FoundCountries = {
  name: string
  id: string
}

const WorldCountriesMap = () => {
  const [country, setCountry] = useState('')

  const countriesRef = useRef<string[]>([])
  // console.log(countriesRef)
  const [foundCountries, setFoundCountries] = useState<FoundCountries[]>([])

  function addCountry(e: FormEvent) {
    e.preventDefault()
    if (findCountryHelper(country) !== "") {
      setFoundCountries(prev => [...prev, { name: findCountryHelper(country), id: '_' + Math.random().toString(36).substr(2, 9) }])
      alert(`A new country was found ${findCountryHelper(country)}`)
      setCountry("")
    }
  }

  return (
    <>
      <Box as="form" p="3" onSubmit={addCountry}>
        <VStack spacing="2">
          <Heading>
            Input country
          </Heading>
          <Input
            onChange={e => setCountry(e.target.value)}
            value={country}
          />
          <HStack spacing='1'>
            <Button type="submit">Submit</Button>
            <Button type="button" colorScheme="red">Exit</Button>
          </HStack>
        </VStack>

        <Text>{foundCountries.length + "/" + AllCountries.length}</Text>

        <Wrap>
          {foundCountries.map(country => {
            const lastCountryFound = [...foundCountries].pop()

            return (
              <Text key={country.id} fontSize={{ base: '12px', md: '15px', lg: '18px', xl: "20px" }}>
                {country.name} {foundCountries.length > 0 && lastCountryFound?.id !== country.id && ` -`}
              </Text>
            )
          })}
        </Wrap>
      </Box>

      <Box w="100%" p="3" position="sticky">
        <ComposableMap data-tip="" projectionConfig={{ scale: 147 }}>
          <Geographies geography={MAP}>
            {({ geographies }) => {
              countriesRef.current = (geographies.map(item => item.properties.NAME))
              return (
                geographies.map(geo => {
                  const { NAME, POP_EST } = geo.properties as { NAME: string, POP_EST: string }
                  // setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                  // console.log(NAME)

                  const isCountryFound = foundCountries.some(country => country.name === NAME)

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: isCountryFound ? "green" : "#D6D6DA",
                          outline: "none"
                        },
                        hover: {
                          fill: "#D6D6DA",
                          outline: "none"
                        },
                        // pressed: {
                        //   fill: "#E42",
                        //   outline: "none"
                        // }
                      }}
                    />
                  )
                })
              )
            }
            }
          </Geographies>
        </ComposableMap>
      </Box>
    </>
  );
};

export default memo(WorldCountriesMap);
