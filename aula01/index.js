// const lista = [[1,2,3], [4,5,6], [7,8,9]]

// for(let linha = 0; linha < lista.length; linha++){
//     const celula = lista[linha];
//     let resultado = "["
//     for(let linha = 0; linha < celula.length; linha++){
//         resultado += `${celula[linha]} `
//     }
//     console.log(resultado.trim() + "]");
// }

// for(let i = 0; i < lista.length; i++){
//     if(i === 1){
//         continue;
//     }
//     console.log(lista[i][0]);
// }




// const lista = [1,2,3,4,5,6,7,8,9];

// for(const numero of lista){
//     if(numero % 2 === 0){
//         console.log(numero)
//     }
// }


// const numeros = [4,6,8,10,12,14,16,18,20]

// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] % 2 === 0){
//         console.log(numeros[i])
//     }
// }


// const lista2 = [[1,2,3], [4,5,6], [7,8,9]]

// for(let linha = 0; linha < lista2.length; linha++){
//     const celula = lista[linha]
//     for(let linha = 0; linha < celula.length; linha++){
//         if(celula[linha] % 2 === 0){
//             console.log(teste)
//         }
//     }
// }


// const lista = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25]
// ]

// for (const subLista of lista) {
//     for (const numero of subLista) {
//         if (numero % 2 !== 0) {
//             if (numero >= 19) {
//                 break
//             }
//             console.log(numero)
//         }
//     }
// }


// let contador = 0
// let limitAtingido = false

// for (let i = 0; i < lista.length && !limitAtingido; i++) {
//     for (let j = 0; j < lista[i].length && !limitAtingido; j++) {
//         const numero = lista[i][j]
//         if (numero > 17) {
//             limitAtingido = true
//             break
//         }
//         if (numero % 2 !== 0){
//             contador++
//             console.log(numero)
//         }
//     }
// }


// for(let i = 0; i < lista.length; i++){
//     for(let j = 0; j < lista.length; j++){
//         if(lista[i][j] % 2 != 0 && lista[i][j] < 19){
//             console.log(lista[i][j])
//         }
//     }
// }


// loop: for(let linha = 0; linha < lista.length; linha++){
//     const celula = lista[linha]
//     for(let linha = 0; linha < lista.length; linha++){
//         if(celula[linha] >= 19){
//             break loop
//         } else if (celula[linha] % 2 != 0){
//             console.log(celula[linha])
//         }
//     }
// }











//123
//456
//789

// let i = 0
// while(i < 10){
//     console.log(i++);
// }

// let i = 0
// do{
//     console.log("a")
// } while (i > 10);


// outerLoop: while(true) {
//     let i = 0
//     while(true){
//         console.log(i++)
//         if(Math.floor(Math.random() * 10) === Math.floor(Math.random() * 10)){
//             break outerLoop;
//         }
//     }
// }

