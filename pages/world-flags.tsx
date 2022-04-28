import { GetServerSideProps } from "next";
import { HeadComponent } from "../components/HeadComponent";
import { WorldFlagsComponent } from "../components/WorldFlagsComponent";

type WorldFlagsProps = {
  continent: string
  seconds: number | undefined
}

export default function WorldFlags({ continent, seconds }: WorldFlagsProps) {
  return (
    <>
      <HeadComponent
        title="GuessGeoWorld - Country flags"
        description="Quiz country flags"
      />
      <WorldFlagsComponent
        continent={continent}
        seconds={seconds}
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
    }
  }

  return {
    props: {
      continent: continent,
      seconds: normalizeSeconds(continent)
    },
  };
};
