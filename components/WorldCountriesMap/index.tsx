import { FormEvent, memo, useRef, useState } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import MAP from '../../map/geoUrl.json'
import { findCountryHelper } from "../../utils/findCountriesHelper";

type FoundCountries = {
  name: string
  id: string
}

const WorldCountriesMap = () => {
  const [country, setCountry] = useState('')

  const countriesRef = useRef<string[]>([])
  console.log(countriesRef)
  const [foundCountries, setFoundCountries] = useState<FoundCountries[]>([])
  console.log(foundCountries)
  function addCountry(e: FormEvent) {
    e.preventDefault()
    if (findCountryHelper(country) !== "") {
      setFoundCountries(prev => [...prev, { name: findCountryHelper(country), id: '_' + Math.random().toString(36).substr(2, 9) }])
      alert(`A new country was found ${findCountryHelper(country)}`)
      setCountry("")
    }
  }

  return (
    <>
      <form onSubmit={addCountry}>
        <input
          onChange={e => setCountry(e.target.value)}
          value={country}
        />
        <button type="submit">Submit</button>
      </form>
      {foundCountries.map(country => {
        return (
          <p key={country.id}>{country.name}</p>
        )
      })}

      <ComposableMap data-tip="">
        <ZoomableGroup>
          <Geographies geography={MAP}>
            {({ geographies }) => {
              countriesRef.current = (geographies.map(item => item.properties.NAME))
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
                          fill: "green",
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
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(WorldCountriesMap);
