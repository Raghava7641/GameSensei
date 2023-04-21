import React from 'react'
import { useContext } from 'react'
import GameResults from '../user/GameResults'
import GameCarousel from '../user/GameCarousel'
import GameContext from '../context/GameContext'
import UserSearch from '../user/UserSearch'

function Home() {
  const {search,setSearch}=useContext(GameContext);

  return (<>
      {search && <UserSearch/>}
      <GameResults/>
      
    </>
  )
}

export default Home