import React, { useState, useEffect } from 'react'

import { getAnimesSeason } from './service/api'
import { listAnimes, filterAnimesByCategory, getSelectCategories, getSelectSeasons } from './utils'

import Global from './styled/global'
import Loader from './components/loader'
import Header from './components/header'
import Container from './components/container'
import List from './components/list'
import Info from './components/info'
import Select from './components/select'

function App() {
  const [animes, setAnimes] = useState([])
  const [list, setList] = useState([])
  const [info, setInfo] = useState(null)
  const [categories, setCategories] = useState([])
  const [seasons, setSeasons] = useState([])
  const [seasonSelected, setSeasonSelected] = useState(null)
  const [isLoad, setLoad] = useState(false)

  useEffect(() => {
    getAnimesSeason().then(({ animes, season, year }) => {
      setAnimes(animes)
      setList(listAnimes(animes))
      setInfo({ season, year })
      setCategories(getSelectCategories())
      setSeasons(getSelectSeasons())
      setSeasonSelected({ label: season, option: season.toLowerCase() })
      setLoad(true)
    })
  }, [])

  async function onChangeSeason({ value }) {
    const { animes, season, year } = await getAnimesSeason(value)
    setAnimes(animes)
    setList(listAnimes(animes))
    setInfo({ season, year })
  }

  function onFilterCategory({ label }) {
    if (label === 'All') {
      setList(listAnimes(animes))
    } else {
      setList(filterAnimesByCategory(animes, label))
    }
  }

  if (isLoad) {
    return (
      <div className={info?.season.toLowerCase()}>
        <Global />
        <Header season={info?.season}>
          {info ? `${info.season} -${info.year}` : ''}
        </Header>

        <Container>
          <Select placeholder="Season" options={seasons} value={seasonSelected} onClick={onChangeSeason} />
          <Select placeholder="Category" options={categories} value={categories[0]} onClick={onFilterCategory} />
          <List list={list} />
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
