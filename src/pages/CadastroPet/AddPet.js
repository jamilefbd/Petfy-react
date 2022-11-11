//import api from "src/services/api";

import styles from "./AddPet.module.css";

import { useState } from "react";
import { userHistory } from "react-router-dom";

//Componetes
import PetForm from "../../Form/PetForm";

//hooks
import useFlashMessage from "../../hooks/useFlashMessage";
import { Api } from "../../services/Api";

function AddPet() {
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();
  const history = useHistory();

  async function registerPet(pet) {
    let msgType = "success";

    const formData = new FormData();

    await Object.keys(pet).forEach((key) => {
      if (key === "images") {
        for (let i = 0; i < pet[key].length; i++) {
          formData.append("images", pet[key][i]);
        }
      } else {
        formData.append(key, pet[key]);
      }
    });

    const data = await Api
      .post("/pets/create", formData, {
        Authorization: `Bearer ${JSON.parse(token)}`,
        "Content-Type": "multipart/form-data",
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        msgTyoe = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, msgType)

    if (msgType !== 'error') {
        history.push("/pets/mypets")
  }
}

  return (
    <section className={styles.addpet_header}>
      <div>
        <hi> Cadastre um Pet</hi>
        <p>Depois ele ficará disponível para adoção</p>
      </div>
      <PetForm handleSubmit={registerPet} btnText="Cadastrar Pet" />
    </section>
  );
}

export default AddPet;
