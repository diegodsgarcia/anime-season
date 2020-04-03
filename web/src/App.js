import React, { useState, useEffect } from 'react'
import { getAnimesSeason } from './service/api'

import Global from './styled/global'
import Header from './components/header'
import Container from './components/container'
import List from './components/list'

function App() {
  const [animes, setAnimes] = useState([])

  useEffect(() => {
    getAnimesSeason().then(setAnimes)
  }, [])

  return (
    <>
      <Global />
      <Header>
        Spring 2020
      </Header>

      <Container>
        <List animes={animes} />
      </Container>
    </>
  );
}

export default App
