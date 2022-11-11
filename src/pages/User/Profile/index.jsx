import { useState, useEffect } from "react";
import { Api } from "../../../services/Api";

import Navbar from "../../../components/Navbar";
import Image from "../../../components/Image";

import { Container, FormWrapper, Wrapper } from "./styles";

import useFlashMessage from "../../../hooks/useFlashMessage";

const Profile = () => {
  const [user, setUser] = useState({});
  const [preview, setPreview] = useState("");
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    Api.get("/users/checkuser", {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    }).then(({ data }) => {
      setUser(data);
    });
  }, [token]);

  const fileChange = (e) => {
    setPreview(e.target.files[0]);
    setUser({ ...user, [e.target.name]: e.target.files[0] });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let msgType = "success";

    const formData = new FormData();

    await Object.keys(user).forEach((key) => formData.append(key, user[key]));

    const data = await Api.patch(`/users/edit/${user._id}`, formData, {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then(({ data }) => {
        return data;
      })
      .catch((error) => {
        msgType = "error";
        return error.response.data;
      });

    setFlashMessage(data.message, msgType);
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <Container>
          <FormWrapper>
            {(user.image || preview) && (
              <Image
                src={
                  preview
                    ? URL.createObjectURL(preview)
                    : `http://localhost:5000/images/users/${user.image}`
                }
                alt={user.name}
              />
            )}
            <form onSubmit={handleSubmit}>
              <input type="file" name="image" onChange={fileChange} />

              <input
                type="email"
                name="email"
                placeholder="E-mail"
                onChange={handleChange}
                value={user.email || ""}
              />

              <input
                type="text"
                name="name"
                placeholder="Nome"
                onChange={handleChange}
                value={user.name || ""}
              />

              <input
                type="text"
                name="phone"
                placeholder="Telefone"
                onChange={handleChange}
                value={user.phone || ""}
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
                Salvar
              </button>
            </form>
          </FormWrapper>
        </Container>
      </Wrapper>
    </>
  );
};

export default Profile;
