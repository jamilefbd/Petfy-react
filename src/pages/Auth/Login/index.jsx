import Side from "../../../components/Side";

import logo from "../../../assets/img/logo.svg";

import { Wrapper, Container, FormWrapper } from "../styles";
import { useNavigate } from "react-router-dom";

import { IoInformation } from "react-icons/io5";
import { useContext, useState } from "react";

import { Context } from "../../../context/UserContext";

const Login = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const { login } = useContext(Context);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
  };

  return (
    <Wrapper>
      <Side />
      <Container>
        <button className="info" onClick={() => navigate("/about")}>
          <IoInformation size={20} />
        </button>
        <img src={logo} alt="logo" />
        <FormWrapper>
          <p>Login</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              onChange={handleChange}
            />
            <button className="progress-button" type="submit">
              entrar
            </button>
          </form>
        </FormWrapper>
        <a onClick={() => navigate("/register")}>Crie uma conta</a>
      </Container>
    </Wrapper>
  );
};

export default Login;
