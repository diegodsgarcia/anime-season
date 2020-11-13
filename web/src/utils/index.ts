import { Anime } from 'types/Anime'

const categories = [
  'TV (New)',
  'TV (Continuing)',
  'ONA',
  'OVA',
  'Movie',
  'Special'
]

const options = ['Winter', 'Spring', 'Summer', 'Fall']

function listAnimes(animes: Anime[]) {
  return categories
    .map((category) => ({
      category,
      animes: animes.filter((anime) => anime.category === category)
    }))
    .filter((item) => item.animes.length)
}

function filterAnimesByCategory(animes: Anime[], category: string) {
  return animes.filter((anime) => anime.category === category)
}

function getSelectCategories() {
  return [
    { label: 'All', value: 'All' },
    ...categories.map((value) => ({ label: value, value }))
  ]
}

function getSelectSeasons() {
  return options.map((option) => ({
    label: option,
    value: option.toLowerCase()
  }))
}

export {
  listAnimes,
  filterAnimesByCategory,
  getSelectCategories,
  getSelectSeasons
}
