import { Box } from '@chakra-ui/react';
import ReactConfetti from 'react-confetti'
import { useWindowSize } from "../../hooks/useWindowSize";

type ConfettiProps = {
  isActive: boolean
}
export function Confetti({ isActive }: ConfettiProps) {
  const { height, width } = useWindowSize()

  return (
    <Box>
      {isActive && (
        <ReactConfetti
          width={width}
          height={height}
        />
      )}
    </Box>
  )
}
