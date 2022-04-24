import { Stat, StatLabel, StatNumber, Text } from "@chakra-ui/react";

type WorldFlagsFoundStatusProps = {
  foundLenght: number
  totalLenght: number
}

export function WorldFlagsFoundStatus({ foundLenght, totalLenght }: WorldFlagsFoundStatusProps) {
  return (
    <Stat>
      <StatLabel>Found</StatLabel>
      <StatNumber>
        {foundLenght}
        <Text as='span' fontSize='md' fontWeight='400' mx='1'>
          of
        </Text>
        {totalLenght}
      </StatNumber>
    </Stat>
  )
}
