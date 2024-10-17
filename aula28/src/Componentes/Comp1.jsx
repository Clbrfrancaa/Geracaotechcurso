import { useState } from 'react'
import styles from './Comp1.module.css'
import Imagens from './Imagens'

function Comp1() {

    let imagens = ['s1.jpg','g1.jpg']
    let imagens2 = ['s1.jpg','b1.jpg']
    let biscoito = 'biscoito.jpg'
    
    let [imgAtual, setImgAtual] = useState(imagens[0])

    let [imgAt2, setImgAt2] = useState(imagens2[0])

    function trocarImagem(){
        if(imgAt2 == imagens[0]){
            setImgAt2(imagens2[1])
        }else{
            setImgAt2(imagens2[0])
        }

    }

    let [tamanho, setTamanho] = useState(200)

    function aumentaImagem(){

        setTamanho(tamanho + 50)
        
    }

    function diminuiImagem(){
        
        setTamanho(tamanho - 50)
        
    }



    return(
            <>
                  <h1>Hooks</h1>
                  <h2>Principais Hooks</h2>

                  <ul className={styles.lista}>
                    <li>useState</li>
                    <li>useEffect</li>
                    <li>useContext</li>
                    <li>useReducer</li>
                    <li>useMemo</li>
                    <li>useCallback</li>
                  </ul>

                    
                  <h2>useState</h2>
                 <div className={styles.fotoTrocada}>
                     <img  onClick={() => {imgAtual == imagens[0] ? setImgAtual(imagens[1]):setImgAtual(imagens[0])}} src= {imgAtual} alt=''/>
                     <img onClick={trocarImagem} src={imgAt2} alt=''/>
                     <img  src= {biscoito} style={{width:`${tamanho}px`}}/>
                 </div>
                    <button onClick={aumentaImagem} type='button'>Aumentar</button>
                    <button onClick={diminuiImagem} type='button'>Diminuir</button>

            </>
    )
}

export default Comp1