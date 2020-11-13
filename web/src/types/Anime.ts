export type AnimeSeason = {
  season: string
  year: string
  lastUpdate: string
  animes: Anime[]
}

export type Anime = {
  title: string
  description: string
  imageUrl: string
  date: string
  producer: string
  eps: number
  genres: string[]
  category: string
}
