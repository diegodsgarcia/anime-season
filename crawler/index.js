import cheerio from 'cheerio'
import axios from 'axios'

import { getSeasonInfo, getSeasonImage, getSeasonsGenres, formatEp, convertToJson } from './utils'

const BASE_URL = 'https://myanimelist.net/anime/season'

request()

async function request() {
  const { data } = await axios(BASE_URL)
  const $ = cheerio.load(data)

  const animes = formatAnimes($)
  convertToJson(animes)
}

function formatAnimes($) {
  const titles = getSeasonInfo($, '.title-text')
  const descriptions = getSeasonInfo($, '.preline')
  const imagesUrl = getSeasonImage($)
  const dates = getSeasonInfo($, '.remain-time')
  const producers = getSeasonInfo($, '.producer')
  const eps = getSeasonInfo($, '.eps').map(formatEp)
  const genres = getSeasonsGenres($)

  const animes = titles.map((title, i) => ({
    title,
    description: descriptions[i],
    imageUrl: imagesUrl[i],
    date: dates[i],
    producer: producers[i],
    eps: eps[i],
    genres: genres[i],
  }))

  return animes
}


