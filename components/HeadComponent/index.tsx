import Head from "next/head";

type HeadComponentProps = {
  title: string
  description: string
}

export function HeadComponent({ title, description }: HeadComponentProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content="GuessGeoWorld" />
      <meta name="og:description" property="og:description" content="GuessGeoWorld is a geography game where your goal is guess countries in a limited amount of time!" />
      <meta property="og:site_name" content="GuessGeoWorld" />
      {/* <meta property="og:url" content="" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="" />
      <meta name="twitter:description" content="Diego Braga" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:creator" content="" /> */}
      <link rel="icon" type="image/png" href="/images/front-bg.png" />
      <link rel="apple-touch-icon" href="/images/front-bg.png" />
      {/* <link rel="stylesheet" href="" /> */}
      <meta property="og:image" content="/images/front-bg.png" />
      {/* <meta name="twitter:image" content="" />
      <link rel="canonical" href="" />
      <script type="text/javascript" src="" ></script> */}
    </Head>
  )
}
