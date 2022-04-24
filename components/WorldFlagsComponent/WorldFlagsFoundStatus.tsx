import { Button, Stat, StatGroup, StatLabel, StatNumber, Text } from "@chakra-ui/react";
import { useWindowSize } from "../../hooks/useWindowSize";

type WorldFlagsFoundStatusProps = {
  foundLenght: number
  totalLenght: number
  currentFlagNumber: number
  onLeave: () => void
}

export function WorldFlagsFoundStatus({ foundLenght, totalLenght, currentFlagNumber, onLeave }: WorldFlagsFoundStatusProps) {
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
        </StatNumber>
      </Stat>

      <Stat size={isSmallerThan400px ? "sm" : "md"}>
        <StatLabel fontSize={isSmallerThan400px ? "sm" : "md"}>Leave game</StatLabel>
        <Button size='sm' h={isSmallerThan400px ? "26px" : "31px"} colorScheme='red' variant='outline' onClick={onLeave}>
          Leave
        </Button>
      </Stat>
    </StatGroup>
  )
}
