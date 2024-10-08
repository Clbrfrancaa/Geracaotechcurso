function classificador (idade){
    if(idade < 5){
        return "Pode não man"
    }else if(idade > 5 && idade < 7){
        return"Infantil A"
    }else if(idade > 7 && idade <= 10){
        return"Infantil B"
    }else if(idade > 10 && idade <= 13){
        return"Juvenil A"
    }else if(idade > 13  && idade <= 17){
        return"Juvenil B"
    }else if(idade > 17){
        return"Adulto"
    }
}


function verificadorPositivo (x){
    if(x > 0){
        return true
    }else if (x < 0){
        return false
    }else{
        return "zero"
    }
}




function adicionaTarefa (tarefas){
    let tarefa = prompt('Quer adicionar quais tarefas?')
    tarefas.push(tarefa)
    return tarefas
}

function removeTarefa (tarefas){
    let tarefa = prompt('Suas tarefas são ' + tarefas + '\n Quer remover quais tarefas?');
    let index = tarefas.indexOf(tarefa);
    tarefas.splice(index, 1);
    return tarefas
}

