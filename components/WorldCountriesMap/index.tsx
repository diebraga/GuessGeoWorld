import { Box, Text, useDisclosure, useToast, Wrap } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { FormEvent, memo, useState } from "react";
import { useSound } from "../../hooks/useSound";
import { AllCountries } from "../../utils/allCountries";
import { findCountryHelper } from "../../utils/findCountriesHelper";
import { FoundAllCountriesModal } from "./FoundAllCountriesModal";
import { FoundNewCountryToast } from "./FoundNewCountryToast";
import { FoundWorldCountriesList } from "./FoundWorldCountriesList";
import { LeaveWorldCountriesGameAlert } from "./LeaveWorldCountriesGameAlert";
import { ModalMissedCountries } from "./ModalMissedCountries";
import { WorldCountriesMapCanvas } from "./WorldCountriesMapCanvas";
import { WorldCountriesMapInput } from "./WorldCountriesMapInput";

type FoundCountries = {
  name: string
  id: string
}

const WorldCountriesMap = () => {
  const [country, setCountry] = useState('')
  const [foundCountries, setFoundCountries] = useState<FoundCountries[]>([])

  const { startSound } = useSound()

  const router = useRouter()

  const toast = useToast()
  const {
    isOpen: completedCountriesModalIsOpen,
    onOpen: completedCountriesModalOnOpen,
    onClose: completedCountriesModalOnClose
  } = useDisclosure()

  const {
    isOpen: leaveGameIsOpenAlert,
    onOpen: leaveGameOnOpenAlert,
    onClose: leaveGameOnCloseAlert
  } = useDisclosure()

  const {
    isOpen: leaveGameModalIsOpen,
    onOpen: leaveGameModalOnOpen,
    onClose: leaveGameModalOnClose
  } = useDisclosure()

  const cancelRef = useRef()

  function addCountry(e: FormEvent) {
    e.preventDefault()
    if (findCountryHelper(country) !== "") {
      setFoundCountries(prev => [...prev, { name: findCountryHelper(country), id: '_' + Math.random().toString(36).substr(2, 9) }])
      setCountry("")
      startSound()
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
    leaveGameModalOnClose()
    setFoundCountries([])
  }

  function onLeaveGame() {
    leaveGameOnOpenAlert()
  }

  function onConfirmLeaveGame() {
    setFoundCountries([])
    leaveGameOnCloseAlert()
    router.push('/')
  }

  function onConfirmLeaveGameAlert() {
    leaveGameModalOnOpen()
    leaveGameOnCloseAlert()
  }

  useEffect(() => {
    if (foundCountries.length === AllCountries.length) {
      completedCountriesModalOnOpen()
    }
  }, [foundCountries])

  const countriesNotFound = AllCountries.filter(entry1 => !foundCountries.some(entry2 => entry1.name === entry2.name));

  return (
    <Box display='block' overflowY='scroll'>
      <ModalMissedCountries
        isOpen={leaveGameModalIsOpen}
        onClose={onConfirmLeaveGame}
        countriesNotFound={countriesNotFound}
        onRestart={onRestartGame}
      />

      <LeaveWorldCountriesGameAlert
        isOpen={leaveGameIsOpenAlert}
        onClose={leaveGameOnCloseAlert}
        leastDestructiveRef={cancelRef}
        onConfirm={onConfirmLeaveGameAlert}
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
