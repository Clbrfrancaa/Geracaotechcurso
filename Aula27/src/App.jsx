import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente1 from './Componentes/Componente1'
import Imagens from './Componentes/Imagens'

function App() {
  let estiloTitulo3 = {
    backgroundColor: 'pink',
    color: 'black'
  } 
  
  let azul = true

  let estiloBotao= {
    backgroundColor: azul == true ? 'blue' : 'gray',
    color: 'white',
    padding: '10px',
    borderRadius: '8px',
    border: 'none'

  }

  return (
    <>
      <div>
        <h1>Aula 27</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, odio ullam dignissimos ea expedita odit?

        <h1>Titulo 2</h1>
        <p className='paragrafo1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eius veritatis obcaecati dolorem necessitatibus, sit impedit quo facere modi hic error blanditiis ad quidem voluptatem distinctio nesciunt accusamus aut eligendi.</p>
        </p>
      </div>
      
      <Componente1/>

      {/* CSS INLINE */}

        <h1 style={estiloTitulo3}>Titulo 3</h1>
        <p style={{backgroundColor: 'red', color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eius veritatis obcaecati dolorem necessitatibus, sit impedit quo facere modi hic error blanditiis ad quidem voluptatem distinctio nesciunt accusamus aut eligendi.</p>

        <button style={estiloBotao}>Clique aqui</button>

        <p className='styles.primaria'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At placeat cumque, nobis expedita laboriosam minima vel deleniti quia ex alias sit atque sequi officia delectus quis aliquam repudiandae porro maxime.
        </p>

        <Imagens/>
    


    </>
  )
}

export default App
