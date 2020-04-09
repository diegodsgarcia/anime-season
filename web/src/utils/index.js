const CATEGORIES = {
  TvNew: 'TV (New)',
  TvContinuing: 'TV (Continuing)',
  ONA: 'ONA',
  OVA: 'OVA',
  Movie: 'Movie',
  Special: 'Special'
}

function listAnimes(animes) {
  return [
    {
      category: CATEGORIES.TvNew,
      animes: animes.filter(({ category }) => category === CATEGORIES.TvNew)
    },
    {
      category: CATEGORIES.TvContinuing,
      animes: animes.filter(({ category }) => category === CATEGORIES.TvContinuing)
    },
    {
      category: CATEGORIES.ONA,
      animes: animes.filter(({ category }) => category === CATEGORIES.ONA)
    },
    {
      category: CATEGORIES.OVA,
      animes: animes.filter(({ category }) => category === CATEGORIES.OVA)
    },
    {
      category: CATEGORIES.Movie,
      animes: animes.filter(({ category }) => category === CATEGORIES.Movie),
    },
    {
      category: CATEGORIES.Special,
      animes: animes.filter(({ category }) => category === CATEGORIES.Special)
    }
  ]
}

function filterAnimesByCategory(animeList, category) {
  const animes = animeList.filter(anime => anime.category === category)
  return [{ category, animes }]
}

function getSelectCategories() {
  const values = Object.keys(CATEGORIES)
  const labels = Object.values(CATEGORIES)

  return [{ label: 'All', value: 'All' }, ...values.map((value, i) => ({ label: labels[i], value }))]
}

export { listAnimes, filterAnimesByCategory, getSelectCategories }
