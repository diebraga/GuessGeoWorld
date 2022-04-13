import { Box, Text, useToast, Wrap } from "@chakra-ui/react";
import { FormEvent, memo, useState } from "react";
import { AllCountries } from "../../utils/allCountries";
import { findCountryHelper } from "../../utils/findCountriesHelper";
import { FoundNewCountryToast } from "./FoundNewCountryToast";
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

  const toast = useToast()

  function addCountry(e: FormEvent) {
    e.preventDefault()
    if (findCountryHelper(country) !== "") {
      setFoundCountries(prev => [...prev, { name: findCountryHelper(country), id: '_' + Math.random().toString(36).substr(2, 9) }])
      setCountry("")
      toast({
        position: 'top',
        render: () => <FoundNewCountryToast countryName={findCountryHelper(country)} />
      })
    }
  }

  return (
    <Box display='block' overflowY='scroll'>
      <Box pl="3" pr="3" pt="3" mt="2">
        <Wrap overflowY='scroll' overflowX='hidden' h="80px">
          {foundCountries.map(country => <FoundWorldCountriesList
            key={country.id}
            country={country}
            lastCountryFound={[...foundCountries].pop()}
            foundCountries={foundCountries}
          />)}
        </Wrap>
        <Text mb="3">{foundCountries.length + "/" + AllCountries.length}</Text>
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
