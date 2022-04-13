import { Box } from "@chakra-ui/react";
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
}

export function WorldCountriesMapCanvas({ foundCountries }: WorldCountriesMapCanvasProps) {
  return (
    <Box w="100%" pl="3" pr="3">
      <ComposableMap data-tip="" projectionConfig={{ scale: 147 }}>
        <Geographies geography={MAP}>
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
                        fill: isCountryFound ? "green" : "#D6D6DA",
                        outline: "none"
                      },
                      hover: {
                        fill: "#D6D6DA",
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
