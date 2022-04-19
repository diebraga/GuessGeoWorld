import { Box, Button, Flex, Link, Text, useColorModeValue, useDisclosure, useToast, VStack, Wrap } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { memo, useState } from "react";
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
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { convertSecoundsToMmSs } from "../../utils/convertSecoundsToMmSs";
import { useCounter } from "../../hooks/useCounter";

type FoundCountries = {
  name: string
  id: string
}

const WorldCountriesMap = () => {
  const [country, setCountry] = useState('')
  const [countDowKey, setCountDowKey] = useState(0)
  const [foundCountries, setFoundCountries] = useState<FoundCountries[]>([])

  const secondsTimer = 1200

  const {
    currentSeconds,
    startCountSeconds,
    stopCountSeconds,
    timeIsRunning,
    clearCountSeconds
  } = useCounter(secondsTimer)

  const { startSuccessSound, startFinishedSound, startFailedSound } = useSound()

  useEffect(() => {
    startCountSeconds()
  }, [])

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

  function addCountry() {
    if (findCountryHelper(country) !== "" && !foundCountries.some(item => item.name === findCountryHelper(country))) {
      setFoundCountries(prev => [...prev, { name: findCountryHelper(country), id: '_' + Math.random().toString(36).substr(2, 9) }])
      setCountry("")
      startSuccessSound()
      toast({
        position: 'top',
        render: () => <FoundNewCountryToast countryName={findCountryHelper(country)} />
      })
    }
  }

  useEffect(() => {
    addCountry()
  }, [country])

  function onCloseMapModal() {
    completedCountriesModalOnClose()
    router.push("/")
  }

  function onRestartGame() {
    completedCountriesModalOnClose()
    leaveGameModalOnClose()
    clearCountSeconds()
    startCountSeconds()
    setCountDowKey(prevKey => prevKey + 1)
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
    startFailedSound()
  }

  useEffect(() => {
    if (foundCountries.length === AllCountries.length) {
      completedCountriesModalOnOpen()
      startFinishedSound()
      stopCountSeconds()
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

      <Box pl="3" pr="3" pt="0" mt="2">
        <Wrap overflowY='scroll' overflowX='hidden' h="80px">
          {foundCountries.map(country => <FoundWorldCountriesList
            key={country.id}
            country={country}
            foundCountries={foundCountries}
          />)}
        </Wrap>
        <Flex mb="3" justifyContent='space-between'>
          <Text>{foundCountries.length + "/" + AllCountries.length}</Text>
          <CountdownCircleTimer
            key={countDowKey}
            isPlaying={timeIsRunning}
            duration={secondsTimer}
            colors={['#004777', "#74a5f2", '#F7B801', '#A30000']}
            colorsTime={[1200, 900, 600, 0]}
            size={90}
            strokeWidth={6}
            onComplete={() => onConfirmLeaveGameAlert()}
          >
            {({ remainingTime }) => {
              return (
                <VStack>
                  <Text
                    as='span'
                    fontWeight='bold'
                    fontSize={["md", "large", "xl"]}
                  >
                    {convertSecoundsToMmSs(remainingTime)}
                  </Text>
                </VStack>
              )
            }}
          </CountdownCircleTimer>
          <Link color={useColorModeValue("red.500", "red.400")} onClick={onLeaveGame}>
            End game
          </Link>
        </Flex>
      </Box>

      <WorldCountriesMapInput
        country={country}
        setCountry={setCountry}
      />

      <WorldCountriesMapCanvas foundCountries={foundCountries} />
    </Box>
  );
};

export default memo(WorldCountriesMap);
