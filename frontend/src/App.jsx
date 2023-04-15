import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { sampleApiCall } from './services/gamesApi'

function App() {
  const [count, setCount] = useState(0)

  const [games, setGames] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await sampleApiCall()
      setGames(data)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p> Sample Api call result: </p>
        <ol>
          {games.map((game) => (
            <li key={game?._id}>
              {game?.Name} -- {game?.Platform}
            </li>
          ))}
        </ol>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
