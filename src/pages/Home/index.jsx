// components
import Navbar from "../../components/Navbar";

import { Wrapper, Container } from "./styles";
import catdog from "../../assets/img/catdog.svg";
import { useContext } from "react";
import { Context } from "../../context/UserContext";

const Home = () => {
  const { authenticated } = useContext(Context);

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <h1>Home</h1>
        <img src={catdog} alt="cat and dog" />
      </Container>
    </Wrapper>
  );
};

export default Home;
