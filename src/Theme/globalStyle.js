import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  body {
    margin: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.35s linear;
  }
`
