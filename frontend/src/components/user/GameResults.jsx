import React from 'react'
import { useContext} from 'react';
import GameContext from '../context/GameContext'
import GameCarousel from './GameCarousel';
// import game1 from '../images/game1.webp';

function GameResults() {

  const {sampleData,login,landing}=useContext(GameContext)

  return (<>
    {login&& <GameCarousel/>}
    {landing&&
    <div className='grid grid-cols-1 gap-8 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {sampleData.map((i)=>(
        <div className="card-body bg-neutral rounded " key={i.id}>
          <div className="card-title font-bold justify-center">
            {i.name}
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <div className="bg-cover">
              <img src={i.image} alt="game" className="image" />
            </div>
            <div className="rating">
              Ratings
            </div>
          </div>
        </div>
      ))}
    </div>
    } 
    </>
  )
}

export default GameResults;