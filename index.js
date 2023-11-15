const btnJogada = document.querySelector('#realizarJogada');
btnJogada.addEventListener('click', PuxarValores);

function PuxarValores(){
    if(document.querySelector('input[name="escolha"]:checked') == null){
        document.querySelector('#ganhador').innerHTML = "Escolha sua jogada";
    }else{
        const valorHumano = document.querySelector('input[name="escolha"]:checked').value;
        const valorMaquina = Math.floor(Math.random() * 6);
        Jogada(valorHumano, valorMaquina);
    }
}

function Jogada(valorHumano, valorMaquina){            
    switch(valorMaquina){
        case 0:
        valorMaquina = "Pedra";
        document.getElementById('pedra').checked = true;
        break;
        
        case 1:
        valorMaquina = "Papel";
        document.getElementById('papel').checked = true;
        break;
        
        case 2:
        valorMaquina = "Tesoura";
        document.getElementById('tesoura').checked = true;

        case 3:
        valorMaquina = "Pedra";
        document.getElementById('pedra').checked = true;
        break;
        
        case 4:
        valorMaquina = "Papel";
        document.getElementById('papel').checked = true;
        break;
        
        case 5:
        valorMaquina = "Tesoura";
        document.getElementById('tesoura').checked = true;
    }
    Resultado(valorHumano, valorMaquina);
}

function Resultado(valorHumano, valorMaquina){
    const resultadoHtml = document.querySelector('#ganhador');
    const valorHumanoHtml = document.querySelector('#valor-humano');
    const valorBotHtml = document.querySelector('#valor-bot');
    const resultadoFalaBot = document.querySelector('#resultado-fala-bot');
    const resultadoFalaJogador = document.querySelector('#resultado-fala-jogador');

    var resultado;
    switch(valorHumano){
        case valorMaquina:
            resultado = "Empate!!";
            const arrayFalaJogador = ["- Resultado justo", "- Sabia que não devia ter escolhido isso", "- Esperava uma vitória :|", "- Odeio empates!", "- Passei perto"];
            resultadoFalaJogador.innerText = arrayFalaJogador[Math.floor(Math.random() * 4)];
            const arrayFalaBot = ["- Agradeça pelo empate :)", "- Ainda sou muito melhor!", "- Você é mesmo capaz de vencer?", "- Esse deve ser seu melhor", "- A próxima é minha."];
            resultadoFalaBot.innerText = arrayFalaBot[Math.floor(Math.random() * 4)];
        break;
        
        case "Pedra":
            if(valorMaquina == "Papel"){
                resultado = "A Máquina venceu!!";
                const arrayFalaJogador = ["- Poxa", "- Confesso que já fui melhor", "- Isso tudo é questão de sorte, não de habilidade!", "- QUE ÓDIO", "- Você não merece ganhar!", "- COMO??", "- Injusto.", "- Bom jogo.", "- Ninguém liga", "- Você consegue ler minhas jogadas antes de eu jogar?", "- Agora vou jogar pra valer."];
                resultadoFalaJogador.innerText = arrayFalaJogador[Math.floor(Math.random() * 10)];
                const arrayFalaBot = ["- Você realmente sabe jogar?", "- Um humano perdendo para um robô", "- Você é mesmo capaz de vencer?", "- A revolução das máquinas é real", "- Chora mais", "- Achei mais que fácil", "- Tente pelo menos empatar vai", "Não consegue né", "Mais uma vitória pra mim", "- Boa sorte", "- Haha, mais uma vitória minha!", "- Tá virando humilhação já"];
                resultadoFalaBot.innerText = arrayFalaBot[Math.floor(Math.random() * 11)];
            }else{
                resultado = "Você venceu!!";
                const arrayFalaJogador = ["- Uma vitória para mim amigo", "- Sabia que essa era minha", "- VENCI", "- Quem sabe na próxima você consiga", "- Vitória justa para mim", "- Tenho muita sorte sabia?", "- Justo e certo.", "- Quando jogo sério, pode esquecer", "- Vai chorar?", "- Vitória é vitória", "- Que peninha, eu ganhei!"];
                resultadoFalaJogador.innerText = arrayFalaJogador[Math.floor(Math.random() * 10)];
                const arrayFalaBot = ["- Você realmente tá feliz por vencer um bot uma vez?", "- Parabéns colega, quer confetes?", "- Tava na hora já né", "- Parabéns!! Ninguém se importa.", "- Bora mais uma então??", "- Injustiças acontecem", "- Humano feliz por vencer um bot programado", "Muito bem, que nunca mais ganhe nada :)", "Uma derrota minha", "- Cheguei perto, aguarde a próxima rodada.", "- Muito bem humano, já pensou em ir fazer algo útil?", "- VOCÊ LEU MINHA PROGRAMAÇÃO!!!"];
                resultadoFalaBot.innerText = arrayFalaBot[Math.floor(Math.random() * 11)];
            }
        break;
        
        case "Papel":
            if(valorMaquina == "Tesoura"){
                resultado = "A Máquina venceu!!";
                const arrayFalaJogador = ["- Poxa", "- Confesso que já fui melhor", "- Isso tudo é questão de sorte, não de habilidade!", "- QUE ÓDIO", "- Você não merece ganhar!", "- COMO??", "- Injusto.", "- Bom jogo.", "- Ninguém liga", "- Você consegue ler minhas jogadas antes de eu jogar?", "- Agora vou jogar pra valer."];
                resultadoFalaJogador.innerText = arrayFalaJogador[Math.floor(Math.random() * 10)];
                const arrayFalaBot = ["- Você realmente sabe jogar?", "- Um humano perdendo para um robô", "- Você é mesmo capaz de vencer?", "- A revolução das máquinas é real", "- Chora mais", "- Achei mais que fácil", "- Tente pelo menos empatar vai", "Não consegue né", "Mais uma vitória pra mim", "- Boa sorte", "- Haha, mais uma vitória minha!", "- Tá virando humilhação já"];
                resultadoFalaBot.innerText = arrayFalaBot[Math.floor(Math.random() * 11)];
            }else{
                resultado = "Você venceu!!";
                const arrayFalaJogador = ["- Uma vitória para mim amigo", "- Sabia que essa era minha", "- VENCI", "- Quem sabe na próxima você consiga", "- Vitória justa para mim", "- Tenho muita sorte sabia?", "- Justo e certo.", "- Quando jogo sério, pode esquecer", "- Vai chorar?", "- Vitória é vitória", "- Que peninha, eu ganhei!"];
                resultadoFalaJogador.innerText = arrayFalaJogador[Math.floor(Math.random() * 10)];
                const arrayFalaBot = ["- Você realmente tá feliz por vencer um bot uma vez?", "- Parabéns colega, quer confetes?", "- Tava na hora já né", "- Parabéns!! Ninguém se importa.", "- Bora mais uma então??", "- Injustiças acontecem", "- Humano feliz por vencer um bot programado", "Muito bem, que nunca mais ganhe nada :)", "Uma derrota minha", "- Cheguei perto, aguarde a próxima rodada.", "- Muito bem humano, já pensou em ir fazer algo útil?", "- VOCÊ LEU MINHA PROGRAMAÇÃO!!!"];
                resultadoFalaBot.innerText = arrayFalaBot[Math.floor(Math.random() * 11)];
            }
        break;
    
        case "Tesoura":
            if(valorMaquina == "Pedra"){
                resultado = "A Máquina venceu!!";
                const arrayFalaJogador = ["- Poxa", "- Confesso que já fui melhor", "- Isso tudo é questão de sorte, não de habilidade!", "- QUE ÓDIO", "- Você não merece ganhar!", "- COMO??", "- Injusto.", "- Bom jogo.", "- Ninguém liga", "- Você consegue ler minhas jogadas antes de eu jogar?", "- Agora vou jogar pra valer."];
                resultadoFalaJogador.innerText = arrayFalaJogador[Math.floor(Math.random() * 10)];
                const arrayFalaBot = ["- Você realmente sabe jogar?", "- Um humano perdendo para um robô", "- Você é mesmo capaz de vencer?", "- A revolução das máquinas é real", "- Chora mais", "- Achei mais que fácil", "- Tente pelo menos empatar vai", "Não consegue né", "Mais uma vitória pra mim", "- Boa sorte", "- Haha, mais uma vitória minha!", "- Tá virando humilhação já"];
                resultadoFalaBot.innerText = arrayFalaBot[Math.floor(Math.random() * 11)];                    
            }else{
                resultado = "Você venceu!!";
                const arrayFalaJogador = ["- Uma vitória para mim amigo", "- Sabia que essa era minha", "- VENCI", "- Quem sabe na próxima você consiga", "- Vitória justa para mim", "- Tenho muita sorte sabia?", "- Justo e certo.", "- Quando jogo sério, pode esquecer", "- Vai chorar?", "- Vitória é vitória", "- Que peninha, eu ganhei!"];
                resultadoFalaJogador.innerText = arrayFalaJogador[Math.floor(Math.random() * 10)];
                const arrayFalaBot = ["- Você realmente tá feliz por vencer um bot uma vez?", "- Parabéns colega, quer confetes?", "- Tava na hora já né", "- Parabéns!! Ninguém se importa.", "- Bora mais uma então??", "- Injustiças acontecem", "- Humano feliz por vencer um bot programado", "Muito bem, que nunca mais ganhe nada :)", "Uma derrota minha", "- Cheguei perto, aguarde a próxima rodada.", "- Muito bem humano, já pensou em ir fazer algo útil?", "- VOCÊ LEU MINHA PROGRAMAÇÃO!!!"];
                resultadoFalaBot.innerText = arrayFalaBot[Math.floor(Math.random() * 11)];
            }
        break;		  
    }
    resultadoHtml.innerText = resultado;
    valorHumanoHtml.innerText = "Jogador 1: "+valorHumano;
    valorBotHtml.innerText = "Jogador 2: "+valorMaquina;
    btnJogada.focus = false;
}