import { Anime } from 'types/Anime'

import Header from 'components/Header'
import { Container } from 'components/Container'
import List from 'components/List'
import Info from 'components/Info'
// import Select from 'components/Select'
import Global from 'styles/global'

import { getAnimesSeason } from 'service/api'
import { listAnimes } from 'utils'

type HomeProps = {
  season: string
  year: string
  lastUpdate: string
  animes: Anime[]
}

export default function Home({ animes, season, year }: HomeProps) {
  return (
    <div className={season.toLowerCase()}>
      <Global />
      <Header season={season}>
        {season} - {year}
      </Header>

      <Container>
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
