import cheerio from 'cheerio'
import axios from 'axios'

const BASE_URL = 'https://myanimelist.net/anime/season'

async function listSeason(season) {
  if (season) {
    const year = new Date().getFullYear()
    const { data } = await axios(`${BASE_URL}/${year}/${season}`)
    return cheerio.load(data)
  } {
    const { data } = await axios(`${BASE_URL}`)
    return cheerio.load(data)
  }
}

export { listSeason }
