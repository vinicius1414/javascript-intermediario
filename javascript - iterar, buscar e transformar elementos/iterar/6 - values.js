// Retorna um Array Iterator que contém os valores para cada elemento do Array

const arr = [1, 2, 3, 4];

const arrIterator = arr.values();

arrIterator.next();
// Resultado: {value: 1, done: false}

arrIterator.next();
// Resultado: {value: 2, done: false}

arrIterator.next();
// Resultado: {value: 3, done: false}

arrIterator.next();
// Resultado: {value: 4, done: true}
