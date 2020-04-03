import axios from 'axios'

const BASE_URL = 'https://anime-season.now.sh/api'

async function getAnimesSeason() {
  const { data } = await axios.get(`${BASE_URL}/season`)
  return data
}

export { getAnimesSeason }
