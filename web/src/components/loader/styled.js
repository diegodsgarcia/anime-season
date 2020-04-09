import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--primary);

  p {
    margin: 20px 0;
    font-size: 1.4rem;
    font-weight: 700;
  }
`

const Loader = styled.div`
  width: 10em;
  height: 10em;
  border: 0.5em var(--primary) solid;
  border-radius: 100%;
  animation: load 4s linear alternate infinite;

  @keyframes load {
    0% {
      transform: rotate(2880deg);
      clip-path: polygon(100% 0, 0% 0%, 50% 50%, 0% 0%, 0 100%, 0 0);
    }
    25% {
      transform: rotate(1440deg);
      clip-path: polygon(100% 0, 50% 0%, 50% 50%, 0% 50%, 0 100%, 0 0);
    }
    50% {
      transform: rotate(720deg);
      clip-path: polygon(100% 0, 100% 0%, 50% 50%, 0% 100%, 0 100%, 0 0);
    }
    75% {
      transform: rotate(360deg);
      clip-path: polygon(100% 0, 100% 50%, 50% 50%, 50% 100%, 0 100%, 0 0);
    }
    100% {
      transform: rotate(0deg);
      clip-path: polygon(100% 0, 100% 100%, 50% 50%, 100% 100%, 0 100%, 0 0);
    }
  }
`

export { Container, Loader }
