import React, { useState, useEffect } from 'react'

import { getAnimesSeason } from './service/api'
import { listAnimes } from './utils'

import Global from './styled/global'
import Loader from './components/loader'
import Header from './components/header'
import Container from './components/container'
import List from './components/list'
import Info from './components/info'

function App() {
  const [animes, setAnimes] = useState([])
  const [info, setInfo] = useState(null)
  const [isLoad, setLoad] = useState(false)

  useEffect(() => {
    getAnimesSeason().then(({ animes, season, year }) => {
      setAnimes(listAnimes(animes))
      setInfo({ season, year })
      setLoad(true)
    })
  }, [])

  if (isLoad) {
    return (
      <div className={info?.season.toLowerCase()}>
        <Global />
        <Header season={info?.season}>
          {info ? `${info.season} -${info.year}` : ''}
        </Header>

        <Container>
          <List list={animes} />
        </Container>

        <Info />
      </div>
    );
  } else {
    return (
      <>
        <Global />
        <Loader />
      </>
    )
  }
}

export default App
