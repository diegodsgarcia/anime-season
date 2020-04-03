import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: #DDD;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }
`

export default Global
