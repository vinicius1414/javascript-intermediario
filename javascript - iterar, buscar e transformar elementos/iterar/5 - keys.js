// Retorna um Array Iterator que contém as chaves para cada elemento do Array

const arr = [1, 2, 3, 4];

const arrIterator = arr.keys();

arrIterator.next();
// Resultado: {value: 0, done: false}

arrIterator.next();
// Resultado: {value: 1, done: false}

arrIterator.next();
// Resultado: {value: 2, done: false}

arrIterator.next();
// Resultado: {value: 3, done: true}


