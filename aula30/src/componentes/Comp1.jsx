import { useState } from 'react'
import styles from './Comp1.module.css'

function Comp1(usuario) {

    console.log(usuario)

    let [nome , setNome] = useState('')
    let [idade , setIdade] = useState('')
    let [profissao , setProfissao] = useState('')

    let [clicou, setClicou] = useState(false)

    function mostrarUsuario () {

        setNome(usuario.nome)
        setIdade(usuario.idade)
        setProfissao(usuario.profissao)
        setClicou(true)

    }

    
   

    return (
        <>
            <button onClick={mostrarUsuario} type='button'>Mostrar usuario</button>

            {clicou && (
                <p>
                Nome: {usuario.nome} , Idade: {usuario.idade} , Profissão: {usuario.profissao}
                </p>
            )}

            
            
        </>
    )
}

export default Comp1