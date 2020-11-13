import styled from 'styled-components'

export const Container = styled.main``

export const Header = styled.h3`
  text-align: center;
  font-size: 1.4rem;
  margin: 20px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #b1b1b1;
`

export const List = styled.div``

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`

export const Item = styled.div`
  padding: 20px;
  background-color: #fff;
  figure {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 10px auto;
  }
  .info {
    margin: 10px 0;
  }
`

export const Title = styled.h3`
  text-align: center;
  font-size: 1.2rem;
`

export const Genres = styled.div`
  margin: 0 -5px;
  display: flex;
  flex-wrap: wrap;
  span {
    margin: 5px;
    background-color: var(--primary);
    color: var(--contrast);
    padding: 5px 10px;
  }
`
