import { GetServerSideProps } from "next";
import { HeadComponent } from "../components/HeadComponent";
import WorldCountriesMap from "../components/WorldCountriesMap";

type WorldCountriesProps = {
  continent: string
  seconds: number | undefined
}

export default function WorldCountries({ seconds, continent }: WorldCountriesProps) {
  return (
    <div>
      <HeadComponent
        title="GuessGeoWorld - World countries"
        description="Quiz world countries game"
      />
      <WorldCountriesMap
        seconds={seconds}
        continent={continent}
      />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const continent = context.query.continent as string

  function normalizeSeconds(cont: string): number {
    if (continent === "world") {
      return 2400
    } else if (continent === "africa") {
      return 1200
    } else if (continent === "asia") {
      return 1020
    } else if (continent === "north-america") {
      return 600
    } else if (continent === "south-america") {
      return 480
    } else if (continent === "oceania") {
      return 490
    }
  }

  return {
    props: {
      continent: continent,
      seconds: normalizeSeconds(continent)
    },
  };
};
