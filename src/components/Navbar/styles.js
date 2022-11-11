import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  position: fixed;
  width: 95%;

  div {
    display: flex;
    align-items: center;

    img {
      width: 150px;
    }
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }

  li,
  a {
    color: var(--black);
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s;
    padding: 0.5em 0.8em;
    border-radius: 5px;
  }

  li:hover > a {
    color: var(--fire-opal);
  }
`;
