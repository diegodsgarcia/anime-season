import axios from 'axios'

export async function getAnimesSeason(season?: string) {
  if (season) {
    const { data } = await axios.get(`${process.env.API_URL}/api/${season}`)
    return data
  } else {
    const { data } = await axios.get(`${process.env.API_URL}/api/season`)
    return data
  }
}
