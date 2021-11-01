// Inserir ou Remover Elementos do Array

const frutas = ["melancia", "banana"];

// Adiciona um novo elemento ao final do Array
frutas.push("laranja");

console.log(frutas);
// Resultado: melancia, banana, laranja

// Remove o ultimo elemento do Array
frutas.pop();
// Resultado: melancia, banana

// Adiciona um novo elemento no inicio do Array, e retorna o elemento adicionado
frutas.unshift("laranja");
// Resultado: laranja, melancia, banana


// Remove o primeiro elemento do Array, e retorna o elemento removido
frutas.pop();
// Resultado: melancia, banana

const salgados = ["coxinha", "kibe", "empada"];
// Concatena um ou mais arrays retornando um novo Array
const alimentos = frutas.concat(salgados);
// Resultado: alimentos = melancia, banana, coxinha, kibe, empada


// slice Retorna um novo Array "fatiando" o Array de acordo com ínicio e fim
const numeros = [1, 2, 3, 4, 5];

// Abaixo, será eliminado os elementos do índice 0 ao 2
numeros.slice(0, 2);
// Resultado: [1, 2]

numeros.slice(2);
// Resultado: [3, 4, 5]

numeros.slice(-1);
// Resultado: [5]

numeros.slice(-3);
// Resultado: [3, 4, 5]


// splice altera um array adicionando novos elementos enquanto remove elementos antigos
const numeros2 = [1, 2, 3, 4, 5];

numeros2.splice(2);
// Resultado: remove [3, 4, 5]
console.log(numeros2);
// Resultado: [1, 2]

numeros2.splice(0, 0, "first");
// Resultado: []
console.log(numeros2);
// Resultado: ["first", 1, 2]


