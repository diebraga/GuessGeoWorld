import { Box, Button, Heading, HStack, Input, Text, VStack, Wrap } from "@chakra-ui/react";
import { FormEvent, memo, useEffect, useRef, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import MAP from '../../map/geoUrl.json'
import { AllCountries } from "../../utils/allCountries";
import { findCountryHelper } from "../../utils/findCountriesHelper";
import { FoundWorldCountriesList } from "./FoundWorldCountriesList";
import { WorldCountriesMapCanvas } from "./WorldCountriesMapCanvas";
import { WorldCountriesMapInput } from "./WorldCountriesMapInput";

type FoundCountries = {
  name: string
  id: string
}

const WorldCountriesMap = () => {
  const [country, setCountry] = useState('')
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
    <Box display='block' overflowY='scroll'>
      <Box pl="3" pr="3" pt="3">
        <Text mt="2" mb="3">{foundCountries.length + "/" + AllCountries.length}</Text>

        <Wrap overflowY='scroll' overflowX='hidden' h="80px">
          {foundCountries.map(country => <FoundWorldCountriesList
            key={country.id}
            country={country}
            lastCountryFound={[...foundCountries].pop()}
            foundCountries={foundCountries}
          />)}
        </Wrap>
      </Box>

      <WorldCountriesMapInput
        addCountry={addCountry}
        country={country}
        setCountry={setCountry}
      />

      <WorldCountriesMapCanvas foundCountries={foundCountries} />
    </Box>
  );
};

export default memo(WorldCountriesMap);
