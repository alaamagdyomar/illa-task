import React , { useState , useEffect } from 'react'
import axios from 'axios'
import DisplayPokemon from '../pokemon/pokemon'
import { API_URL } from '../../api/api'
import './poklist.css'

const PokList = () => {
  const [ pokemons , setPokemons ] = useState([]);

  const getPokemons = (url)=>{
    axios
    .get(url)
    .then((res)=>{
      console.log('res =',res)
      setPokemons(res.data.results)
    })
    .catch((error)=>console.log('error =', error))
  }

  useEffect(()=>{
    getPokemons(API_URL);
  },[])


  return (
            <div className='pokList'>
              {pokemons.map((pokemon, id)=>(
                  <DisplayPokemon pokemon={pokemon}/>
              ))}
            </div>
    )
  }

export default PokList;