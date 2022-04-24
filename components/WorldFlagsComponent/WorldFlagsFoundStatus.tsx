import { Badge, Button, Stat, StatGroup, StatLabel, StatNumber, Text } from "@chakra-ui/react";
import { useWindowSize } from "../../hooks/useWindowSize";

type WorldFlagsFoundStatusProps = {
  foundLenght: number
  totalLenght: number
  currentFlagNumber: number
  onLeave: () => void
  flagFound: boolean
}

export function WorldFlagsFoundStatus({ foundLenght, totalLenght, currentFlagNumber, onLeave, flagFound }: WorldFlagsFoundStatusProps) {
  const { width } = useWindowSize()

  const isSmallerThan400px = width < 400

  return (
    <StatGroup>

      <Stat size={isSmallerThan400px ? "sm" : "md"}>
        <StatLabel fontSize={isSmallerThan400px ? "sm" : "md"}>Found</StatLabel>
        <StatNumber>
          {foundLenght}
          <Text as='span' fontSize='md' fontWeight='400' mx='1'>
            of
          </Text>
          {totalLenght}
        </StatNumber>
      </Stat>

      <Stat size={isSmallerThan400px ? "sm" : "md"}>
        <StatLabel fontSize={isSmallerThan400px ? "sm" : "md"}>Current flag</StatLabel>
        <StatNumber>
          {currentFlagNumber}
          <Badge variant='outline' colorScheme={flagFound ? "green" : "red"} ml='1.5' size='xsm'>
            {flagFound ? "Found" : "Not found"}
          </Badge>
        </StatNumber>
      </Stat>

      <Stat size={isSmallerThan400px ? "sm" : "md"}>
        <StatLabel fontSize={isSmallerThan400px ? "sm" : "md"}>Leave game</StatLabel>
        <StatNumber>

          <Button size='sm' h={isSmallerThan400px ? "23px" : "26px"} colorScheme='red' variant='outline' onClick={onLeave} >
            Leave
          </Button>
        </StatNumber>

      </Stat>
    </StatGroup>
  )
}
