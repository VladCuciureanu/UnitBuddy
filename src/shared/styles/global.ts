import { createGlobalStyle } from "styled-components"
import cssReset from "./reset"
import { darkTheme, lightTheme } from "./theme"
import { cssVariables } from "./variables"

const GlobalStyle = createGlobalStyle`
  ${cssReset}

  :root {
    ${cssVariables}
    ${lightTheme}
  }

  [data-theme="dark"] {
    ${darkTheme}
  }

  * {
    -webkit-font-smoothing: antialiased;
  }

  body {
    color: hsl(var(--colors-highContrast));
    background-color: hsl(var(--colors-bg));
    transition: background var(--theme-transition), color var(--theme-transition);
    font-family: var(--fonts-body);
  }
`

export default GlobalStyle
