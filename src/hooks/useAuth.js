// api
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../services/Api";
import useFlashMessage from "./useFlashMessage";

export default function useAuth() {
  const [authenticated, setAutheticated] = useState(false);
  const { setFlashMessage } = useFlashMessage();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      Api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAutheticated(true);
    }
  }, []);

  const register = async (user) => {
    let msgText = "Cadastro realizado com sucesso!";
    let msgType = "success";

    try {
      const data = await Api.post("/users/register", user).then(({ data }) => {
        return data;
      });

      await authUser(data);
    } catch (error) {
      msgText = error.response.data.message;
      msgType = "error";
    }

    setFlashMessage(msgText, msgType);
  };

  const login = async (user) => {
    let msgText = "Bem vindo(a)!";
    let msgType = "success";

    try {
      const data = await Api.post("/users/login", user).then(({ data }) => {
        return data;
      });

      await authUser(data);
    } catch (error) {
      msgText = error.response.data.message;
      msgType = "error";
    }

    setFlashMessage(msgText, msgType);
  };

  const authUser = async (data) => {
    setAutheticated(true);
    localStorage.setItem("token", JSON.stringify(data.token));
    navigate("/");
  };

  const logout = () => {
    const msgText = "Até mais!";
    const msgType = "success";

    setAutheticated(false);
    localStorage.removeItem("token");
    Api.defaults.headers.Authorization = undefined;
    navigate("/login");

    setFlashMessage(msgText, msgType);
  };

  return { authenticated, register, logout, login };
}
