import React from 'react'
import * as S from './styled'

import { ReactComponent as WinterIcon } from '../../assets/icons/winter.svg'
import { ReactComponent as SpringIcon } from '../../assets/icons/spring.svg'
import { ReactComponent as SummerIcon } from '../../assets/icons/summer.svg'
import { ReactComponent as FallIcon } from '../../assets/icons/fall.svg'

function checkIconSeason(season) {
  switch (season) {
    case 'Winter':
      return <WinterIcon />
    case 'Spring':
      return <SpringIcon />
    case 'Summer':
      return <SummerIcon />
    case 'Fall':
      return <FallIcon />
    default:
      return null
  }
}

const Header = ({ season, children }) => (
  <S.Container>
    <S.Title>{children}</S.Title>
    <S.Icon>
      {checkIconSeason(season)}
    </S.Icon>
  </S.Container>
)

export default Header
