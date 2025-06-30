import { useState } from 'react'
import './App.css'

function App() {
  //  Variáveis para o personagem
  const [vida, setVida] = useState(10)
  const [ataque, setVida] = useState(5)
  const [defesa, setDefesa] = useState(3)
  const [inteligencia, setInteligencia] = useState(1)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
      </p>
    </>
  )
}

export default App
