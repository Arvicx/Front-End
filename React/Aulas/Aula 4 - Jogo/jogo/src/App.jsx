import { useState } from 'react'
import './App.css'

function App() {
  //  Variáveis para o personagem
  const [vida, setVida] = useState(10)
  const [ataque, setAtaque] = useState(5)
  const [defesa, setDefesa] = useState(3)
  const [inteligencia, setInteligencia] = useState(1)

  // Funções para alterar atributos do personagem
  const aumentarPontos = (setter, valor) => () => atributo(valor + 1);
  const diminuirPontos = (setter, valor) => () => atributo(valor - 1);
  const resetar = (atributo) => () => atributo(0);

  return (
    <div>
      <h1>Ficha do Personagem</h1>
      <div id="infoPersonagem" className="card">
        <h2>Nome : Arthur</h2>
        <p>Classe : Ladino</p>
        <p>Nível : 1</p>
      </div>

      <div id="statusPersonagem" className="card">
        {/* Vida */}
        <button onclick={diminuirPontos(setVida, vida)}>-1</button>
        <h4>Vida : {vida}</h4>
        <button onclick={aumentarPontos(setVida, vida)}>+1</button>
        <button onclick={resetar(setVida, 10)}>Resetar</button>
      </div>

      <div>
        <button onclick={aumentarPontos(setAtaque)}></button>
      </div>
      </div>
      )
}
    
export default App
