import styled from 'styled-components'

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
  transition: opacity 0.3s, visibility 0.3s;

  &.--closed {
    opacity: 0;
    visibility: hidden;
  }

  &.--open {
    opacity: 1;
    visibility: visible;
  }
`

export default Overlay
