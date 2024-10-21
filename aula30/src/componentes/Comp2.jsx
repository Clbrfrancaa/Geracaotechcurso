function Comp2 (){

    let itens = ['item1', 'item2', 'item3', 'item4']
    let usuarios = [
        {id:1, nome: 'João', idade: 25},
        {id:2, nome: 'Maria', idade: 30},
        {id:3, nome: 'Pedro', idade: 35}
    ]

    function CriarCard({usuario}){
        return(
        <div style={{border: '1px solid red', backgroundColor: 'azure', width:'250px'}}>
            <p>Nome:{usuario.nome}</p>
            <p>Idade:{usuario.idade}</p>
            <img src="https://static.wikia.nocookie.net/crepusculo/images/a/a0/Bella_Cullen.jpg/revision/latest?cb=20130325234621&path-prefix=pt" />
            
        </div>
        )

    }

    return(
        <>
        <h2>Loops com map</h2>
        <ul>
            {itens.map((item, i) => (
                <li key={i}>{item} </li>
            ))}
        </ul>

        <ul>
            {usuarios.map((usuario) => (
                <li key={usuario.id}>{usuario.nome}, {usuario.idade}</li>
            ))}
        </ul>

        <h2>Loop para criação de cards</h2>
        <div>

        {usuarios.map((usuario) => (
            <CriarCard key={usuario.id} usuario={usuario}/>

        ))}


        </div>



        
        
        </>
    )
}

export default Comp2