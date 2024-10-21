import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from '../src/componentes/Comp1.jsx'

function App() {
  
  let cor = 'purple'
  let esp = '10px'


  let nome = ''
  let idade = ''
  let profissao = ''

  function carregarDados(){
    nome = document.getElementById('nome').value
    idade = document.getElementById('idade').value
    profissao = document.getElementById('profissao').value
  }
  

  return (
          <>
            <h1>Titulos</h1>

            <input id='nome' type='text' placeholder='Digite seu nome'/><br></br>
            <input id='idade' type='text' placeholder='Digite a idade'/><br></br>
            <input id='profissao' type='text' placeholder='Digite a profissão'/><br></br>
            <button onClick={carregarDados} type='button'>Enviar</button>

            <Comp1 nome={nome} idade={idade} profissao={profissao} />
          </>
  )
}

export default App
