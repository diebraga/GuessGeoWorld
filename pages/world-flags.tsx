import { GetServerSideProps } from "next";
import { HeadComponent } from "../components/HeadComponent";
import { WorldFlagsComponent } from "../components/WorldFlagsComponent";

type WorldFlagsProps = {
  continent: string
}

export default function WorldFlags({ continent }: WorldFlagsProps) {
  return (
    <>
      <HeadComponent
        title="GuessGeoWorld - Country flags"
        description="Quiz country flags"
      />
      <WorldFlagsComponent
        continent={continent}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const continent = context.query.continent as string

  return {
    props: {
      continent: continent
    },
  };
};
