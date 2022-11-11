import { useContext } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/img/logo.svg";
import { Context } from "../../context/UserContext";

import { NavWrapper } from "./styles";

const Navbar = () => {
  const { authenticated, logout } = useContext(Context);

  return (
    <NavWrapper>
      <div>
        <img src={Logo} alt="Petfy" />
      </div>
      <ul>
        <li>
          <NavLink to="/">Adotar</NavLink>
        </li>

        {authenticated ? (
          <>
          <li>
              <NavLink to="/cadastropet/mypets">Meus Pets</NavLink>
            </li>
            <li>
              <NavLink to="/user/profile">Perfil</NavLink>
            </li>
            <li onClick={logout}>
              <NavLink>Sair</NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Entrar</NavLink>
            </li>
            <li>
              <NavLink to="/register">Cadastrar-se</NavLink>
            </li>
          </>
        )}
      </ul>
    </NavWrapper>
  );
};

export default Navbar;
