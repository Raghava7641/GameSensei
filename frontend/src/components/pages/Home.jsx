import React from 'react'
import { useContext } from 'react'
import GameResults from '../user/GameResults'
import GameCarousel from '../user/GameCarousel'
import GameContext from '../context/GameContext'
import UserSearch from '../user/UserSearch'

function Home() {
  const { search, login } = useContext(GameContext)

  return (
    <>
      {search && !login && <UserSearch />}
      <GameResults />
    </>
  )
}

export default Home
