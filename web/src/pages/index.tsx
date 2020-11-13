import { useState } from 'react'
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
  const [animeSeason, setAnimeSeason] = useState<AnimeSeason>(props)
  const [animes, setAnimes] = useState<Anime[]>(animeSeason.animes)
  const { season, year } = animeSeason

  const onChangeSeason = async (value: string) => {
    const result = await getAnimesSeason(value)
    setAnimeSeason(result)
  }

  const onChangeCategory = async (value: string) => {
    if (value === 'All') {
      setAnimes(animeSeason.animes)
    } else {
      setAnimes(filterAnimesByCategory(animeSeason.animes, value))
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

export async function getStaticProps() {
  const animeSeason = await getAnimesSeason()

  return {
    props: animeSeason
  }
}
