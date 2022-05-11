import { GetServerSideProps } from "next";
import { localeType } from "../@types/localeType";
import { HeadComponent } from "../components/HeadComponent";
import WorldCountriesMap from "../components/WorldCountriesMap";
import { normalizeWorldCountriesLanguage } from "../translations/world-countries/normalizeWorldCountriesLanguage";

type WorldCountriesProps = {
  continent: string
  seconds: number | undefined
  locale: localeType
}

export default function WorldCountries({ seconds, continent, locale }: WorldCountriesProps) {

  const { translation } = normalizeWorldCountriesLanguage(locale)

  return (
    <div>
      <HeadComponent
        title={`GuessGeoWorld - ${translation.world_countries}`}
        description={translation.quiz_world_countries_game}
      />
      <WorldCountriesMap
        seconds={seconds}
        continent={continent}
        locale={locale}
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
    } else if (continent === "europe") {
      return 1020
    }
  }

  return {
    props: {
      continent: continent,
      seconds: normalizeSeconds(continent)
    },
  };
};
