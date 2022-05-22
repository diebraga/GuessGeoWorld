import { GetServerSideProps } from "next";
import { localeType } from "../@types/localeType";
import { HeadComponent } from "../components/HeadComponent";
import { WorldFlagsComponent } from "../components/WorldFlagsComponent";
import { normalizeWorldFlagsLanguage } from "../translations/world-flags/normalizeWorldFlagsLanguage";

type WorldFlagsProps = {
  continent: string
  seconds: number | undefined
  locale: localeType
}

export default function WorldFlags({ continent, seconds, locale }: WorldFlagsProps) {
  const { translation } = normalizeWorldFlagsLanguage(locale)

  return (
    <>
      <HeadComponent
        title={`GuessGeoWorld - ${translation.world_flags}`}
        description={`Quiz ${translation.world_flags}`}
      />
      <WorldFlagsComponent
        continent={continent}
        seconds={seconds}
        locale={locale}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const continent = context.query.continent as string

  function normalizeSeconds(cont: string): number {
    if (continent === "world") {
      return 1200
    } else if (continent === "africa") {
      return 550
    } else if (continent === "asia") {
      return 550
    } else if (continent === "north-america") {
      return 600
    } else if (continent === "south-america") {
      return 480
    } else if (continent === "oceania") {
      return 490
    } else if (continent === "europe") {
      return 550
    }
  }

  return {
    props: {
      continent: continent,
      seconds: normalizeSeconds(continent)
    },
  };
};
