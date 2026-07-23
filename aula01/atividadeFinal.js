const elementos = document.getElementsByTagName("input");
const result = document.getElementById("result");

function calcularMedia(event){
    event.preventDefault();
    let soma = 0;
    let media = 0;

    for(let i = 0; i < elementos.length; i++){
        soma = soma + Number(elementos[i].value)
    }

    media = soma / elementos.length

    result.innerText = media
}