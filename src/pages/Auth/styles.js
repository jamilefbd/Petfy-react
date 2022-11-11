import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 50vw;

  img {
    width: 180px;
  }

  .info {
    position: absolute;
    top: 50px;
    right: 50px;
    background-color: var(--orange-yellow);
    border: 2px solid var(--fire-opal);
    color: var(--fire-opal);
    border-radius: 5px;

    :hover {
      color: var(--black);
      border: 2px solid var(--black);
      transition: 0.5s ease-in-out;
    }
  }

  a {
    font-weight: bold;
    text-decoration: underline;

    :hover {
      color: var(--fire-opal);
      text-decoration: none;
      transition: 0.5s ease-in-out;
    }
  }
`;

export const FormWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-transform: uppercase;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;

    input {
      margin-bottom: 1.5rem;
      width: 100%;
    }
  }

  button {
    margin-top: 3rem;
    width: 10rem;
  }
`;
