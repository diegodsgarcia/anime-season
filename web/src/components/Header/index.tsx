import * as S from './styled'

import WinterIcon from 'assets/icons/winter.svg'
import SpringIcon from 'assets/icons/spring.svg'
import SummerIcon from 'assets/icons/summer.svg'
import FallIcon  from 'assets/icons/fall.svg'

function checkIconSeason(season: string) {
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

export type HeaderProps = {
  season: string
  children: React.ReactNode
}

const Header = ({ season, children }: HeaderProps) => (
  <S.Container>
    <S.Icon>
      {checkIconSeason(season)}
    </S.Icon>
    <S.Title>{children}</S.Title>
  </S.Container>
)

export default Header
