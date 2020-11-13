import Image from 'next/image'
import * as S from './styled'

export type HeaderProps = {
  season: string
  children: React.ReactNode
}

const Header = ({ season, children }: HeaderProps) => (
  <S.Container>
    <S.Icon>
      <Image src={`/icons/${season}.svg`} alt="Season" width={60} height={60} />
    </S.Icon>
    <S.Title>{children}</S.Title>
  </S.Container>
)

export default Header
