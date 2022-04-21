import { Box } from "@chakra-ui/react";
import Flag from 'react-world-flags'

type WorldFlagCardProps = {
  code: string
}

export function WorldFlagCard({ code }: WorldFlagCardProps) {
  return (
    <Box>
      <Flag code={code} />
    </Box>
  )
}
