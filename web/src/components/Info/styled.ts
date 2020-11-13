import styled, { css } from 'styled-components'

type OverlayProps = {
  isOpen: boolean
}

export const Overlay = styled.div<OverlayProps>`
  ${({ isOpen }) => css`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000000b5;
    transition: opacity 0.3s, visibility 0.3s;
    opacity: ${isOpen ? 1 : 0};
    visibility: ${isOpen ? 'visible' : 'hidden'};
  `}
`

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

  a {
    width: 50px;
    height: 50px;
    margin: 0 10px;
  }

  path {
    fill: #000;
  }
`

export const Info = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;

  path {
    fill: #000;
  }
`
