// Retorna um novo Array assim como a função map e executa um flat de profundidade 1

const arr = [1, 2, 3, 4];

arr.flatMap(value => [value * 2]);
// Resultado: [2, 4, 6, 8]

arr.flatMap(value => [[value * 2]]);
// Resultado: [[2], [4], [6], [8]]
