//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
const listaAmigosElemento = document.getElementById('listaAmigos');
const resultadoElemento = document.getElementById('resultado');


function textFromField(idCampo){
      let inputElement = document.getElementById(idCampo);
      let textFromField = inputElement.value;
     return textFromField;
}

function atualizarLista(){
    listaAmigosElemento.innerHTML='';
    for (let i =0; i < amigos.length; i++){
        const item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigosElemento.appendChild(item);
    }
}

function cleanField(idCampo){
    let inputElement =document.getElementById(idCampo);
    inputElement.value ="";
}

function adicionarAmigo() {
    let novoAmigo = textFromField('amigo');
    if (novoAmigo === "") {
        alert('Por favor, insira um nome.');
    } else if (amigos.includes(novoAmigo)) {
        alert('O nome já consta na lista, favor alterar');
    } else {
        amigos.push(novoAmigo);
    }
    atualizarLista();
    cleanField('amigo');       
    console.log(amigos);
}

function sortearAmigo(){
    if (amigos.length<2) {
        alert('Adicione pelo menos 2 pessoas para começar o sorteio');
        return;
    }
    const indiceSorteado = Math.floor(Math.random()*amigos.length);
    const ganhador = amigos[indiceSorteado];
    listaAmigosElemento.innerHTML='';
    resultadoElemento.innerHTML=`O amigo secreto é: ${ganhador}`;
}
