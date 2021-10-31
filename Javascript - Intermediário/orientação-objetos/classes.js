/*

Classes:
- ES6
- é a simplificação da herança de protótipos
- palavra chave: class


*/


/*
            VERSÃO EM FUNÇÃO:

function Animal (qtdePatas) {
    this.qtdePatas = qtdePatas;
}

function Cachorro (morde) {
    Animal.call(this, 4);
    // A função Animal receberá o this (morde) e o número 4
    this.morde = morde;
    // o morde dessa função será igual ao morde do paramêtro
}

const pug = new Cachorro (false);
    // pug receberá uma função Cachorro, e como a função cachorro
    //  recebe a função Animal com o paramêtro 4 já definido, na impressão, 
    //  teremos como resultado: false e 4
console.log(pug);
    // resultado: qtdePatas: 4, morde: false
*/

//          VERSÃO EM CLASSE:
   
class Animal {
    constructor(qtdePatas) {
        this.qtdePatas = 4;
    }
}

class Cachorro extends Animal {
    constructor (morde) {
        super(4);
        this.morde = 4;
    }
}

const pug = new Cachorro (false);

console.log(pug);
// resultado: qtdePatas: 4, morde: 4
