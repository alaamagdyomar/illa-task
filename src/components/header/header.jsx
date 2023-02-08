import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';

const PokHeader = () => {
  return (
    <div className='pokHeader'>
          <div className='leftPart'>
              <img className="pokImg" src='/src/imgs/pokemonIcon.png' alt=""/> 
              <p className='pokText'>Pokemon Gallery</p>
          </div>
          <div className='rightPart'>
              <span className='searchSpan'>
              <SearchIcon/>
              </span>
              <input className='searchInput' placeholder='Search'/>
          </div>
      </div>
  )
}

export default PokHeader;