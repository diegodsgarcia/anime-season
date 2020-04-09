import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 30px;
`

const Placeholder = styled.span`
  display: flex;
  align-items: center;
  height: 100%;
  flex: 1;
  margin: 0 10px;
  color: #000;
  box-shadow: 0 1px #000;
  cursor: pointer;
`

const Label = styled.label`
  display: flex;
  align-items: center;
  height: 100%;
`

const Options = styled.div`
  max-width: 500px;
  margin: 0 auto;
  flex: 1;
  background-color: var(--contrast);

  @media (max-width: 560px) {
    margin: 0 20px;
  }
`

const Option = styled.div`
  padding: 10px;
  border-bottom: 1px solid #666;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #DDD;
  }

  &.--selected {
    background-color: #DDD;
  }
`

export {
  Container,
  Label,
  Placeholder,
  Options,
  Option,
}
