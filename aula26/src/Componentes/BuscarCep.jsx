function BuscarCep(){

    

    function buscar(){

        let cep = document.getElementById('cepDigitado').value
        cep = parseInt(cep)
        // let cepTela = document.createElement('h1')
        // cepTela.innerHTML = `Seu bairro é: ${}`

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(resposta => resposta.json())
            .then(dados => {
                let bairroTela = document.createElement('h3')
                let logradouroTela = document.createElement('h3')
                let localidadeTela = document.createElement('h3')
                let regiaoTela = document.createElement('h3')
                //  console.log(dados.bairro)
                // console.log(dados.logradouro)
                // console.log(dados.localidade)
                // console.log(dados.regiao)

                bairroTela.innerHTML = dados.bairro
                logradouroTela.innerHTML = dados.logradouro
                localidadeTela.innerHTML = dados.localidade
                regiaoTela.innerHTML = dados.regiao

                document.getElementById('cep2').appendChild(bairroTela)
                document.getElementById('cep2').appendChild(logradouroTela)
                document.getElementById('cep2').appendChild(localidadeTela)
                document.getElementById('cep2').appendChild(regiaoTela)
               
            })
            .catch(
                erro => {
                    console.log("Ocorreu um erro")
                    //Seu código vai aqui!!!
                }
            )

    }




    return(
        <>
            <h1>Buscar CEP</h1>
            <input id="cepDigitado" type="text" placeholder="Digite seu CEP"/>
            <button type="button" onClick={buscar}>Buscar</button>
            <h1></h1>
            <div id= "cep2">


            </div>
        
        
        
        
        </>
    )
}

export default BuscarCep