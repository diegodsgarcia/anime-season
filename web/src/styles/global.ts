import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
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

  body, input, select, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }

  :root {
    --primary: #000;
    --contrast: #fff;
  }

  .winter {
    --primary: #2a326f
  }
  .spring {
    --primary: #ff006a
  }
  .summer {
    --primary: #4caf50
  }
  .fall {
    --primary: #ff9800
  }
`

export default GlobalStyles
