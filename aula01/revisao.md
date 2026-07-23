diferenca de |let| X |const| X |var|
    {var a = 10}    x   {var a = 10}
    console.log(a)  x   console.log(a)

    function abc(){
        var a = "teste"
    }

    console.log(a)

shadowing
    const a = 10;

    function teste(){
        const a = 50;
        return function innerTeste(){
            const a = 120;
            {
                const a = 200;
                console.log(a)
            }
        }
    }

    console.log(a);
    const exec = teste();
    exec();











-------ATIVIDADES-------

1 - O código abaixo possui algum erro?
{
    var nome = "João";
    let idade = 20;
    const cidade = "Fortaleza";
}

console.log(nome); //joao
console.log(idade); //20
console.log(cidade); //fortaleza








2 - Qual o fluxo de execução deste código?
const valor = 1;

function teste() {
    var nome = "JavaScript";

    if (true) {
        let idade = 25;
        const valor = 2;
        {
            const valor = 3;
            console.log(valor);
        }
        console.log(valor);
    }

    console.log(nome);
    console.log(idade);
}

console.log(valor);
teste();
console.log(nome);