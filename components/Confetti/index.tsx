import ReactConfetti from 'react-confetti'
import { useWindowSize } from "../../hooks/useWindowSize";

type ConfettiProps = {
  isActive: boolean
}
export function Confetti({ isActive }: ConfettiProps) {
  const { height, width } = useWindowSize()

  return (
    <>
      {isActive && (
        <ReactConfetti
          width={width}
          height={height}
        />
      )}
    </>
  )
}
