import { Box, Text, useDisclosure, useToast, Wrap } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FormEvent, memo, useState } from "react";
import { AllCountries } from "../../utils/allCountries";
import { findCountryHelper } from "../../utils/findCountriesHelper";
import { FoundAllCountriesModal } from "./FoundAllCountriesModal";
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

  const router = useRouter()

  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()

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

  function onCloseMapModal() {
    onClose()
    router.push("/")
  }

  function onRestartGame() {
    onClose()
    setFoundCountries([])
  }

  function onLeaveGame() {
    setFoundCountries([])
    router.push("/")
  }

  useEffect(() => {
    if (foundCountries.length === AllCountries.length) {
      onOpen()
    }
  }, [foundCountries])

  return (
    <Box display='block' overflowY='scroll'>
      <FoundAllCountriesModal
        isOpen={isOpen}
        onClose={onCloseMapModal}
        onRestart={onRestartGame}
      />

      <Box pl="3" pr="3" pt="3" mt="2">
        <Wrap overflowY='scroll' overflowX='hidden' h="80px">
          {foundCountries.map(country => <FoundWorldCountriesList
            key={country.id}
            country={country}
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
