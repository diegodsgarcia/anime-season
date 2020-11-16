import { useState } from 'react'
import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next'

import { AnimeSeason, Anime } from 'types/Anime'

import Header from 'components/Header'
import { Container } from 'components/Container'
import List from 'components/List'
import Info from 'components/Info'
import Select from 'components/Select'
import Global from 'styles/global'

import { getAnimesSeason } from 'service/api'
import {
  listAnimes,
  filterAnimesByCategory,
  getSelectSeasons,
  getSelectCategories
} from 'utils'

export default function Home(props: AnimeSeason) {
  const { season, year } = props
  const [animes, setAnimes] = useState<Anime[]>(props.animes)
  const router = useRouter()

  const onChangeSeason = async (value: string) => {
    router.replace(`/season/${value}`)
  }

  const onChangeCategory = async (value: string) => {
    if (value === 'All') {
      setAnimes(animes)
    } else {
      setAnimes(filterAnimesByCategory(animes, value))
    }
  }

  return (
    <div className={season.toLowerCase()}>
      <Global />
      <Header season={season}>
        {season} - {year}
      </Header>

      <Container>
        <Select
          label="Season"
          options={getSelectSeasons()}
          value={season}
          onChange={onChangeSeason}
        />
        <Select
          label="Category"
          options={getSelectCategories()}
          value={season}
          onChange={onChangeCategory}
        />
        <List list={listAnimes(animes)} />
      </Container>

      <Info />
    </div>
  )
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
