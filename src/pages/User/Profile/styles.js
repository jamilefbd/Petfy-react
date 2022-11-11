import styled from "styled-components";
import background from "../../../assets/img/pattern.svg";

export const Wrapper = styled.div`
  background-image: url(${background});
  background-size: cover;
  display: flex;
  justify-content: center;
  height: 100vh;
  padding: 3rem;
`;

export const Container = styled.div`
  width: 50%;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 1rem;
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
    width: 10rem;
  }
`;
