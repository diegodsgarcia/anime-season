import { useState } from 'react'
import { useRouter } from 'next/router'

import { AnimeSeason, Anime } from 'types/Anime'

import Header from 'components/Header'
import { Container } from 'components/Container'
import List from 'components/List'
import Info from 'components/Info'
import Select from 'components/Select'
import Global from 'styles/global'

import {
  listAnimes,
  filterAnimesByCategory,
  getSelectSeasons,
  getSelectCategories
} from 'utils'

export default function Season(props: AnimeSeason) {
  const { season, year } = props
  const [animes, setAnimes] = useState<Anime[]>(props.animes)
  const router = useRouter()

  const onChangeSeason = async (value: string) => {
    router.replace(`/season/${value}`)
  }

  const onChangeCategory = async (value: string) => {
    if (value === 'All') {
      setAnimes(props.animes)
    } else {
      setAnimes(filterAnimesByCategory(props.animes, value))
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
