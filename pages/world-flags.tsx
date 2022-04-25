import { HeadComponent } from "../components/HeadComponent";
import { WorldFlagsComponent } from "../components/WorldFlagsComponent";

export default function WorldFlags() {
  return (
    <>
      <HeadComponent
        title="GuessGeoWorld - Country flags"
        description="Quiz country flags"
      />
      <WorldFlagsComponent />
    </>
  )
}
