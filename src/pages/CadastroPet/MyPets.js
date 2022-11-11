
import { Api } from '../../services/Api.js' 
import { useState, useEffect } from "react"

import { Link } from "react-router-dom"

// import RoundedImage from '../../layout/RoundedImage'

import useFlashMessage from '../../hooks/useFlashMessage'

function MyPets() {
  const [pets, setPets] = useState([]);
  const [token]  = useState(localStorage.getItem('token') || '')
  const {setFlashMessage} = useFlashMessage()

  useEffect(() =>{
    Api.get('/CadastroPet/MyPets', {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`
      }
    })
    .then((response) => {
      setPets(response.data.pets)
    })
  }, [token])


  return (
    <section>
      <div>
        <h1>MyPets</h1>
        <Link to="/cadastropet/add"> Cadastrar Pet</Link>
      </div>
      <div>
        {pets.length > 0 && <p> Meus Pets cadastrados</p>}
        {pets.length === 0 && <p> Não há pets cadastrado</p>}
      </div>
    </section>
  );
}

export default MyPets;
