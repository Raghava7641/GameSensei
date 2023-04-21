import { createContext,useState } from "react";
import game1 from '../images/game1.webp';
import game2 from '../images/rocket_league.jpeg';


const GameContext=createContext();

export const GameProvider=({children})=>{
    const [login,setLogin]=useState(true);
    const [landing,setLanding]=useState(false);
    const [search,setSearch]=useState(false)
    const sampleData=[
        {
            id:1,
            name:'Game1',
            age:21,
            year:2001,
            image:game1,
        },
        {
            id:2,
            name:'Game2',
            age:49,
            year:1974,
            image:game2,
        },
        {
            id:3,
            name:'Game3',
            age:39,
            year:1983,
            image:game1,
        },
        {
            id:4,
            name:'Game4',
            age:20,
            year:2002,
            image:game2
        }
    ];



    return <GameContext.Provider value={{
        sampleData,
        setLogin,
        setLanding,
        search,
        setSearch,
        login,
        landing}}>
        {children}
    </GameContext.Provider> 
}

export default GameContext;