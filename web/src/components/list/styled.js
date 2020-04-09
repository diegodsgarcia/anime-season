import styled from 'styled-components'

const Container = styled.main`
`

const Header = styled.h3`
  text-align: center;
  font-size: 1.4rem;
  margin: 20px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #b1b1b1;
`

const List = styled.div``

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`

const Item = styled.div`
  padding: 20px;
  background-color: #FFF;

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

const Title = styled.h3`
  text-align: center;
  font-size: 1.2rem;
`

const Genres = styled.div`
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

export { Container, Header, List, Items, Item, Title, Genres }
