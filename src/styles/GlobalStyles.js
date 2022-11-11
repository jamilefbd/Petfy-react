import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`${css`
  * {
    /* colors */
    --orange-yellow: #fad47b;
    --fire-opal: #dd5d4f;
    --success-green: #4bb543;
    --mimi-pink: #f9d3e0;
    --black: #000;
    --white: #fff;
    /* box-shadows */
    --shadow-1: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    --shadow-2: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    --shadow-3: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--orange-yellow);
    font-family: "Baloo 2", cursive;
    overflow: hidden;

    // buttons
    button {
      border: none;
      border-radius: 3px;
      height: 30px;
      text-transform: Capitalize;
    }

    button:hover {
      cursor: pointer;
      transition: 0.5s ease-in-out;
      font-weight: bold;
      box-shadow: var(--shadow-2);
    }

    a:hover {
      cursor: pointer;
    }

    .progress-button {
      background-color: var(--black);
      color: var(--white);

      :hover {
        background-color: var(--orange-yellow);
        border: 2px solid var(--fire-opal);
        color: var(--black);
      }
    }

    // inputs
    input {
      border: 2px solid var(--fire-opal);
      border-radius: 5px;
      height: 30px;
      background-color: var(--orange-yellow);
      text-indent: 25px;

      ::placeholder {
        color: var(--black);
      }

      :focus {
        outline: none;
      }

      :hover {
        box-shadow: var(--shadow-3);
        ::placeholder {
          color: rgba(0, 0, 0, 0.75);
        }
      }
    }
  }
`}`;
