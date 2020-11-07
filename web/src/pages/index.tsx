import { useState } from 'react'
import { AnimeSeason } from 'types/Anime'

import Header from 'components/Header'
import { Container } from 'components/Container'
import List from 'components/List'
import Info from 'components/Info'
import Select, { SelectOption } from 'components/Select'
import Global from 'styles/global'

import { getAnimesSeason } from 'service/api'
import { listAnimes, getSelectSeasons } from 'utils'

export default function Home(props: AnimeSeason) {
  const [animeSeason, setAnimeSeason] = useState<AnimeSeason>(props)
  const { animes, season, year } = animeSeason

  const onChangeSeason = async ({ value }: SelectOption) => {
    const result = await getAnimesSeason(value)
    setAnimeSeason(result)
  }

  return (
    <div className={season.toLowerCase()}>
      <Global />
      <Header season={season}>
        {season} - {year}
      </Header>

      <Container>
        <Select
          placeholder="Season"
          options={getSelectSeasons()}
          value={{ label: '', value: season }}
          onChange={onChangeSeason}
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
