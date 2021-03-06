
import { getSeason, getSeasonInfo, getSeasonImage, getSeasonsGenres, getCategory, formatEp, convertToJson, getDateNow } from './utils'
import { listSeason } from './utils/api'

init()

async function init() {
  const seasons = {
    now: 'season',
    winter: 'winter',
    spring: 'spring',
    summer: 'summer',
    fall: 'fall',
  }

  for (const prop in seasons) {
    const route = seasons[prop] === seasons.now ? '' : seasons[prop]
    const season = await listSeason(route)
    const seasonResult = formatSeasonAnimes(season)
    convertToJson(seasonResult, seasons[prop])
  }
}

function formatSeasonAnimes($) {
  const season = getSeason($)
  const titles = getSeasonInfo($, '.link-title')
  const descriptions = getSeasonInfo($, '.preline')
  const imagesUrl = getSeasonImage($)
  const dates = getSeasonInfo($, '.remain-time')
  const producers = getSeasonInfo($, '.producer')
  const eps = getSeasonInfo($, '.eps').map(formatEp)
  const scores = getSeasonInfo($, '.score-label')
  const genres = getSeasonsGenres($)
  const categories = getCategory($)

  const result = {
    ...season,
    lastUpdate: getDateNow(),
    animes: titles.map((title, i) => ({
      title,
      description: descriptions[i],
      imageUrl: imagesUrl[i],
      date: dates[i],
      producer: producers[i],
      eps: eps[i],
      score: scores[i],
      genres: genres[i],
      category: categories[i],
    })),
  }

  return result
}


