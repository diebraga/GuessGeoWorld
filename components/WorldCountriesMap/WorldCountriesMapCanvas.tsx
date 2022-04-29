import { Box, useColorModeValue } from "@chakra-ui/react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import MAP from '../../map/geoUrl.json'

type FoundCountries = {
  name: string
  id: string
}

type WorldCountriesMapCanvasProps = {
  foundCountries: FoundCountries[]
  continent: string | undefined
}

export function WorldCountriesMapCanvas({ foundCountries, continent }: WorldCountriesMapCanvasProps) {
  const foundCountryColor = useColorModeValue("green", "#4299E1");

  function normalizeMapPosition(continent: string): { position: [number, number], scale: number } {
    if (continent === "south-america") {
      return { position: [-60, -20], scale: 400 }
    } else if (continent === "north-america") {
      return { position: [-80, 40], scale: 400 }
    } else if (continent === "africa") {
      return { position: [15, 0], scale: 400 }
    } else if (continent === "asia") {
      return { position: [85, 30], scale: 350 }
    } else if (continent === "oceania") {
      return { position: [125, -20], scale: 400 }
    } else {
      return { position: [0, 0], scale: 147 }
    }
  }

  return (
    <Box w="100%" pl="3" pr="3">
      <ComposableMap
        data-tip=""
        projectionConfig={{
          scale: normalizeMapPosition(continent).scale,
          center: normalizeMapPosition(continent).position
        }}>
        <Geographies
          geography={MAP}
        >
          {({ geographies }) => {
            return (
              geographies.map(geo => {
                const { NAME, POP_EST } = geo.properties as { NAME: string, POP_EST: string }
                // setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                // console.log(NAME)

                const isCountryFound = foundCountries.some(country => country.name === NAME)

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: isCountryFound ? foundCountryColor : "#D6D6DA",
                        outline: "none"
                      },
                      hover: {
                        fill: isCountryFound ? foundCountryColor : "#D6D6DA",
                        outline: "none"
                      },
                      // pressed: {
                      //   fill: "#E42",
                      //   outline: "none"
                      // }
                    }}
                  />
                )
              })
            )
          }
          }
        </Geographies>
      </ComposableMap>
    </Box>
  )
}
