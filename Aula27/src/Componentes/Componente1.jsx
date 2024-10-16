import './Componente1.css'
import styles from './Componente1.module.css'

function Componente1(){
    return (
        <>
            <h1>Titulo do Componente 1</h1>
            <p className={`${styles.primaria} ${styles.fonte}`}>Paragráfo do Componente 1</p>
            <p className={styles.secundaria}>Paragráfo do Componente 1</p>

            
        </>
    )
}

export default Componente1