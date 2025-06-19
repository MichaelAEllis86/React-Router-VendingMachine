import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BacheloChow from './BachelorChow'
import Slurm from './Slurm'
import VendingMachine from './VendingMachine'
import Popplers from './Popplers'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<VendingMachine/>}/>
      <Route path="/slurm" element={<Slurm/>}/>
      <Route path="/bachelorchow" element={<BacheloChow/>}/>
      <Route path="/popplers" element={<Popplers/>}/>
    </Routes>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
