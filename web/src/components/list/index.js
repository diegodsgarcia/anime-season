import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const List = ({ list }) => (
  <S.Container>
    {list.map(({ category, animes }, i) => (
      <S.List key={i}>
        <S.Header>{category}</S.Header>
        <S.Items>
          {animes.map(({ title, description, imageUrl, date, producer, eps, genres }) => (
            <S.Item key={title}>
              <S.Title>{title}</S.Title>
              <figure>
                <img src={imageUrl} alt={title} />
              </figure>
              <div className="info"><strong>Date</strong> {date}</div>
              <div className="info"><strong>Producer </strong> {producer}</div>
              {eps && <div className="info"><strong>Total eps.</strong>  {eps}</div>}
              <div className="info">{description}</div>
              <S.Genres>{genres.map((genre, i) => <span key={i}>{genre}</span>)}</S.Genres>
            </S.Item>
          ))}
        </S.Items>
      </S.List>

    ))}
  </S.Container>
)

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
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
    })
  )
}

export default List
