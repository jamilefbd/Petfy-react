import { useContext, useState } from "react";

import Side from "../../../components/Side";

import { Wrapper, Container, FormWrapper } from "../styles";
import { useNavigate } from "react-router-dom";

import { IoInformation } from "react-icons/io5";

// context
import { Context } from "../../../context/UserContext";

const Register = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const { register } = useContext(Context);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(user);
  };

  return (
    <Wrapper>
      <Side />
      <Container>
        <button className="info" onClick={() => navigate("/about")}>
          <IoInformation size={20} />
        </button>
        <FormWrapper>
          <p>Cadastro</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Telefone"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Senha"
              name="password"
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirmação de senha"
              onChange={handleChange}
            />
            <button className="progress-button" type="submit">
              Cadastrar
            </button>
          </form>
        </FormWrapper>
        <a onClick={() => navigate("/login")}>Já tenho uma conta</a>
      </Container>
    </Wrapper>
  );
};

export default Register;
