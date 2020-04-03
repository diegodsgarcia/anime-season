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

  :root {
    --primary: transparent;
    --contrast: #fff;
  }

  .winter {
    --primary: #2a326f
  }

  .spring {
    --primary: #ff006a
  }

  .summer {
    --primary: #ff9800
  }

  .fall {
    --primary: #4caf50
  }
`

export default Global
