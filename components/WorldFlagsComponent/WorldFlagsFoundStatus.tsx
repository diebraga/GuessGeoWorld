import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Badge,
  Button,
} from '@chakra-ui/react'
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
    <TableContainer>
      <Table variant='unstyled' size='sm'>
        <Thead>
          <Tr>
            <Th>Found</Th>
            <Th>Current</Th>
            <Th isNumeric>Leave game</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Text as='span' fontSize='x-large' fontWeight='bold'>
                {foundLenght}
              </Text>
              <Text as='span' fontSize='md' fontWeight='400' mx='1'>
                of
              </Text>
              <Text as='span' fontSize='x-large' fontWeight='bold'>
                {totalLenght}
              </Text>
            </Td>
            <Td>
              <Text as='span' fontSize='x-large' fontWeight='bold'>
                {currentFlagNumber}
              </Text>
              <Badge variant='outline' colorScheme={flagFound ? "green" : "red"} ml='1.5' size='xsm'>
                {flagFound ? "Found" : "Not found"}
              </Badge>
            </Td>
            <Td isNumeric>
              <Button size='sm' h={isSmallerThan400px ? "23px" : "26px"} colorScheme='red' variant='outline' onClick={onLeave} >
                Leave
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}
