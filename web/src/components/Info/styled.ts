import styled from 'styled-components'
import { InfoCircle } from '@styled-icons/fa-solid/InfoCircle'

export const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  max-width: 500px;
  text-align: center;

  h2,
  p {
    margin: 20px 0;
  }

  a {
    color: #2196f3;
  }
  @media (max-width: 560px) {
    margin: 0 20px;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  > a {
    width: 50px;
    height: 50px;
    margin: 0 10px;
    color: #000;
  }
`

export const ButtonInfo = styled(InfoCircle)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`
