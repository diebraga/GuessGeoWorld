import { Box } from "@chakra-ui/react";
import { WorldFlagsCarousel } from "./WorldFlagsCarousel";

export function WorldFlagsComponent() {
  return (
    <Box pl={["0px", "15%", "20%", "30%"]} pr={["0px", "15%", "20%", "30%"]}>
      <WorldFlagsCarousel />
    </Box>
  )
}
