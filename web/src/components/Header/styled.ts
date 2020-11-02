
import styled from 'styled-components'

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--contrast);
  font-weight: 700;
  background-color: var(--primary);
`

const Title = styled.h1`
  font-size: 1.8rem;
`

const Icon = styled.div`
  width: 70px;
  margin: 0 10px;
`

export { Container, Title, Icon }
