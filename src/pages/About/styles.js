import styled from "styled-components";
import background from "../../assets/img/pattern.svg";

export const Wrapper = styled.div`
  background-image: url(${background});
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Container = styled.div`
  min-height: 300px;
  width: 550px;
  border: 2px solid var(--fire-opal);
  border-radius: 5px;
  background: var(--orange-yellow);
  position: relative;
  box-shadow: var(--shadow-2);

  button {
    position: absolute;
    top: 0;
    right: 0;
    background: var(--fire-opal);
    color: var(--white);
    margin: 3px;
    box-shadow: var(--shadow-3);

    :hover {
      background-color: var(--black);
      color: var(--mimi-pink);
    }
  }

  top: -500px;
  animation: drop 0.4s ease forwards;
  @keyframes drop {
    70% {
      transform: translateY(85vh);
    }
    100% {
      transform: translateY(80vh);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  section {
    width: 50%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    img {
      max-width: 200px;
    }

    .text {
      font-size: 10px;
    }

    .partners {
      border: 2px solid var(--fire-opal);
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow-2);
    }
  }
`;
