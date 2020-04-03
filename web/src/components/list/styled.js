import styled from 'styled-components'

const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  margin: 20px 0;
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

`

const Title = styled.h3`
  text-align: center;
  font-size: 1.2rem;
`

const Description = styled.div`

`

const Date = styled.div`
  margin: 10px 0;
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

export { Container, Item, Title, Date, Description, Genres }
