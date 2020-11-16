import { GetStaticPropsContext } from 'next'

import { AnimeSeason } from 'types/Anime'
import { getAnimesSeason } from 'service/api'

import SeasonTemplate from 'templates/Season'

export default function Season(props: AnimeSeason) {
  return <SeasonTemplate {...props} />
}

export async function getStaticPaths() {
  const seasons = ['fall', 'spring', 'summer', 'winter']
  return {
    paths: seasons.map((season) => ({
      params: { name: season }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const seasonName = (params?.name as string) ?? ''
  const animeSeason = await getAnimesSeason(seasonName)

  return {
    props: animeSeason
  }
}
