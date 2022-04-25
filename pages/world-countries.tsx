import { HeadComponent } from "../components/HeadComponent";
import WorldCountriesMap from "../components/WorldCountriesMap";

export default function WorldCountries() {
  return (
    <div>
      <HeadComponent
        title="GuessGeoWorld - World countries"
        description="Quiz world countries game"
      />
      <WorldCountriesMap />
    </div>
  )
}
