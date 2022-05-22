import { Box, IconButton, Flex, Link, Text, useColorModeValue, useDisclosure, useToast, VStack, Wrap, Icon } from "@chakra-ui/react";
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
import { HelpCountriesWorldModal } from "./HelpCountriesWorldModal";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { IoMdHelp } from 'react-icons/io'
import { useWindowSize } from "../../hooks/useWindowSize";
import { localeType } from "../../@types/localeType";
import { normalizeWorldCountriesLanguage } from "../../translations/world-countries/normalizeWorldCountriesLanguage";

type FoundCountries = {
  name: string
  id: string
}

type WorldCountriesMapProps = {
  continent: string
  seconds: number | undefined,
  locale: localeType
}

const WorldCountriesMap = ({ seconds, continent, locale }: WorldCountriesMapProps) => {
  const filterCountriesByContinent =
    AllCountries.filter(item => item.continent.includes(continent) === true)

  const { translation } = normalizeWorldCountriesLanguage(locale)

  const [country, setCountry] = useState('')
  const [countDowKey, setCountDowKey] = useState(0)
  const [foundCountries, setFoundCountries] = useState<FoundCountries[]>([])
  const [modalHelpWorldCountriesWllNotOpen, setModalHelpWorldCountriesWllNotOpen] = useLocalStorage("modalHelpWorldCountriesWllNotOpen", false)

  const { width } = useWindowSize()
  const isSmallerThan480px = width < 480

  const secondsTimer = seconds

  const {
    currentSeconds,
    startCountSeconds,
    stopCountSeconds,
    timeIsRunning,
    clearCountSeconds
  } = useCounter(secondsTimer)

  const { startSuccessSound, startFinishedSound, startFailedSound } = useSound()

  useEffect(() => {
    if (!modalHelpWorldCountriesWllNotOpen) {
      modalHelpOnOpen()
    } else {
      startCountSeconds()
    }
  }, [modalHelpWorldCountriesWllNotOpen])

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

  const {
    isOpen: modalHelpIsOpen,
    onOpen: modalHelpOnOpen,
    onClose: modalHelpOnClose
  } = useDisclosure()

  const cancelRef = useRef()

  function closeModalHelp() {
    modalHelpOnClose()
    startCountSeconds()
  }

  const currentFoundNation = filterCountriesByContinent.find(nation => nation.name === findCountryHelper(country))
  console.log(currentFoundNation?.continent)
  function addCountry() {
    if (findCountryHelper(country) !== ""
      && !foundCountries.
        some(item => item.name ===
          findCountryHelper(country))
      && currentFoundNation?.continent.includes(continent)) {
      setFoundCountries(prev => [...prev, {
        name: findCountryHelper(country),
        id: '_' + Math.random().toString(36).substr(2, 9),
        continent: continent
      }])
      setCountry("")
      startSuccessSound()
      toast({
        position: 'top',
        render: () => <FoundNewCountryToast
          countryName={findCountryHelper(country)}
          locale={locale}
        />
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
    stopCountSeconds()
  }

  useEffect(() => {
    if (foundCountries.length === filterCountriesByContinent.length) {
      completedCountriesModalOnOpen()
      startFinishedSound()
      stopCountSeconds()
    }
  }, [foundCountries])

  const countriesNotFound = filterCountriesByContinent.filter(entry1 => !foundCountries.some(entry2 => entry1.name === entry2.name));

  return (
    <Box display='block' overflowY='scroll' pl={["0px", "15%", "20%", "30%"]} pr={["0px", "15%", "20%", "30%"]}>
      <Box left='10px' top='45px' position='absolute'>
        <IconButton
          onClick={modalHelpOnOpen}
          aria-label='Open help'
          icon={<Icon as={IoMdHelp} />}
        />
      </Box>
      <HelpCountriesWorldModal
        totalSeconds={seconds}
        onClose={closeModalHelp}
        isOpen={modalHelpIsOpen}
        setModalHelpWorldCountriesWllNotOpen={setModalHelpWorldCountriesWllNotOpen}
        modalHelpWorldCountriesWllNotOpen={modalHelpWorldCountriesWllNotOpen}
        allCountriesLenght={filterCountriesByContinent.length}
        locale={locale}
      />

      <ModalMissedCountries
        isOpen={leaveGameModalIsOpen}
        onClose={onConfirmLeaveGame}
        countriesNotFound={countriesNotFound}
        onRestart={onRestartGame}
        locale={locale}
      />

      <LeaveWorldCountriesGameAlert
        isOpen={leaveGameIsOpenAlert}
        onClose={leaveGameOnCloseAlert}
        leastDestructiveRef={cancelRef}
        onConfirm={onConfirmLeaveGameAlert}
        locale={locale}
      />

      <FoundAllCountriesModal
        isOpen={completedCountriesModalIsOpen}
        onClose={onCloseMapModal}
        onRestart={onRestartGame}
      />

      <Box pl="3" pr="3" pt="0" mt={isSmallerThan480px ? "45px" : "2"}>
        <Wrap overflowY='scroll' overflowX='hidden' h="80px">
          {foundCountries.map(country => <FoundWorldCountriesList
            key={country.id}
            country={country}
            foundCountries={foundCountries}
          />)}
        </Wrap>
        <Flex mb="3" justifyContent='space-between' mt='2'>
          <Text fontWeight='bold'>{foundCountries.length + "/" + filterCountriesByContinent.length}</Text>
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
          <Link color={useColorModeValue("red.500", "red.400")} fontWeight='bold' onClick={onLeaveGame}>
            {translation.end_game}
          </Link>
        </Flex>
      </Box>

      <WorldCountriesMapInput
        country={country}
        setCountry={setCountry}
        locale={locale}
      />

      <WorldCountriesMapCanvas
        foundCountries={foundCountries}
        continent={continent}
      />
    </Box>
  );
};

export default memo(WorldCountriesMap);
