import React from 'react'

import { Anime } from 'types/Anime'
import * as S from './styled'

export type ListProps = {
  list: {
    category: string
    animes: Anime[]
  }[]
}

const List = ({ list }: ListProps) => (
  <S.Container>
    {list.map(({ category, animes }, i) => (
      <S.List key={i}>
        <S.Header>{category}</S.Header>
        <S.Items>
          {animes.map(
            ({ title, description, imageUrl, date, producer, eps, genres }) => (
              <S.Item key={title}>
                <S.Title>{title}</S.Title>
                <figure>
                  <img src={imageUrl} alt={title} />
                </figure>
                <div className="info">
                  <strong>Date</strong> {date}
                </div>
                <div className="info">
                  <strong>Producer </strong> {producer}
                </div>
                {eps && (
                  <div className="info">
                    <strong>Total eps.</strong> {eps}
                  </div>
                )}
                <div className="info">{description}</div>
                <S.Genres>
                  {genres.map((genre, i) => (
                    <span key={i}>{genre}</span>
                  ))}
                </S.Genres>
              </S.Item>
            )
          )}
        </S.Items>
      </S.List>
    ))}
  </S.Container>
)
export default List
