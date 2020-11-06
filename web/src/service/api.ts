import axios from 'axios'

const BASE_URL = 'https://anime-season.now.sh/api'

export async function getAnimesSeason(season?: string) {
  if (season) {
    const { data } = await axios.get(`${BASE_URL}/${season}`)
    return data
  } else {
    const { data } = await axios.get(`${BASE_URL}/season`)
    return data
  }
}
