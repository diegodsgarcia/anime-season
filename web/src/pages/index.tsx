import { AnimeSeason } from 'types/Anime'
import { getAnimesSeason } from 'service/api'

import SeasonTemplate from 'templates/Season'

export default function Home(props: AnimeSeason) {
  return <SeasonTemplate {...props} />
}

export async function getStaticProps() {
  const animeSeason = await getAnimesSeason()

  return {
    props: animeSeason
  }
}
