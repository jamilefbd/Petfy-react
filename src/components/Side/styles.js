import styled from "styled-components";
import background from "../../assets/img/pattern.svg";

export const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${background});
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 400px;

    animation: shake 4s;
    animation-iteration-count: infinite;

    -webkit-filter: drop-shadow(5px 5px 5px var(--fire-opal));
    filter: drop-shadow(5px 5px 5px var(--fire-opal));

    @keyframes shake {
      0% {
        transform: translate(1px, 1px) rotate(0deg);
      }
      10% {
        transform: translate(-1px, -2px) rotate(-1deg);
      }
      20% {
        transform: translate(-3px, 0px) rotate(1deg);
      }
      30% {
        transform: translate(3px, 2px) rotate(0deg);
      }
      40% {
        transform: translate(1px, -1px) rotate(1deg);
      }
      50% {
        transform: translate(-1px, 2px) rotate(-1deg);
      }
      60% {
        transform: translate(-3px, 1px) rotate(0deg);
      }
      70% {
        transform: translate(3px, 1px) rotate(-1deg);
      }
      80% {
        transform: translate(-1px, -1px) rotate(1deg);
      }
      90% {
        transform: translate(1px, 2px) rotate(0deg);
      }
      100% {
        transform: translate(1px, -2px) rotate(-1deg);
      }
    }
  }
`;
