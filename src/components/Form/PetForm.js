import { useState } from "react";

//import formStyles from ".styles.js;

import Input from "./Input";
import Select from "./Select";

function PetForm({ handleSubmit, petData, btnText }) {
  const [pet, setPet] = useState(petData || {});
  const [preview, setPreview] = useState([]);
  const colors = ["Branco", "Preto", "Cinza", "Caramelo", "Mesclado"];

  function onFileChange(e) {
    setPreview(Array.from(e.target.files));
    setPet({ ...pet, imagens: [...e.target.files] });
  }

  function handleChange(e) {
    setPet({ ...pet, [e.target.name]: e.target.files });
  }

  function handleColor(e) {
    setPet({ ...pet, color: e.target.options[e.target.selectedIndex].text });
  }

  function submit(e) {
    e.preventDefaul();
    handleSubmit(pet);
  }

  return (
    <form onSubmit={submit} className={formStyles.form_container}>
      <div>
        {preview.length > 0
          ? preview.map((image, index) => (
              <img
                src={URL.createObjectURL(image)}
                alt={pet.name}
                key={`${pet.name}+${index}`}
              />
            ))
          : pet.images &&
            pet.images.map((image, index) => (
              <img
                src={`${process.env.REACT_APP_API}/images/pets/${image}`}
                alt={pet.name}
                key={`${pet.name}+${index}`}
              />
            ))}
      </div>
      <Input
        text="Imagens do Pet"
        type="file"
        name="imagens"
        handleOnChange={onFileChange}
        multiple={true}
      />
      <Input
        text="Nome do Pet"
        type="text"
        name="name"
        placeholder="Digite o nome do seu Pet"
        handleOnChange={handleChange}
        value={pet.name || ""}
      />
      <Input
        text="Idade do pet"
        type="text"
        name="age"
        placeholder="Digite a idade do seu Pet"
        handleOnChange={handleChange}
        value={pet.age || ""}
      />
      <Select
        name="color"
        text="Selecione a cor"
        options={colors}
        handleOnChange={handleColor}
        value={pet.colors || ""}
      />

      <input type="submit" value={btntext} />
    </form>
  );
}

export default PetForm;
