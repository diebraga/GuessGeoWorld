import { Box, Text, useDisclosure, useToast, Wrap } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { FormEvent, memo, useState } from "react";
import { AllCountries } from "../../utils/allCountries";
import { findCountryHelper } from "../../utils/findCountriesHelper";
import { FoundAllCountriesModal } from "./FoundAllCountriesModal";
import { FoundNewCountryToast } from "./FoundNewCountryToast";
import { FoundWorldCountriesList } from "./FoundWorldCountriesList";
import { LeaveWorldCountriesGameAlert } from "./LeaveWorldCountriesGameAlert";
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
  const {
    isOpen: completedCountriesModalIsOpen,
    onOpen: completedCountriesModalOnOpen,
    onClose: completedCountriesModalOnClose
  } = useDisclosure()

  const {
    isOpen: leaveGameIsOpen,
    onOpen: leaveGameOnOpen,
    onClose: leaveGameOnClose
  } = useDisclosure()

  const cancelRef = useRef()

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
    completedCountriesModalOnClose()
    router.push("/")
  }

  function onRestartGame() {
    completedCountriesModalOnClose()
    setFoundCountries([])
  }

  function onLeaveGame() {
    leaveGameOnOpen()
  }

  function onConfirmLeaveGame() {
    setFoundCountries([])
    leaveGameOnClose()
    router.push('/')
  }

  useEffect(() => {
    if (foundCountries.length === AllCountries.length) {
      completedCountriesModalOnOpen()
    }
  }, [foundCountries])

  return (
    <Box display='block' overflowY='scroll'>
      <LeaveWorldCountriesGameAlert
        isOpen={leaveGameIsOpen}
        onClose={leaveGameOnClose}
        leastDestructiveRef={cancelRef}
        onConfirm={onConfirmLeaveGame}
      />

      <FoundAllCountriesModal
        isOpen={completedCountriesModalIsOpen}
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
        onLeaveGame={onLeaveGame}
      />

      <WorldCountriesMapCanvas foundCountries={foundCountries} />
    </Box>
  );
};

export default memo(WorldCountriesMap);
