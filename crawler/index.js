import cheerio from 'cheerio'
import axios from 'axios'

import { getSeason, getSeasonInfo, getSeasonImage, getSeasonsGenres, getCategory, formatEp, convertToJson, getDateNow } from './utils'

const BASE_URL = 'https://myanimelist.net/anime/season'

request()

async function request() {
  const { data } = await axios(BASE_URL)
  const $ = cheerio.load(data)

  const result = formatSeasonAnimes($)
  convertToJson(result)
}

function formatSeasonAnimes($) {
  const season = getSeason($)
  const titles = getSeasonInfo($, '.title-text')
  const descriptions = getSeasonInfo($, '.preline')
  const imagesUrl = getSeasonImage($)
  const dates = getSeasonInfo($, '.remain-time')
  const producers = getSeasonInfo($, '.producer')
  const eps = getSeasonInfo($, '.eps').map(formatEp)
  const genres = getSeasonsGenres($)
  const categories = getCategory($)

  const result = {
    season,
    lastUpdate: getDateNow(),
    animes: titles.map((title, i) => ({
      title,
      description: descriptions[i],
      imageUrl: imagesUrl[i],
      date: dates[i],
      producer: producers[i],
      eps: eps[i],
      genres: genres[i],
      category: categories[i],
    })),
  }

  return result
}


