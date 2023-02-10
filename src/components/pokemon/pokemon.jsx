import React , {useState , useEffect } from 'react'
import axios from 'axios'



const DisplayPokemon = ({pokemon}) =>{

  const [ pokeCard , setPokeCard ] = useState({})
  

  const getPokedetails = (url) =>{
    axios
    .get(url)
    .then((res)=>{
      console.log(res.data)
      setPokeCard(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })

  }

  useEffect(()=>{
      getPokedetails(pokemon.url)
  },[])

  return (
    <div>
      <p>{pokeCard.name}</p>
      <img src={pokeCard.sprites.front_default}></img>
    </div>
    )
}

export default DisplayPokemon;