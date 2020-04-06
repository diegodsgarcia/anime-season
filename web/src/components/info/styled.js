import styled from 'styled-components'
import { InfoCircle } from '@styled-icons/fa-solid/InfoCircle'

const Overlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000000b5;
`

const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  max-width: 500px;
  text-align: center;

  h2 {
    margin: 20px 0;
  }

  a {
    color: #2196f3;
  }
`

const SocialLinks = styled.div`
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

const ButtonInfo = styled(InfoCircle)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`

export { Overlay, Container, ButtonInfo, SocialLinks }
