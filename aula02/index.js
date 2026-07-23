// const objeto = {a: 1, b: 2}

// for(const item in objeto){
//     console.log(objeto[item])
// }

// const lista = [{}, {}]

// for(const item of lista){
//     console.log(item)
// }

// const frase = "The quick brown fox jumps over the lazy dog."

// console.log(frase.includes("Fox"))

// const a = 5 * 2

// console.log(Number.isNaN(a))
// Number.parseFloat
// Number.parseInt


// const a =[]
// const b ={}

// console.log(Array.isArray(b), typeof b)

// a.push("a")
// b.push("a")

// const a = {a: 2, b: 3}
// const b = {d: 5}

// const result = Object.assign(a, b)

// console.log(result)

// function meuAssign(target, source){
//     if(Array.isArray(target) || Array.isArray(source)){
//         return "Função não aceita arrays"
//     }
//     if(typeof target === 'string' || typeof source === 'string'){
//         return "Função não aceita strings"
//     }

//     const resultado = {...target}
    
//     for(const item in source){
//         resultado[item] = source[item]
//     }

//     return resultado
// }

// console.log(meuAssign(a, b))

// const a = {a: [1, 2, 3]}

// const resultado1 = a.map((element, index, array) => element * 2)
// console.log(resultado1)

// function meuMap(lista, cb){
//     if(!Array.isArray(lista)){
//         return "Função aceita apenas arrays"
//     }

//     const resultado = []

//     for(let i = 0; i < lista.length; i++){
//         const cbResultado = cb(lista[i], i, lista)
//         resultado.push(cbResultado)
//     }

//     return resultado
// }

// const resultado2 = meuMap(a, (element, index, array) => element * 3)

// console.log(resultado2)


// const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const result = words.filter((word) => word.length > 6);

// function meuFilter(lista, cb){
//     const resultado = []

//     for(let i = 0; i < lista.length; i++){
//         if(cb(lista[i])){
//             resultado.push(lista[i])
//         }
//     }
    
//     return resultado
// }

// const resultado = meuFilter(words, (word) => word.length > 6)
// console.log(resultado)


// const objeto = {
//   a: "some string",
//   b: 42,
//   c: false,
// };

// // console.log(Object.keys(objeto));

// function meuKeys(objeto){
//     const resultado = []

//     for(const chave in objeto){
//         resultado.push(chave)
//     }

//     return resultado
// }

// const resultado = meuKeys(objeto)
// console.log(resultado)

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const result = Object.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? "restock" : "sufficient",
);
// console.log(result);


function meuGroupBy(lista, cb){
    const resultado = {}

    for(let i = 0; i < lista.length; i++){
        const chave = cb(lista[i])
        if(!resultado[chave]) resultado[chave] = []
        resultado[chave].push(lista[i])
    }

    return resultado
}

const resultado = meuGroupBy(inventory, ({quantity}) => quantity < 6 ? "restock" : "sufficient")
console.log(resultado)

const {quantity} = inventory[0]

console.log(quantity)