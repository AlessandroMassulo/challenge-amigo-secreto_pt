//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function textFromField(idCampo){
      let inputElement = document.getElementById(idCampo);
      let textFromField = inputElement.value;
     return textFromField;
}

function cleanField(idCampo){
    let inputElement =document.getElementById(idCampo);
    inputElement.value ="";
}

function changeText(idCampo,newText){
    let inputElement = document.getElementById(idCampo);
    inputElement.value=newText;
}

listaAmigos

function adicionarAmigo() {
    let novoAmigo = textFromField('amigo');
    if (novoAmigo === "") {
        alert('Por favor, insira um nome.');
    } else if (amigos.includes(novoAmigo)) {
        alert('O nome já consta na lista, favor alterar')
    } else {
        amigos.push(novoAmigo);
    }
    changeText('listaAmigos',amigos)        
    cleanField('amigo');       
console.log(amigos)
}
