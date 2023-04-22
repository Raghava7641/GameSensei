import React, { useEffect } from 'react'
import { useContext} from 'react';
import GameContext from '../context/GameContext'
import GameCarousel from './GameCarousel';
import GameRating from './GameRating';
import GameCarousel2 from './GameCarousel2';
import { Navigate } from 'react-router-dom';
// import game1 from '../images/game1.webp';

function GameResults() {

  const {sampleData,setSampleData,login,landing}=useContext(GameContext)
  useEffect(()=>{
    // console.log('hi')
    fetchData()

  },[landing])

  const fetchData = async () =>{
    const response = await fetch (`http://localhost:7077/home`)
    const data= await response.json()
    setSampleData(data)
  }
  // console.log('hello')
  // console.log(sampleData)
  const handleClick=()=>{
    return <Navigate to='/' />
    console.log('clicked')
  }

  return (<>
    {login&& <GameCarousel2/>}
    {landing&&
    <div className='grid grid-cols-1 gap-20 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {sampleData.map((i)=>(
        <div onClick={handleClick} className="transform  transition duration-500 hover:scale-125 hover: flex justify-center items-center">
        <div className="card-body bg-neutral rounded p-4 justify-center " key={i._id}>
          <div className="card-title font-bold justify-center">
            {i.Name}
          </div>
          <div className="flex flex-col items-center ">
            {/* <div className="bg-no-repeat bg-center" style={{'backgroundImage':`url(${i.imageLink})`}}>
            </div> */}
            <div className="bg-auto md-4 flex-grow ">
              <img src={i.imageLink} alt="game" className="bg-auto" />
            </div>
            <div className="flex flex-col justify-between m-2 ">
              <div className="platform">
                <div className="font-bold">
                  Platform:{i.Platform}
                </div>
              </div>
              <div className="year">
                <div className="font-bold">
                  Year of Release : {i.Year_of_Release}
                </div>
              
              </div>
            </div>
            <div className="rating mt-1">
              <GameRating rating={i.Critic_Score}/>
            </div>
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