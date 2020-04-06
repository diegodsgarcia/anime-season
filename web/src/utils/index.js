
function listAnimes(animes) {
  const CATEGORIES = {
    TvNew: 'TV (New)',
    TvContinuing: 'TV (Continuing)',
    ONA: 'ONA',
    OVA: 'OVA',
    Movie: 'Movie',
    Special: 'Special'
  }

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

export { listAnimes }
