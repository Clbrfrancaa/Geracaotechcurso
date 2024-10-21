import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from './componentes/Comp1'
import Comp2 from './componentes/Comp2'

function App() {
  // let [nome , setNome] = useState('')
  // let [idade , setIdade] = useState('')
  // let [profissao , setProfissao] = useState('')
  // let [usuarioCadastrado, setUsuarioCadastrado] = useState(null)

  // function carregarDados(){
  //   setNome(document.getElementById('nome').value)
  //   setIdade(document.getElementById('idade').value)
  //   setProfissao(document.getElementById('profissao').value)

  //   let cadastro = {
  //     nome:nome,
  //     idade:idade,
  //     profissao:profissao
  //   }

  //   setUsuarioCadastrado(cadastro)

    // console.log(usuarioCadastrado)
    // console.log(`nome: ${nome}, idade: ${idade}, profissao: ${profissao}`)
    let [mostrar, setMostrar] = useState(false)
    let [msgBtn, setMsgBtn] = useState("Mostrar paragrafo")

    function mostrarParagrafo (){
      if(mostrar == true){
        setMostrar(false)
        setMsgBtn("Mostrar paragrafo")
      }else{
        setMostrar(true)
        setMsgBtn("Esconder paragrafo")
      }

    }
  
  return (
    <>
      {/* <h1>Título</h1>
      <input id='nome' type="text" placeholder='Digite seu nome' /><br/>
      <input id='idade' type="text" placeholder='Digite sua idade' /><br/>
      <input id='profissao' type="text" placeholder='Digite sua profissão' /><br/>
      <button onClick={carregarDados} type='button'>Enviar</button>
    {usuarioCadastrado && (<Comp1 usuario = {usuarioCadastrado} />)} */}

    <button onClick={mostrarParagrafo}>{msgBtn}</button>

    {mostrar && (
      <div>
        <h2>Dormir</h2>
        <img src='https://i.pinimg.com/564x/6e/d2/d1/6ed2d11d2355c31232b4576b71f133af.jpg'/>
      </div>
    )}



    <Comp2/>
    </>
  )
}


export default App