import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const List = ({ animes }) => (
  <S.Container>
    {animes.map(({ title, description, imageUrl, date, producer, eps, genres }, i) => (
      <S.Item key={i}>
        <S.Title>{title}</S.Title>
        <figure>
          <img src={imageUrl} alt={title} />
        </figure>
        <S.Description>{description}</S.Description>
        <S.Date>{date}</S.Date>
        <span>{producer}</span>
        <span>{eps}</span>
        <S.Genres>{genres.map((genre, i) => <span key={i}>{genre}</span>)}</S.Genres>
      </S.Item>
    ))}
  </S.Container>
)

List.propTypes = {
  animes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      imageUrl: PropTypes.string,
      date: PropTypes.string,
      producer: PropTypes.string,
      eps: PropTypes.number,
      genres: PropTypes.arrayOf(PropTypes.string)
    })
  )
}

export default List
