import React, { useState, useEffect } from 'react'
import { getAnimesSeason } from './service/api'

import Global from './styled/global'
import Header from './components/header'
import Container from './components/container'
import List from './components/list'

function App() {
  const [animes, setAnimes] = useState([])
  const [info, setInfo] = useState(null)

  useEffect(() => {
    getAnimesSeason().then(({ animes, season, year }) => {
      setAnimes(animes)
      setInfo({ season, year })
    })
  }, [])

  return (
    <div className={info?.season.toLowerCase()}>
      <Global />
      <Header season={info?.season}>
        {info ? `${info.season} -${info.year}` : ''}
      </Header>

      <Container>
        <List animes={animes} />
      </Container>
    </div>
  );
}

export default App
